
export const portfolioData = {
  personal: {
    name: "Dede Yudha",
    role: "Full Stack Developer",
    introduction: { 
        en: "I'm",
        id: "Saya"
    },
    bio: {
        en: "Merging audit expertise with full-stack development to build secure, data-driven, and automated solutions.",
        id: "Menggabungkan keahlian audit dengan pengembangan full-stack untuk membangun solusi yang aman, berbasis data, dan otomatis."
    },
    location: "Bogor, 16840",
    email: "naeyanika@gmail.com",
    phone: "+62 812-8817-2775",
    linkedin: "https://linkedin.com/in/naeyanika",
    github: "https://github.com/naeyanika",
    cv: {
        en: "https://drive.google.com/uc?export=download&id=1gjGw9NgbPjtXWac58SDpE08XW2h_E4O-",
        id: "https://drive.google.com/uc?export=download&id=1GDgJcKJZVdO4Sd5sU0P-Lo97ClxRDcV1"
    }
  },

  roles: ["IT Auditor", "Full Stack Developer", "Data Analyst", "Automation Engineer"],

  skills: {
    languages: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "SQL" },
      { name: "JavaScript" },
      { name: "HTML/CSS" }
    ],
    frameworks: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "React Native" }
    ],
    tools: [
      { name: "Supabase" },
      { name: "Docker" },
      { name: "n8n" },
      { name: "PostgreSQL" },
      { name: "MSSQL" },
      { name: "Git" }
    ]
  },

  projects: [
    {
      title: "OPTIMA Dashboard",
      description: {
          en: "Full stack internal audit management dashboard tracking audit schedules, fraud cases, and branch activities. Features automated PDF/DOCX generation reducing manual work by 80%, role-based access, and geolocation mapping.",
          id: "Dashboard manajemen audit internal full stack untuk melacak jadwal audit, kasus fraud, dan aktivitas cabang. Dilengkapi fitur pembuatan PDF/DOCX otomatis yang mengurangi pekerjaan manual hingga 80%, serta pemetaan geolokasi."
      },
      tags: ["React", "TypeScript", "Supabase", "Recharts", "Vite", "Tailwind"],
      category: "web",
      link: "https://ia-management.netlify.app/"
    },
    {
      title: "ORBIT Dashboard",
      description: {
          en: "Hybrid dashboard connecting Supabase, PostgreSQL, and MSSQL via custom Express.js API. Features secure authentication, real-time sync, and smooth Framer Motion transitions.",
          id: "Dashboard hybrid yang menghubungkan Supabase, PostgreSQL, dan MSSQL melalui custom API Express.js. Memiliki fitur autentikasi aman, sinkronisasi real-time, dan transisi mulus dengan Framer Motion."
      },
      tags: ["React", "MSSQL", "Express.js", "Supabase", "TypeScript"],
      category: "web",
      link: "#"
    },
    {
      title: "n8n Workflow Automation",
      description: {
          en: "Deployed n8n using Docker for automation. Includes persistent volume config, Python-based backup automation for workflows & databases, and Telegram notification integration.",
          id: "Deploy n8n menggunakan Docker untuk otomatisasi. Termasuk konfigurasi persistent volume, otomatisasi backup berbasis Python untuk workflow & database, serta integrasi notifikasi Telegram."
      },
      tags: ["Docker", "n8n", "Python", "Telegram API"],
      category: "automation",
      link: "/project/n8n-automation"
    },
    {
      title: "OPTIMA Backup System",
      description: {
          en: "Automated backup solution utilizing Python & Windows Task Scheduler. Exports 44 Supabase tables to CSV/JSON, uploads to MEGA Cloud with retention policies, and sends Telegram alerts.",
          id: "Solusi backup otomatis menggunakan Python & Windows Task Scheduler. Mengekspor 44 tabel Supabase ke CSV/JSON, mengunggah ke MEGA Cloud dengan kebijakan retensi, dan mengirim notifikasi Telegram."
      },
      tags: ["Python", "Task Scheduler", "Supabase API", "MEGA Cloud"],
      category: "data",
      link: "/project/optima-backup"
    }
  ],

  experience: [
    {
      company: "KSP Mitra Dhuafa KOMIDA",
      industry: {
          en: "Credit Union (Microfinance)",
          id: "Koperasi Simpan Pinjam"
      },
      roles: [
        {
          title: {
              en: "Development and Support Internal Audit",
              id: "Development and Support Internal Audit"
          },
          period: {
              en: "Jan 2023 – Present",
              id: "Jan 2023 – Hingga Saat Ini"
          },
          description: {
              en: [
                "Developed digital audit tools including dashboards, anomaly detection systems, and backup utilities.",
                "Supported auditors through data extraction, cleaning, validation, and reconciliation.",
                "Designed Python and SQL based analytics to improve risk assessment and fraud detection.",
                "Enhanced OPTIMA modules (QA workflows, report tools) and document generation.",
                "Coordinated with auditors and managers to align system requirements."
              ],
              id: [
                "Mengembangkan alat audit digital termasuk dashboard, sistem deteksi anomali, dan utilitas backup.",
                "Mendukung auditor melalui ekstraksi data, pembersihan, validasi, dan rekonsiliasi.",
                "Merancang analitik berbasis Python dan SQL untuk meningkatkan penilaian risiko dan deteksi fraud.",
                "Meningkatkan modul OPTIMA (workflow QA, alat pelaporan) dan pembuatan dokumen otomatis.",
                "Berkoordinasi dengan auditor dan manajer untuk menyelaraskan kebutuhan sistem."
              ]
          }
        },
        {
          title: {
              en: "Internal Auditor",
              id: "Internal Auditor"
          },
          period: {
            en: "Oct 2022 – Present",
            id: "Okt 2022 – Hingga Saat Ini"
          },
          description: {
              en: [
                "Executed audit procedures covering operational testing and internal control evaluation.",
                "Identified data irregularities using SQL, Excel, and analytical review techniques.",
                "Documented findings, collaborated with Stakeholder, and supported follow-up processes.",
                "Contributed to risk-based audit planning through data-driven insights."
              ],
              id: [
                "Melaksanakan prosedur audit mencakup pengujian operasional dan evaluasi pengendalian internal.",
                "Mengidentifikasi ketidakberesan data menggunakan SQL, Excel, dan teknik tinjauan analitis.",
                "Mendokumentasikan temuan, berkolaborasi dengan pihak terkait, dan mendukung proses tindak lanjut.",
                "Berkontribusi pada perencanaan audit berbasis risiko melalui wawasan berbasis data."
              ]
          }
        },
        {
          title: {
              en: "Finance Accountant",
              id: "Finance Accountant"
          },
          period: {
            en: "Feb 2018 – Oct 2022",
            id: "Feb 2018 – Okt 2022"
          },
          description: {
               en: [
                "Managed end-to-end branch financial operations, including daily cashiering (cash-in/cash-out) and bank transaction processing for the Credit Union branch.",
                "Prepared and analyzed the annual branch cash flow statement to ensure liquidity and support local operational planning.",
                "Executed full cycle accounting (reporting and reconciliation) and utilized Microsoft Excel extensively for financial analysis, formulas, and pivot tables.",
                "Supported external audit readiness by organizing and preparing comprehensive financial documentation."
              ],
              id: [
                "Mengelola operasional keuangan cabang secara end-to-end, termasuk fungsi kasir harian (penerimaan dan pengeluaran kas) dan pemrosesan transaksi bank untuk Credit Union (Koperasi Simpan Pinjam).",
                "Menyusun dan menganalisis laporan arus kas (cash flow) tahunan cabang untuk memastikan likuiditas dan mendukung perencanaan operasional.",
                "Melaksanakan siklus akuntansi penuh (pelaporan dan rekonsiliasi) serta memanfaatkan Microsoft Excel secara ekstensif untuk analisis keuangan, rumus, dan tabel pivot.",
                "Mendukung kesiapan audit eksternal melalui penyusunan dan pengarsipan dokumentasi keuangan yang komprehensif."
              ]
          }
        }
      ]
    }
  ],

  certifications: [
    { name: "Microsoft SQL Server", provider: "NF Academy", year: "2024" },
    { name: "Data Analyst with SQL and Python", provider: "DQLab", year: "2023" },
    { name: "Microsoft Excel", provider: "MySkill", year: "2023" },
    { name: { en: "Purwadhika Data Science Program", id: "Program Data Science Purwadhika" }, provider: { en: "In Progress", id: "Sedang Berjalan" }, year: "2025" }
  ],

  education: {
    university: "Universitas Terbuka",
    degree: {
        en: "Bachelor of Information Systems",
        id: "Sarjana Sistem Informasi"
    },
    graduation: {
        en: "Expected Graduation 2027",
        id: "Ekspektasi Kelulusan 2027"
    },
    startYear: 2024
  }
};
