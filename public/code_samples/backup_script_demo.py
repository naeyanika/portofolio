#!/usr/bin/env python3
"""
OPTIMA Database Backup Automation Script
----------------------------------------
Author: Dede Yudha Nersanto
Description: 
    Automated backup solution utilizing Python & Windows Task Scheduler.
    Exports 44 Supabase tables to CSV/JSON, uploads to MEGA Cloud with retention policies, 
    and sends Telegram alerts upon completion.

Features:
    - Multi-table export (CSV & JSON format)
    - Automated ZIP compression with timestamp
    - Secure upload to MEGA Cloud (Async)
    - Retention policy enforcement (Clean up old backups)
    - Real-time notifications via Telegram Bot
    - Error handling and logging

Note: Credentials in this file have been redacted for security purposes.
"""

import os
import sys
import csv
import json
import shutil
import zipfile
import tempfile
import traceback
import asyncio
from datetime import datetime, timezone, timedelta
import requests

# --- DEPENDENCIES CHECK ---
try:
    from supabase import create_client
    HAS_SUPABASE = True
except ImportError:
    HAS_SUPABASE = False

try:
    from mega.client import Mega as AsyncMega
    HAS_MEGA = True
except ImportError:
    HAS_MEGA = False

try:
    import psycopg2
    from psycopg2.extras import RealDictCursor
    HAS_PG = True
except ImportError:
    HAS_PG = False


# ================ CONFIGURATION (REDACTED) ================

# 1. Database Configuration
# -------------------------
PG_CONN = os.environ.get("PG_CONN") or None
SUPABASE_URL = "YOUR_SUPABASE_URL"  # Redacted
SUPABASE_KEY = "YOUR_SUPABASE_SERVICE_KEY"  # Redacted

# List of all tables to backup
SUPABASE_TABLE_LIST = ",".join([
    "account", "addendum", "app_settings", "audit_counts", "audit_fraud",
    "audit_master", "audit_regular", "audit_schedule", "auditor_aliases",
    "auditor_assignments", "auditors", "audits", "branch_activity", "branches",
    "branches_info", "component_access_control", "dbLoanSaving", "detail_nasabah_srss",
    "documents", "email", "fix_asset", "fraud_cases", "fraud_payments",
    "fraud_payments_audits", "grammar_requests", "kdp", "letter", "letter_sequence",
    "matriks", "notification_reads", "notifications", "pic", "profiles",
    "pull_requests", "recap", "rpm_letters", "system_settings", "tak", "thc", "tlp",
    "tools_errors", "user_roles", "user_status", "work_paper_auditors",
    "work_paper_persons", "work_papers"
])

# 2. Cloud Storage (MEGA) Configuration
# -------------------------------------
MEGA_EMAIL = "your.email@example.com" # Redacted
MEGA_PASSWORD = "YOUR_MEGA_PASSWORD" # Redacted
MEGA_REMOTE_FOLDER = os.environ.get("MEGA_REMOTE_FOLDER", "Backups/OPTIMA")
RETENTION_WEEKS = int(os.environ.get("RETENTION_WEEKS", "8"))

# 3. Notification (Telegram) Configuration
# ----------------------------------------
TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN" # Redacted
TELEGRAM_CHAT_ID = "YOUR_CHAT_ID" # Redacted

# 4. Logging
# ----------
LOG_DIR = os.environ.get("BACKUP_LOG_DIR", r"D:\OPTIMA_backup\logs")


# ================ HELPER FUNCTIONS ================

def log(msg, error=False):
    """Log messages to console and file with timestamp."""
    os.makedirs(LOG_DIR, exist_ok=True)
    logfile = os.path.join(LOG_DIR, f"backup_{datetime.now().strftime('%Y%m%d')}.log")
    
    ts = datetime.now().isoformat(sep=' ', timespec='seconds')
    line = f"[{ts}] {msg}"
    print(line)
    
    with open(logfile, "a", encoding="utf-8") as f:
        f.write(line + ("\n" if not line.endswith("\n") else ""))

def send_telegram(message):
    """Send status updates to Telegram channel."""
    if "YOUR_" in TELEGRAM_BOT_TOKEN:
        log("Telegram credentials not configured.")
        return

    try:
        url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
        payload = {"chat_id": TELEGRAM_CHAT_ID, "text": message}
        r = requests.post(url, data=payload, timeout=15)
        if r.status_code == 200:
            log("Telegram notification sent.")
        else:
            log(f"Telegram send failed: {r.status_code} {r.text}")
    except Exception as e:
        log(f"Telegram exception: {e}")

def zip_folder(src_dir, zip_path):
    """Compress the exported folder into a ZIP file."""
    with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_DEFLATED) as z:
        for root, _, files in os.walk(src_dir):
            for fname in files:
                fpath = os.path.join(root, fname)
                arc = os.path.relpath(fpath, src_dir)
                z.write(fpath, arcname=arc)

# ================ CORE BACKUP LOGIC ================

async def upload_to_mega_async(local_file, remote_folder, zip_name):
    """Authenticate and upload file to MEGA asynchronously."""
    try:
        mega = AsyncMega()
        await mega.login(MEGA_EMAIL, MEGA_PASSWORD)
        log(f"Logged into MEGA as {MEGA_EMAIL}")
        
        # Folder management logic (Create if not exists)
        # ... [Truncated for brevity, standard folder search/create logic] ...
        
        # Upload
        uploaded = await mega.upload(local_file) # Simplified for demo
        log(f"✅ Uploaded {zip_name} successfully")
        return True
            
    except Exception as e:
        log(f"MEGA upload failed: {e}", True)
        return False

async def cleanup_old_backups_mega_async(retention_weeks):
    """Enforce retention policy: delete backups older than X weeks."""
    # ... [Logic to iterate files and delete old based on timestamp] ...
    log("Checking and cleaning up old backups...")

async def run_backup():
    """Main backup orchestration function."""
    start_time = datetime.now()
    timestamp = start_time.strftime("%Y%m%d%H%M%S")
    date_label = start_time.strftime("%d-%m-%Y")
    
    log("=" * 50)
    log(f"=== START OPTIMA DATABASE BACKUP: {date_label} ===")
    log("=" * 50)
    
    # 1. Prepare Tables
    tables = [t.strip() for t in SUPABASE_TABLE_LIST.split(",") if t.strip()]
    tmpdir = tempfile.mkdtemp(prefix="optima_bk_")
    
    try:
        # 2. Export Data
        log(f"Starting export for {len(tables)} tables...")
        # ... [Loop through tables, fetch data from Supabase/PG, write CSV/JSON] ...
        
        # 3. Compression
        zip_name = f"OPTIMA-BACKUP-{date_label}.zip"
        zip_path = os.path.join(tempfile.gettempdir(), zip_name)
        zip_folder(tmpdir, zip_path)
        zip_size = os.path.getsize(zip_path)
        log(f"Compression complete: {zip_name} ({zip_size/1024/1024:.2f} MB)")
        
        # 4. Upload Cloud
        upload_success = await upload_to_mega_async(zip_path, MEGA_REMOTE_FOLDER, zip_name)
        
        if upload_success:
            send_telegram(
                f"✅ Backup OPTIMA Berhasil!\n"
                f"📁 File: {zip_name}\n"
                f"📊 Size: {zip_size/1024/1024:.2f} MB\n"
                f"📋 Tables: {len(tables)}"
            )
            # 5. Retention Cleanup
            await cleanup_old_backups_mega_async(RETENTION_WEEKS)
        else:
            send_telegram(f"❌ Backup Gagal saat Upload ke Cloud")
            
    finally:
        # 6. Local Cleanup
        shutil.rmtree(tmpdir)
        if zip_path and os.path.exists(zip_path):
            os.remove(zip_path)
        log("Local temp files cleaned up.")

if __name__ == "__main__":
    if not (HAS_SUPABASE and HAS_MEGA):
        print("CRITICAL: Missing required libraries (supabase, async-mega-py).")
    else:
        asyncio.run(run_backup())
