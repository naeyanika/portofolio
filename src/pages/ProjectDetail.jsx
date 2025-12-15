import { AnimatePresence, motion } from 'framer-motion';
import {
    AlertTriangle,
    ArrowLeft,
    ExternalLink,
    FileText,
    Lightbulb,
    Rocket,
    Send,
    Terminal,
    X,
    Zap,
    ZoomIn
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLanguage } from '../context/LanguageContext';

const ProjectDetail = () => {
    const { pathname } = useLocation();
    const { language, setLanguage } = useLanguage();
    const [selectedImage, setSelectedImage] = useState(null);
    
    // Alias for compatibility
    const lang = language;
    const setLang = setLanguage;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Determine current project based on URL
    const isN8n = pathname.includes('n8n-automation');
    const isBackup = pathname.includes('optima-backup');

    // Content Database
    const content = {
        'n8n-automation': {
            id: {
                title: "n8n Workflow Automation: Enterprise ETL Orchestration",
                tags: ["n8n", "Docker", "PostgreSQL", "Webhook", "Automation"],
                summary: "Mengelola orkestrasi data kompleks menggunakan n8n self-hosted di Docker. Menghubungkan berbagai sistem internal (Supabase, SQL Server) dengan layanan eksternal secara otomatis dan real-time.",
                challenge: {
                    title: "Tantangan",
                    points: [
                        "Proses ETL manual memakan waktu berjam-jam dan rentan human error.",
                        "Kebutuhan untuk menjalankan workflow audit otomatis yanpa harus menyewa VM mahal (menggunakan PC Audit yang ada)."
                    ]
                },
                solution: {
                    title: "Solusi",
                    steps: [
                        { title: "Docker Deployment", desc: "Deploy n8n dengan Docker Compose agar portabel dan mudah di-restore." },
                        { title: "Auto-Restart", desc: "Konfigurasi Docker restart policy 'unless-stopped' untuk ketahanan sistem." },
                        { title: "Webhook Triggers", desc: "Memicu workflow instan dari aplikasi frontend (dashboard)." },
                        { title: "Secure Credentials", desc: "Manajemen credential terpusat di n8n vault." }
                    ]
                },
                impact: {
                    title: "Dampak",
                    desc: "Mengubah proses batch manual menjadi event-driven automation, mengurangi latency data dari harian menjadi real-time."
                }
            },
            en: {
                title: "n8n Workflow Automation: Enterprise ETL Orchestration",
                tags: ["n8n", "Docker", "PostgreSQL", "Webhook", "Automation"],
                summary: "Managing complex data orchestration using self-hosted n8n on Docker. Connecting various internal systems (Supabase, SQL Server) with external services automatically and in real-time.",
                challenge: {
                    title: "The Challenge",
                    points: [
                        "Manual ETL processes took hours and were prone to human error.",
                        "Need to run automated audit workflows without renting expensive VMs (utilizing existing Audit PCs)."
                    ]
                },
                solution: {
                    title: "Solution",
                    steps: [
                        { title: "Docker Deployment", desc: "Deploy n8n with Docker Compose for portability and easy restoration." },
                        { title: "Auto-Restart", desc: "Configured Docker restart policy 'unless-stopped' for system resilience." },
                        { title: "Webhook Triggers", desc: "Trigger instant workflows from frontend applications (dashboard)." },
                        { title: "Secure Credentials", desc: "Centralized credential management in n8n vault." }
                    ]
                },
                impact: {
                    title: "Impact",
                    desc: "Transformed manual batch processes into event-driven automation, reducing data latency from daily to real-time."
                }
            }
        },
        'optima-backup': {
            id: {
                title: "OPTIMA Backup Engine: Python & Task Scheduler",
                tags: ["Python", "Task Scheduler", "Supabase API", "MEGA Cloud", "Security"],
                summary: "Sistem backup otomatis yang dibangun dengan Python untuk mengamankan data kritis perusahaan. Berjalan terjadwal di Windows Server/PC, mengekspor puluhan tabel database, mengenkripsi, dan mengunggahnya ke cloud storage terpisah.",
                challenge: {
                    title: "Tantangan",
                    points: [
                        "Database Cloud memiliki limitasi retensi backup gratis.",
                        "Perlu salinan data independen (off-site backup) untuk Disaster Recovery Plan.",
                        "Proses manual backup memakan waktu HR audit."
                    ]
                },
                solution: {
                    title: "Solusi",
                    steps: [
                        { title: "Python Scripting", desc: "Script kustom untuk fetch data via API, konversi JSON/CSV, dan kompresi ZIP." },
                        { title: "Task Scheduler", desc: "Memanfaatkan Windows Task Scheduler untuk eksekusi reliabel tanpa cron job Linux." },
                        { title: "Cloud Upload", desc: "Integrasi Mega.nz API untuk penyimpanan cloud terenkripsi." },
                        { title: "Telegram Alerts", desc: "Notifikasi hasil backup (sukses/gagal) langsung ke HP Admin." }
                    ]
                },
                impact: {
                    title: "Dampak",
                    desc: "Menjamin ketersediaan data historis 100% dan mengurangi risiko kehilangan data akibat kegagalan vendor cloud utama."
                }
            },
            en: {
                title: "OPTIMA Backup Engine: Python & Task Scheduler",
                tags: ["Python", "Task Scheduler", "Supabase API", "MEGA Cloud", "Security"],
                summary: "Automated backup system built with Python to secure critical company data. Runs on a schedule on Windows Server/PC, exporting dozens of database tables, encrypting, and uploading them to separate cloud storage.",
                challenge: {
                    title: "The Challenge",
                    points: [
                        "Cloud Database has free backup retention limitations.",
                        "Need for independent data copies (off-site backup) for Disaster Recovery Plan.",
                        "Manual backup processes consumed HR audit time."
                    ]
                },
                solution: {
                    title: "Solution",
                    steps: [
                        { title: "Python Scripting", desc: "Custom script to fetch data via API, convert to JSON/CSV, and ZIP compression." },
                        { title: "Task Scheduler", desc: "Utilizing Windows Task Scheduler for reliable execution without Linux cron jobs." },
                        { title: "Cloud Upload", desc: "Mega.nz API integration for encrypted cloud storage." },
                        { title: "Telegram Alerts", desc: "Backup result notifications (success/fail) sent directly to Admin phones." }
                    ]
                },
                impact: {
                    title: "Impact",
                    desc: "Ensured 100% historical data availability and reduced risk of data loss due to primary cloud vendor failures."
                }
            }
        }
    };

    // Fallback if route not matched
    const currentData = isN8n ? content['n8n-automation'][lang] : (isBackup ? content['optima-backup'][lang] : content['n8n-automation'][lang]);

     // Sample Code for Display (Backup Project)
    const backupCode = `
# Core Backup Logic
async def run_backup():
    print(f"🚀 Starting Backup Routine: {datetime.now()}")
    
    # 1. Fetch & Export Data
    tables = get_supabase_tables()
    for table in tables:
        export_to_csv(table)
        
    # 2. Compress & Encrypt
    zip_name = f"OPTIMA-BACKUP-{date_label}.zip"
    create_secure_zip(files, zip_name)
    
    # 3. Off-site Upload
    upload_success = await upload_to_mega_async(zip_name)
    
    # 4. Notify Admin
    if upload_success:
        send_telegram(f"✅ Backup Successful! Size: {get_size(zip_name)}")
    else:
        send_telegram("❌ Backup Failed! Check logs.")
`.trim();

    return (
        <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 pb-20">
            {/* Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
                   <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-semibold hidden sm:inline">Back to Portfolio</span>
                   </Link>

                   <div className="flex bg-slate-900 rounded-full p-1 border border-slate-800">
                       <button onClick={() => setLang('id')} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${lang === 'id' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>ID</button>
                       <button onClick={() => setLang('en')} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${lang === 'en' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>EN</button>
                   </div>
                </div>
            </nav>

            <main className="pt-32 max-w-5xl mx-auto px-6">
                
                {/* Header Title */}
                <div className="mb-12 animate-slide-up">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {currentData.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">{currentData.title}</h1>

                    {/* === VISUALIZATION SECTION: DYNAMIC BASED ON PROJECT === */}
                    <div className="mb-20 mt-8">
                        
                        {/* CASE 1: n8n VISUALIZATION */}
                        {isN8n && (
                            <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-1 overflow-hidden shadow-2xl animate-fade-in">
                                <div className="p-4 border-b border-white/5 bg-slate-900/30 flex justify-between items-center flex-wrap gap-2">
                                    <h3 className="font-bold text-slate-300 flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-yellow-500" />
                                        Live Workflow & Deployment
                                    </h3>
                                    <div className="flex gap-2">
                                        <span className="text-xs text-slate-500 font-mono bg-slate-950 px-2 py-1 rounded">n8n-workflow.json</span>
                                        <span className="text-xs text-slate-500 font-mono bg-slate-950 px-2 py-1 rounded">docker-compose.yml</span>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-1 bg-slate-950/50">
                                    <div className="relative group border-b md:border-b-0 md:border-r border-white/5 cursor-pointer" onClick={() => setSelectedImage('/n8n/n8n-workflow.png')}>
                                        <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors z-10 flex items-center justify-center">
                                            <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                                        </div>
                                        <img src="/n8n/n8n-workflow.png" alt="Workflow" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-slate-950/90 to-transparent"><p className="text-xs text-slate-300 font-medium text-center">ETL Automation Flow</p></div>
                                    </div>
                                    <div className="relative group cursor-pointer" onClick={() => setSelectedImage('/n8n/n8n-deployment.png')}>
                                        <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors z-10 flex items-center justify-center">
                                            <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                                        </div>
                                        <img src="/n8n/n8n-deployment.png" alt="Docker" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-slate-950/90 to-transparent"><p className="text-xs text-slate-300 font-medium text-center">Docker Desktop (Auto-Restart Policy)</p></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* CASE 2: OPTIMA BACKUP VISUALIZATION */}
                        {isBackup && (
                            <div className="space-y-8 animate-fade-in">
                                {/* Code Snippet */}
                                <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 flex flex-col shadow-2xl">
                                    <h3 className="text-sm font-bold text-slate-300 mb-4 flex items-center gap-2 uppercase tracking-wider">
                                        <Terminal className="w-4 h-4 text-green-400" /> Python Automation Script
                                    </h3>
                                    <div className="rounded-lg overflow-hidden border border-slate-700/50 text-sm h-[450px]"> 
                                        <SyntaxHighlighter language="python" style={vscDarkPlus} showLineNumbers customStyle={{background: '#0f172a', margin: 0, height: '100%'}}>
                                            {backupCode}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>

                                {/* Telegram Result */}
                                <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 shadow-xl">
                                    <h3 className="text-sm font-bold text-slate-300 mb-6 uppercase tracking-wider text-center flex items-center justify-center gap-2">
                                        <Send className="w-4 h-4 text-blue-400" /> Real-time Notification
                                    </h3>
                                    <div className="flex justify-center group relative cursor-pointer" onClick={() => setSelectedImage('/code_samples/sucess.png')}>
                                        <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors z-10 flex items-center justify-center rounded-xl">
                                             <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <img 
                                            src="/code_samples/sucess.png" 
                                            alt="Telegram Notification Success" 
                                            className="rounded-xl border border-emerald-500/30 shadow-emerald-500/10 max-w-full sm:max-w-md hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Description Details (Consistent for both) */}
                    <div className="space-y-12">
                        {/* Summary */}
                        <div className="bg-indigo-500/5 border border-indigo-500/20 p-8 rounded-2xl">
                             <h3 className="text-sm font-bold text-indigo-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                                <FileText className="w-4 h-4" /> Executive Summary
                            </h3>
                            <p className="text-lg text-slate-200 leading-relaxed font-medium">
                                {currentData.summary}
                            </p>
                        </div>

                         {/* Challenge & Impact Grid */}
                         <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                                    <div className="p-2 bg-red-500/10 rounded-lg text-red-500"><AlertTriangle className="w-5 h-5" /></div>
                                    {currentData.challenge.title}
                                </h3>
                                <ul className="space-y-4">
                                    {currentData.challenge.points.map((point, idx) => (
                                        <li key={idx} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                                    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500"><Rocket className="w-5 h-5" /></div>
                                    {currentData.impact.title}
                                </h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {currentData.impact.desc}
                                </p>
                            </div>
                        </div>

                        {/* Solution Map */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500"><Lightbulb className="w-6 h-6" /></div>
                                {currentData.solution.title}
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {currentData.solution.steps.map((step, idx) => (
                                    <div key={idx} className="bg-slate-900/50 border border-white/5 p-5 rounded-xl hover:border-indigo-500/30 transition-all group">
                                        <div className="mb-4 text-slate-500 group-hover:text-indigo-400 transition-colors">
                                            <Zap className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-bold text-white mb-2 text-sm">{step.title}</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 text-center pb-12">
                    <div className="flex justify-center gap-4">
                        <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
                            <ExternalLink className="w-5 h-5" />
                            {lang === 'id' ? 'Hubungi Saya' : 'Contact Me'}
                        </Link>
                    </div>
                </div>
            </main>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <button 
                            className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img 
                            src={selectedImage} 
                            alt="Full Preview" 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetail;
