import { AnimatePresence, motion } from 'framer-motion';
import {
    Award,
    Box,
    Briefcase,
    Calendar,
    Code2,
    ExternalLink,
    FileDown,
    FolderCode,
    FolderGit2,
    Github,
    GraduationCap,
    Linkedin,
    Menu,
    Send,
    Wrench,
    X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data.jsx';


const labels = {
    en: {
        nav: ['Home', 'About', 'Skills', 'Projects', 'Experience'],
        cta: "Let's Talk",
        viewPortfolio: "View Portfolio",
        contactMe: "Contact Me",
        techStack: "Tech Stack",
        techStackDesc: "Tools I use to build robust applications",
        featuredProjects: "Featured Projects",
        projectsDesc: "Internal tools and dashboards built to streamline audit processes.",
        workExperience: "Work Experience",
        education: "Education",
        status: "Status",
        activeStudent: "Active Student",
        graduate: "Graduate",
        semester: "Semester",
        certifications: "Certifications",
        letsConnect: "Let's Connect",
        connectDesc: "Interested in discussing audit automation, web development, or data analytics? I'm always open to new ideas and opportunities.",
        sayHello: "Say Hello",
        footer: "Made with React & Tailwind.",
        filters: { all: 'all', web: 'web', data: 'Data & Backup', automation: 'automation' }
    },
    id: {
        nav: ['Beranda', 'Tentang', 'Keahlian', 'Proyek', 'Pengalaman'],
        cta: "Yuk Ngobrol",
        viewPortfolio: "Lihat Portofolio",
        contactMe: "Hubungi Saya",
        techStack: "Teknologi",
        techStackDesc: "Alat yang saya gunakan untuk membangun aplikasi handal",
        featuredProjects: "Proyek Unggulan",
        projectsDesc: "Fitur internal dan dashboard yang dibuat untuk memperlancar proses audit.",
        workExperience: "Pengalaman Kerja",
        education: "Pendidikan",
        status: "Status",
        activeStudent: "Mahasiswa Aktif",
        graduate: "Lulus",
        semester: "Semester",
        certifications: "Sertifikasi",
        letsConnect: "Yuk Connect!",
        connectDesc: "Tertarik berdiskusi tentang otomasi audit, pengembangan web, atau analisis data? Saya selalu terbuka untuk ide dan peluang baru.",
        sayHello: "Ngobrol Sini",
        footer: "Dibuat dengan React & Tailwind.",
        filters: { all: 'Semua', web: 'Web', data: 'Data & Backup', automation: 'Otomasi' }
    }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = labels[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav[0], href: '#home' },
    { name: t.nav[1], href: '#about' },
    { name: t.nav[2], href: '#skills' },
    { name: t.nav[3], href: '#projects' },
    { name: t.nav[4], href: '#experience' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight">
          <span className="text-white">DYN</span><span className="text-indigo-500">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
              {link.name}
            </a>
          ))}
          
           {/* Language Switcher Desktop */}
           <div className="flex bg-slate-900 rounded-full p-1 border border-slate-800">
                <button onClick={() => setLanguage('id')} className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${language === 'id' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}>ID</button>
                <button onClick={() => setLanguage('en')} className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${language === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}>EN</button>
           </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-sm font-semibold py-2.5 px-6 rounded-full shadow-lg shadow-indigo-500/20 hover:scale-105 transition-all">
            {t.cta}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-slate-300 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween' }}
            className="fixed inset-0 bg-slate-950 z-50 flex flex-col items-center justify-center gap-8"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white">
              <X className="w-8 h-8" />
            </button>
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-slate-300 hover:text-white">
                {link.name}
              </a>
            ))}
             {/* Language Switcher Mobile */}
             <div className="flex bg-slate-900 rounded-full p-1 border border-slate-800 mt-4">
                <button onClick={() => setLanguage('id')} className={`px-6 py-2 text-sm rounded-full font-bold transition-all ${language === 'id' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>ID</button>
                <button onClick={() => setLanguage('en')} className={`px-6 py-2 text-sm rounded-full font-bold transition-all ${language === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>EN</button>
           </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
    const [text, setText] = useState('');
    const [roleIdx, setRoleIdx] = useState(0);
    const roles = portfolioData.roles;
    const { language } = useLanguage();
    const t = labels[language];

    useEffect(() => {
        let timeout;
        let charIdx = 0;
        let isDeleting = false;
        
        const type = () => {
            const current = roles[roleIdx];
            if (isDeleting) {
                setText(current.substring(0, charIdx - 1));
                charIdx--;
            } else {
                setText(current.substring(0, charIdx + 1));
                charIdx++;
            }

            let speed = isDeleting ? 50 : 100;

            if (!isDeleting && charIdx === current.length) {
                speed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                setRoleIdx((prev) => (prev + 1) % roles.length);
                speed = 500;
            }
            timeout = setTimeout(type, speed);
        };

        type();
        return () => clearTimeout(timeout);
    }, [roleIdx]);

    const techIcons = [
        { icon: <SiPython />, color: "text-yellow-400" },
        { icon: <SiTypescript />, color: "text-blue-500" },
        { icon: <SiJavascript />, color: "text-yellow-300" },
        { icon: <SiReact />, color: "text-cyan-400" },
        { icon: <SiNextdotjs />, color: "text-white" },
        { icon: <SiTailwindcss />, color: "text-cyan-400" },
        { icon: <SiNodedotjs />, color: "text-green-500" },
        { icon: <SiSupabase />, color: "text-emerald-400" },
        { icon: <SiDocker />, color: "text-blue-500" },
        { icon: <SiN8N />, color: "text-red-500" },
        { icon: <DiMsqlServer />, color: "text-red-600" },
        { icon: <SiGit />, color: "text-orange-600" },
        { icon: <SiHtml5 />, color: "text-orange-500" },
        { icon: <SiCss3 />, color: "text-blue-500" },
        { icon: <SiPostgresql />, color: "text-blue-400" },
        { icon: <SiExpress />, color: "text-white" },
    ];

    return (
        <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative px-6">
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                        Open to Work
                    </motion.div>
                    
                    <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
                        {/* Dynamic Intro */}
                        {portfolioData.personal.introduction[language]} <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Dede Yudha</span>
                    </h1>
                    
                    <div className="text-xl sm:text-2xl text-slate-400 mb-8 h-8 font-medium">
                        {text}<span className="animate-pulse">|</span>
                    </div>
                    
                    <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
                        {portfolioData.personal.bio[language]}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a href="#projects" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 font-semibold text-white transition-all hover:bg-indigo-700 hover:scale-105 shadow-lg shadow-indigo-500/25">
                            <FolderCode className="w-5 h-5" />
                            {t.viewPortfolio}
                        </a>
                        <a 
                            href={portfolioData.personal.cv[language]} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-700 bg-transparent px-8 font-semibold text-white transition-all hover:bg-slate-800 hover:border-slate-600"
                        >
                            <FileDown className="w-5 h-5" />
                            {language === 'id' ? 'Unduh CV' : 'Download CV'}
                        </a>
                    </div>
                </div>
                
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="grid grid-cols-4 gap-4 sm:gap-6 p-4 perspective-1000">
                         {techIcons.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1,
                                    y: [0, -10, 0] 
                                }}
                                transition={{ 
                                    duration: 2 + (idx % 3), // Varied duration (2s, 3s, 4s)
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                    delay: idx * 0.1,
                                }}
                                className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 text-3xl sm:text-4xl ${item.color} bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-indigo-500/50 hover:bg-slate-800 transition-all shadow-lg shadow-black/50`}
                            >
                                {item.icon}
                            </motion.div>
                       ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Icons Import ---
import { BsDatabase } from 'react-icons/bs';
import { DiMsqlServer } from "react-icons/di";
import {
    SiCss3,
    SiDocker,
    SiExpress,
    SiGit,
    SiHtml5,
    SiJavascript,

    SiN8N,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiTypescript
} from 'react-icons/si';

const Skills = () => {
    const { language } = useLanguage();
    const t = labels[language];

    // Mapping Skill Name -> Icon Component
    const iconMap = {
        "Python": <SiPython className="text-yellow-400" />,
        "TypeScript": <SiTypescript className="text-blue-500" />,
        "SQL": <BsDatabase className="text-slate-400" />,
        "JavaScript": <SiJavascript className="text-yellow-300" />,
        "HTML/CSS": <div className="flex gap-1"><SiHtml5 className="text-orange-500" /><SiCss3 className="text-blue-500" /></div>,
        "React": <SiReact className="text-cyan-400" />,
        "Next.js": <SiNextdotjs className="text-white" />,
        "Tailwind": <SiTailwindcss className="text-cyan-400" />,
        "Node.js": <SiNodedotjs className="text-green-500" />,
        "Express.js": <SiExpress className="text-white" />,
        "React Native": <SiReact className="text-cyan-400" />,
        "Supabase": <SiSupabase className="text-emerald-400" />,
        "Docker": <SiDocker className="text-blue-500" />,
        "n8n": <SiN8N className="text-red-500" />,
        "PostgreSQL": <SiPostgresql className="text-blue-400" />,
        "MSSQL": <DiMsqlServer className="text-red-600 text-2xl" />,
        "Git": <SiGit className="text-orange-600" />
    };

    return (
        <section id="skills" className="py-24 bg-slate-900/30 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">{t.techStack}</h2>
                    <p className="text-slate-400">{t.techStackDesc}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(portfolioData.skills).map(([category, items]) => (
                        <div key={category} className="bg-slate-900/50 border border-white/5 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors">
                            <h3 className="text-xl font-bold mb-6 capitalize flex items-center gap-3">
                                {category === 'languages' && <Code2 className="text-blue-400" />}
                                {category === 'frameworks' && <Box className="text-indigo-400" />}
                                {category === 'tools' && <Wrench className="text-emerald-400" />}
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill, idx) => (
                                    <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-slate-950 rounded-lg border border-slate-800 text-slate-300 text-sm font-medium hover:text-white hover:border-indigo-500/50 transition-colors cursor-default group">
                                        <span className="text-lg group-hover:scale-110 transition-transform">
                                            {iconMap[skill.name] || <Code2 />} {/* Fallback Icon */}
                                        </span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const { language } = useLanguage();
    const t = labels[language];
    
    const filteredProjects = filter === 'all' 
        ? portfolioData.projects 
        : portfolioData.projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">{t.featuredProjects}</h2>
                        <p className="text-slate-400 max-w-xl">{t.projectsDesc}</p>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        {['all', 'web', 'data', 'automation'].map(cat => (
                            <button 
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${filter === cat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
                            >
                                {t.filters[cat] || cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <AnimatePresence mode='wait'>
                        {filteredProjects.map((project, idx) => (
                            <motion.div 
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="group relative bg-slate-900/50 border border-white/5 rounded-2xl p-8 hover:bg-slate-800/50 hover:border-indigo-500/30 transition-all"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <FolderGit2 className="w-6 h-6" />
                                    </div>
                                    {project.link.startsWith('/') ? (
                                        <Link to={project.link} className="text-slate-500 hover:text-white transition-colors">
                                           <ExternalLink className="w-5 h-5" />
                                        </Link>
                                    ) : (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 pl-4 border-l-2 border-slate-700/50">
                                    {project.description[language]}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const Experience = () => {
    // Semester Calculation Logic
    const startYear = portfolioData.education.startYear;
    const now = new Date();
    const yearDiff = now.getFullYear() - startYear;
    const currentMonth = now.getMonth();
    let semester = (yearDiff * 2) + (currentMonth >= 6 ? 2 : 1);
    if (semester < 1) semester = 1;
    
    const { language } = useLanguage();
    const t = labels[language];

    const semesterText = semester > 8 ? t.graduate : `${t.semester} ${semester}`;

    return (
        <section id="experience" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Work Experience */}
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                            <Briefcase className="text-indigo-400" /> {t.workExperience}
                        </h2>
                        
                        {portfolioData.experience.map((exp, idx) => (
                            <div key={idx}>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                        {exp.company.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                                        <p className="text-slate-400 text-sm">{exp.industry[language]}</p>
                                    </div>
                                </div>

                                <div className="ml-6 border-l-2 border-slate-800 space-y-12">
                                    {exp.roles.map((role, rIdx) => (
                                        <div key={rIdx} className="relative pl-8 sm:pl-12">
                                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900"></div>
                                            <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6 hover:bg-slate-800/50 transition-colors">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                                    <h4 className="text-lg font-bold text-indigo-300">{role.title[language]}</h4>
                                                    <span className="text-xs font-semibold text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800 w-fit">
                                                        {role.period[language]}
                                                    </span>
                                                </div>
                                                <ul className="space-y-2">
                                                    {role.description[language].map((desc, dIdx) => (
                                                        <li key={dIdx} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0"></span>
                                                            <span>{desc}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Education & Certs */}
                    <div className="lg:col-span-5 space-y-12">
                        {/* Education */}
                        <div>
                            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                                <GraduationCap className="text-sky-400" /> {t.education}
                            </h2>
                            <div className="bg-slate-900/50 border border-white/5 p-8 rounded-2xl relative overflow-hidden border-l-4 border-l-indigo-500">
                                <GraduationCap className="absolute top-0 right-0 w-32 h-32 text-white/5" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-1">{portfolioData.education.university}</h3>
                                    <p className="text-indigo-400 font-medium mb-6">{portfolioData.education.degree[language]}</p>
                                    
                                    <div className="flex items-center gap-4">
                                        <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg shadow-indigo-500/25">
                                            {semesterText}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{t.status}</span>
                                            <span className="text-sm text-slate-300">{t.activeStudent}</span>
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm text-slate-500 mt-6 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {/* Dynamic Graduation */}
                                        {portfolioData.education.graduation[language]}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Award className="text-emerald-400" /> {t.certifications}
                            </h2>
                            <div className="grid gap-4">
                                {portfolioData.certifications.map((cert, idx) => (
                                    <div key={idx} className="bg-slate-900/50 border border-white/5 p-5 rounded-xl flex items-start justify-between hover:bg-slate-800/50 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 mt-1">
                                                <Award className="w-5 h-5" />
                                            </div>
                                            <div>
                                                {/* Dynamic Cert Name: check if bilingual object or string */}
                                                <h4 className="font-bold text-slate-200 text-sm sm:text-base">
                                                    {typeof cert.name === 'object' ? cert.name[language] : cert.name}
                                                </h4>
                                                {/* Dynamic Cert Provider: check if bilingual object or string */}
                                                <p className="text-xs text-slate-500 mt-1">
                                                    {typeof cert.provider === 'object' ? cert.provider[language] : cert.provider}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-xs font-medium text-slate-400 bg-slate-950 px-2 py-1 rounded border border-slate-800 whitespace-nowrap">
                                            {cert.year}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    const { language } = useLanguage();
    const t = labels[language];

    return (
        <section id="contact" className="py-24">
             <div className="max-w-3xl mx-auto px-6 text-center">
                <div className="inline-flex p-4 rounded-full bg-indigo-500/10 text-indigo-400 mb-8">
                   <Send className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold mb-6">{t.letsConnect}</h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                   {t.connectDesc}
                </p>
                
                <div className="flex justify-center mb-16">
                   <a href={`mailto:${portfolioData.personal.email}`} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 text-lg rounded-full shadow-xl shadow-indigo-600/20 transition-all hover:scale-105">
                      {t.sayHello}
                   </a>
                </div>
    
                <div className="pt-8 border-t border-white/5 flex justify-center gap-8">
                   <a href={portfolioData.personal.linkedin} className="text-slate-500 hover:text-white transition-colors flex items-center gap-2">
                       <Linkedin className="w-5 h-5" /> LinkedIn
                   </a>
                   <a href={portfolioData.personal.github} className="text-slate-500 hover:text-white transition-colors flex items-center gap-2">
                       <Github className="w-5 h-5" /> GitHub
                   </a>
                </div>
             </div>
        </section>
    );
}

const Footer = () => {
    const { language } = useLanguage();
    const t = labels[language];
    return (
        <footer className="py-10 bg-slate-950 text-center text-slate-600 text-sm border-t border-white/5">
            <p>&copy; {new Date().getFullYear()} Dede Yudha Nersanto. {t.footer}</p>
        </footer>
    );
};

const Home = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[100px]"></div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
