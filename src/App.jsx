import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Mail, ExternalLink, Code2, 
  Smartphone, Globe2, ChevronDown, Award, 
  Cpu, Layout, Database, PlayCircle, Server 
} from 'lucide-react';

// === ВАЖНЫЕ ИМПОРТЫ КАРТИНОК И ВИДЕО ===
// Убедись, что эти файлы реально лежат в папке src/assets/ и src/assets/img/
import profileImg from './assets/profile.jpg';
import mobileAppImg from './assets/mobile-app.png';
import passportVideo from './assets/img/passport-demo.mp4';
import voiceAppImg from './assets/voice-app.png';
import bookingVideo from './assets/img/booking.mp4';

// --- ДАННЫЕ ПРОЕКТОВ ---
const projects = [
  {
    id: 1,
    title: "Positive Audio Affirmations",
    category: "Mobile App (React Native)",
    badge: "10k+ Downloads",
    description: "A self-hypnosis app aiding 10,000+ users. Features offline-first architecture, AI voice synthesis via ElevenLabs, and monetized via RevenueCat.",
    tech: ["React Native", "Redux Persist", "Firebase", "RevenueCat", "ElevenLabs API"],
    image: mobileAppImg, // ИСПОЛЬЗУЕМ ПЕРЕМЕННУЮ
    link: "https://play.google.com/store/apps/details?id=com.voiceapp.voice", 
    github: null 
  },
  {
    id: 2,
    title: "The Spanish LXP: Immersion Quest",
    category: "Gamified Learning Experience Platform (LXP)",
    badge: "AI Powered Tutor",
    description: "An immersive LXP replacing boring lists with a 'Travel Metaphor'. Students earn 'Visas' instead of grades, unlocking a 'Boarding Pass' for missions. Features an AI-Tutor that explains mistakes using natural slang, and a 'Consulado' admin panel for real-time monitoring.",
    tech: ["React", "DeepSeek AI", "Tailwind CSS", "Firestore", "Advanced Gamification"],
    image: passportVideo, // ИСПОЛЬЗУЕМ ПЕРЕМЕННУЮ
    link: "https://clases-con-xenia.com/app/",
    github: "https://github.com/xenia19/spanish-lxp-immersion"
  },
  {
    id: 3,
    title: "Voice Journal & Transcriber",
    category: "Full-Stack (RN + Python)",
    badge: "Engineering Demo",
    description: "Voice journaling app with a custom Python backend for speech-to-text. Solved Android 13+ permission issues and implemented reliable file uploads.",
    tech: ["React Native", "Python (Flask)", "Vosk API", "File System", "Render"],
    image: voiceAppImg, // ИСПОЛЬЗУЕМ ПЕРЕМЕННУЮ
    link: null,
    github: "https://github.com/xenia19/voice-journal"
  },
  {
    id: 4,
    title: "Tutor Booking SaaS",
    category: "Full-stack Web App",
    badge: "Live Product",
    description: "Automated scheduling system. Syncs bookings with Google Calendar API and sends automated email reminders via Node.js scripts & Sendinblue.",
    tech: ["React", "Firebase Auth", "Google Calendar API", "Sendinblue API", "GitHub Actions"],
    image: bookingVideo, // ИСПОЛЬЗУЕМ ПЕРЕМЕННУЮ
    link: "https://clases-con-xenia.com/",
    github: null // добавил github: null, чтобы кнопка Code не ломалась, если ссылки нет
  }
];

// --- НАВЫКИ ---
const skills = [
  { 
    icon: <Smartphone size={24} />, 
    title: "Mobile Development", 
    desc: "React Native CLI, Redux + Persist, Offline-first architecture, Android Permissions, In-App Purchases." 
  },
  { 
    icon: <Layout size={24} />, 
    title: "Frontend Core", 
    desc: "React 19, JavaScript (ES6+), Tailwind CSS, Framer Motion, UX/UI Psychology." 
  },
  { 
    icon: <Server size={24} />, 
    title: "Backend & Automation", 
    desc: "Python (Flask), Node.js scripting, GitHub Actions (CI/CD), REST API design, File handling." 
  },
  { 
    icon: <Database size={24} />, 
    title: "Cloud & Services", 
    desc: "Firebase (Auth, Firestore), DeepSeek AI, ElevenLabs, Google Calendar API, RevenueCat, Render." 
  },
];

const certificates = [
  { 
    name: "IBM Full Stack Software Developer", 
    issuer: "Coursera / IBM", 
    link: "https://www.coursera.org/account/accomplishments/professional-cert/YQ4OOH6U3R3A", 
  },
  { 
    name: "Bachelor in Psychology", 
    issuer: "University Degree", 
  }
];

const App = () => {
  // Функция для проверки, видео это или картинка
  const isVideo = (fileData) => {
    // Поскольку после импорта Vite это уже не строка с .mp4, а специальный объект/строка с хешем,
    // надежнее всего проверять, содержит ли URL ".mp4" или ".webm"
    if (typeof fileData === 'string') {
        return fileData.includes('.mp4') || fileData.includes('.webm');
    }
    return false;
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- HERO SECTION --- */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-bold tracking-widest text-indigo-700 uppercase bg-indigo-50 border border-indigo-100 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Product-Minded Developer
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1]">
              I build apps that <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">people actually use.</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              Hi, I'm <b>Xenia</b>. A Frontend & Mobile Developer with a background in Psychology. 
              I created a mobile app with <b className="text-slate-900">10k+ downloads</b> and an AI-powered EdTech platform.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 mb-10 border-l-4 border-indigo-500 pl-6">
              <div>
                <p className="text-3xl font-bold text-slate-900">10k+</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Downloads</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">4.0</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Play Store Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">99%</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Crash-Free Users</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition shadow-xl shadow-slate-300 transform hover:-translate-y-1 text-center">
                View Projects
              </a>
              <a href="https://github.com/xenia19" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition flex items-center justify-center gap-2">
                <Github size={20}/> GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* Right: Profile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <img 
                src={profileImg} // ИСПОЛЬЗУЕМ ПЕРЕМЕННУЮ
                alt="Xenia" 
                className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl z-10 rotate-3 hover:rotate-0 transition duration-500"
              />
              <div className="absolute inset-0 bg-indigo-600 rounded-[2rem] transform -rotate-6 opacity-20 scale-105 z-0"></div>

              {/* Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <Smartphone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Mobile</p>
                  <p className="text-sm font-bold text-slate-900">React Native</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.a 
            href="#projects" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-indigo-600 transition cursor-pointer"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </motion.a>
      </header>

      {/* --- SKILLS GRID --- */}
      <section className="py-20 bg-white border-y border-slate-100">
         <div className="container mx-auto px-6 max-w-6xl">
            <h3 className="text-center text-slate-500 font-bold uppercase tracking-widest mb-12">Tech Stack & Tools</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {skills.map((skill, i) => (
                 <div key={i} className="p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-indigo-100">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-4">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{skill.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{skill.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Selected Work</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Commercial projects and complex platforms built from scratch.
            </p>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                key={project.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
              >
                {/* MEDIA CONTAINER */}
                <a 
                  href={project.link || "#"} 
                  target={project.link ? "_blank" : "_self"} 
                  rel="noreferrer"
                  className={`flex-1 w-full group perspective-1000 block ${!project.link && 'cursor-default'}`}
                >
                  <div className={`relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white bg-slate-100 transform ${project.link && 'group-hover:rotate-1 cursor-pointer'} transition duration-500 ${
                    project.category.includes("Mobile") || project.category.includes("RN") 
                      ? "aspect-[4/3]" 
                      : "aspect-video"
                  }`}>
                    
                    <div className={`absolute inset-0 bg-black/0 ${project.link && 'group-hover:bg-black/5'} transition z-10`}></div>
                    
                    {isVideo(project.image) ? (
                      <video 
                        src={project.image}
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        onError={(e) => {e.target.style.display='none'}}
                        alt={project.title} 
                        className={`w-full h-full ${
                           project.category.includes("Mobile") || project.category.includes("RN") 
                           ? "object-contain p-4 bg-indigo-50" 
                           : "object-cover object-top"
                        }`}
                      />
                    )}
                  </div>
                </a>

                {/* PROJECT INFO */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                     <span className="px-3 py-1 text-xs font-bold text-indigo-600 bg-indigo-50 rounded-full uppercase tracking-wider">
                       {project.category}
                     </span>
                     {project.badge && (
                       <span className="px-3 py-1 text-xs font-bold text-amber-600 bg-amber-50 rounded-full uppercase tracking-wider flex items-center gap-1">
                         {project.badge}
                       </span>
                     )}
                  </div>
                  
                  <h3 className="text-4xl font-bold text-slate-900">{project.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm rounded-md font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-6">
                    {/* КНОПКА LIVE DEMO / GOOGLE PLAY */}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
                        {project.category.includes("Mobile") ? <PlayCircle size={20} /> : <ExternalLink size={20} />} 
                        {project.category.includes("Mobile") ? "Google Play" : "Live Demo"}
                      </a>
                    )}
                    
                    {/* КНОПКА CODE */}
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-bold hover:bg-slate-50 transition">
                        <Github size={20} /> Code
                        </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LANGUAGES & EDUCATION --- */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-16">
                
                {/* Languages */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Globe2 className="text-indigo-600"/> Languages
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {['English', 'Spanish', 'Italian', 'Russian'].map(lang => (
                            <div key={lang} className="flex items-center gap-2 text-slate-700 font-medium p-3 bg-slate-50 rounded-lg">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span> {lang}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certificates */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Award className="text-indigo-600"/> Education
                    </h2>
                    <div className="space-y-4">
                        {certificates.map((cert, i) => (
                            cert.link ? (
                                <a 
                                    href={cert.link}
                                    key={i}
                                    target="_blank" rel="noreferrer"
                                    className="block p-4 border border-slate-100 rounded-xl hover:border-indigo-300 hover:bg-slate-50 transition cursor-pointer"
                                >
                                    <h4 className="font-bold text-slate-900">{cert.name}</h4>
                                    <p className="text-sm text-slate-500 mt-1">{cert.issuer}</p>
                                </a>
                            ) : (
                                <div 
                                    key={i}
                                    className="block p-4 border border-slate-100 rounded-xl bg-white"
                                >
                                    <h4 className="font-bold text-slate-900">{cert.name}</h4>
                                    <p className="text-sm text-slate-500 mt-1">{cert.issuer}</p>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Let's work together.</h2>
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://linkedin.com/in/ksenia-galaktionova-a60b30b0/" className="hover:text-white hover:scale-110 transition"><Linkedin size={28} /></a>
            <a href="https://github.com/xenia19" className="hover:text-white hover:scale-110 transition"><Github size={28} /></a>
            <a href="mailto:xenia13@protonmail.com" className="hover:text-white hover:scale-110 transition"><Mail size={28} /></a>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Xenia Galaktionova</p>
        </div>
      </footer>
    </div>
  );
};

export default App;