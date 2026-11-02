import { motion as Motion, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowUpRight, Cpu, Github, GraduationCap, Layout, Linkedin, Mail, MapPin, Server, ChevronDown } from 'lucide-react';
import profileImg from './assets/profile.jpg';
import mobileAppImg from './assets/mobile-app.jpg';
import voiceAppImg from './assets/voice-app.jpg';
const base = import.meta.env.BASE_URL;
const linkedin = 'https://linkedin.com/in/ksenia-galaktionova-a60b30b0/';
const projects = [{
  id: 'spanish-platform',
  title: 'Spanish Learning Platform',
  subtitle: 'Personalized & interactive learning',
  status: 'Used in my teaching practice',
  description: 'A platform I designed and developed for individual Spanish lessons and independent practice between them. Approximately 20 students have used it over more than one year.',
  contribution: 'I defined the learning requirements, activities, personalized paths, and teacher workflows. Development involved substantial AI-assisted coding.',
  tags: ['Learning paths', 'Teacher authoring', 'Selected AI feedback'],
  video: 'passport-demo.mp4',
  caseStudy: 'spanish-platform.html',
  link: 'https://clases-con-xenia.com/app/',
  linkLabel: 'Visit the platform'
}, {
  id: 'tranquilo',
  title: 'Tranquilo.Quest',
  subtitle: 'Scenario-based Spanish practice',
  status: 'Experimental prototype',
  description: 'A gamified prototype exploring everyday role-play, interactive storytelling, conversational AI, and audio experiences for adult Spanish learners.',
  contribution: 'I designed the pedagogical approach, scenarios, and interactions, and developed the prototype with substantial AI-assisted coding.',
  tags: ['Scenario design', 'Conversational AI', 'Gamification'],
  video: 'Tranquilo.mp4',
  caption: 'A walkthrough of the experimental prototype.',
  caseStudy: 'tranquilo.html',
  link: 'https://tranquilo.quest/',
  linkLabel: 'Explore the prototype'
}];
const capabilities = [{
  icon: GraduationCap,
  title: 'Learning Design & Pedagogy',
  text: 'Adult learning needs, communicative and scenario-based activities, task-supported practice, scaffolding, quizzes, and learning materials.'
}, {
  icon: Layout,
  title: 'Learning Technology',
  text: 'Learner and teacher workflows, personalized content sequences, content authoring, progress review, and practical teaching administration.'
}, {
  icon: Server,
  title: 'AI for Learning',
  text: 'Selected written feedback, dialogue and voice experiments, AI-assisted content creation, structured response checks, and teacher oversight.'
}];
function Project({
  project,
  index
}) {
  return <Motion.article className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`} id={project.id} initial={{
    opacity: 0,
    y: 50
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: "-100px"
  }} transition={{
    duration: 0.6
  }}><figure className="flex-1 w-full group perspective-1000 block">{index === 1 ? <div className="flex justify-center items-center py-8">
        {}
        <div className="relative w-[280px] sm:w-[300px] group">
          {}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-slate-900 rounded-b-2xl z-20" />

          {}
          <div className="relative bg-slate-900 rounded-[2.5rem] p-[10px] shadow-2xl
                          shadow-slate-400/30 ring-1 ring-slate-700/50
                          transform group-hover:scale-[1.02] transition duration-500">

            {}
            <div className="relative overflow-hidden rounded-[2rem] bg-black aspect-[9/19.5]"><video controls playsInline preload={index === 0 ? 'metadata' : 'none'} poster={index === 1 ? `${base}case-studies/screenshots/call0.png` : undefined} aria-label={`${project.title} demonstration`} aria-describedby={project.caption ? `${project.id}-caption` : undefined} autoPlay loop muted className="w-full h-full object-cover">
          <source src={`${base}img/${project.video}`} type="video/mp4" />
          Your browser does not support embedded video. <a href={`${base}img/${project.video}`}>Open the recording</a>.
        </video>


              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-indigo-500/10 blur-2xl rounded-full" />
        </div>
      </div> : <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white bg-slate-100 transform group-hover:rotate-1 cursor-pointer transition duration-500 aspect-video"><div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition z-10 pointer-events-none" /><video controls playsInline preload={index === 0 ? 'metadata' : 'none'} poster={index === 1 ? `${base}case-studies/screenshots/call0.png` : undefined} aria-label={`${project.title} demonstration`} aria-describedby={project.caption ? `${project.id}-caption` : undefined} autoPlay loop muted className="w-full h-full object-cover">
          <source src={`${base}img/${project.video}`} type="video/mp4" />
          Your browser does not support embedded video. <a href={`${base}img/${project.video}`}>Open the recording</a>.
        </video></div>}{project.caption && <figcaption id={`${project.id}-caption`} className="text-sm text-slate-500 mt-1">{project.caption} <a href={`${base}case-studies/${project.caseStudy}#experience`}>Read the experience description</a>.</figcaption>}</figure><div className="flex-1 space-y-6">
        <div className="flex flex-wrap items-center gap-3"><span className="px-3 py-1 text-xs font-bold text-indigo-600 bg-indigo-50 rounded-full uppercase tracking-wider">{index === 0 ? 'Instructional Design & Learning Technology' : 'Scenario-Based Learning Design'}</span><span className="px-3 py-1 text-xs font-bold text-amber-600 bg-amber-50 rounded-full uppercase tracking-wider flex items-center gap-1">{project.status}</span></div>
        <h3 className="text-4xl font-bold text-slate-900">{project.title}</h3><p className="text-lg text-slate-600 leading-relaxed">{project.subtitle}</p>
        <p className="text-lg text-slate-600 leading-relaxed">{project.description}</p><p className="text-lg text-slate-600 leading-relaxed"><strong>My contribution.</strong> {project.contribution}</p>
        <ul className="flex flex-wrap gap-2 pt-2 list-none" aria-label="Project focus">{project.tags.map(tag => <li key={tag} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm rounded-md font-medium">{tag}</li>)}</ul>
        <div className="flex flex-wrap gap-4 pt-6">
          <a className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          <a className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition shadow-lg shadow-amber-200" href={`${base}case-studies/${project.caseStudy}`}>Read case study <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </div></Motion.article>;
}
function App() {
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView({
      behavior: 'instant'
    });
  }, []);
  return <div className="min-h-screen font-sans bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <a className="sr-only focus:not-sr-only" href="#main">Skip to content</a>
      <main id="main" tabIndex="-1">
        <header className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" aria-hidden="true" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" aria-hidden="true" />
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <Motion.div initial={reducedMotion ? false : {
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }}>
            <p className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-bold tracking-widest text-indigo-700 uppercase bg-indigo-50 border border-indigo-100 rounded-full"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>Adult Learning & Digital Learning Design</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1]">Learning experiences<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">grounded in pedagogy.</span></h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">I’m Ksenia Galaktionova. I bring 14+ years in adult language education to the design of interactive digital learning experiences, with AI integrated into selected learning workflows.</p>
            <p className="mb-10 border-l-4 border-indigo-500 pl-6 text-slate-600 leading-relaxed">I designed and developed a Spanish-learning platform used with approximately 20 real students over more than one year.</p>
            <div className="flex flex-col sm:flex-row gap-4"><a href="#projects" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition shadow-xl shadow-slate-300 transform hover:-translate-y-1 text-center">Explore my work </a><a href={linkedin} className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition flex items-center justify-center gap-2">LinkedIn <ArrowUpRight size={18} aria-hidden="true" /></a></div>
            <p className="text-sm text-slate-500 mt-6 flex items-center gap-2"><MapPin size={16} aria-hidden="true" /> Palermo, Italy · Eligible to work in Italy</p>
          </Motion.div>
          <Motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <img src={profileImg} alt="Ksenia Galaktionova" className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl z-10 rotate-3 hover:rotate-0 transition duration-500" />
              <div className="absolute inset-0 bg-indigo-600 rounded-[2rem] transform -rotate-6 opacity-20 scale-105 z-0"></div>

              <Motion.div animate={{
                y: [0, -10, 0]
              }} transition={{
                repeat: Infinity,
                duration: 4
              }} className="absolute -top-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <Cpu size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Pedagogy</p>
                  <p className="text-sm font-bold text-slate-900">+ AI + Code</p>
                </div>
              </Motion.div>
            </div>
          </Motion.div>
          </div>
          <Motion.a href="#projects" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.5,
          duration: 1
        }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-indigo-600 transition cursor-pointer" aria-label="Explore selected work">
          <ChevronDown size={32} className="animate-bounce" />
        </Motion.a>
        </header><section id="skills" className="py-20 bg-white border-y border-slate-100" aria-labelledby="skills-heading"><div className="container mx-auto px-6 max-w-6xl">
          <h2 id="skills-heading" className="text-center text-slate-500 font-bold uppercase tracking-widest mb-12">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{capabilities.map(item => {
              const Icon = item.icon;
              return <article key={item.title} className="p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition duration-300 border border-transparent hover:border-indigo-100"><div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-4"><Icon size={24} aria-hidden="true" /></div><h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3><p className="text-sm text-slate-500 leading-relaxed">{item.text}</p></article>;
            })}</div>
          <div className="p-6 bg-slate-50 rounded-2xl mt-12"><strong>Tools used across my projects</strong><p>React · Firebase Authentication · Firestore · API integrations · Gemini · DeepSeek · ElevenLabs · React Native</p></div>

        </div></section>
        <section className="py-20 bg-white border-y border-slate-100" aria-labelledby="background-heading"><div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-16">
          <div><p className="text-sm font-bold tracking-widest text-indigo-700 uppercase mb-6">Background & approach</p><h2 id="background-heading" className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">From adult learning needs<br />to digital learning experiences.</h2></div>
          <div><p className="text-lg text-slate-600 leading-relaxed mb-6">My work starts with what adults need to do: understand a conversation, respond in a practical situation, and keep practising between lessons. I translate those needs into learning sequences, interactive activities, and feedback.</p><p className="text-lg text-slate-600 leading-relaxed mb-6">A bachelor’s degree in Psychology underpins my interest in how people learn. My experience spans independent language education, educational content creation, and a four-month RPA training role at ElectroNeek.</p></div>
        </div></section>
        <section id="projects" className="py-24 bg-slate-50" aria-labelledby="work-heading"><div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20"><h2 id="work-heading" className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Selected Work</h2><p className="text-slate-500 max-w-2xl mx-auto text-lg">A platform used in teaching practice and an experimental prototype.<br />Learning design, interactive experiences, and selected AI integrations.</p></div>
          <div className="space-y-32">{projects.map((project, index) => <Project key={project.id} project={project} index={index} />)}</div>
        </div></section>
        <section id="experience" className="py-24 bg-white border-t border-slate-200" aria-labelledby="experience-heading"><div className="container mx-auto px-6 max-w-6xl">
          <p className="text-sm font-bold tracking-widest text-indigo-700 uppercase mb-6">Relevant experience</p><h2 id="experience-heading" className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">A foundation in teaching and training.</h2>
          <div className="space-y-16 mt-12">
            <article className="grid md:grid-cols-2 gap-16"><div><p className="text-sm text-slate-500 mt-1">March–June 2020 · Four months</p><h3 className="font-bold text-lg text-slate-900 mb-2">RPA Instructor</h3><p className="text-lg text-slate-600 leading-relaxed">ElectroNeek</p></div><div><p className="text-lg text-slate-600 leading-relaxed mb-6">Created instructional materials, videos, quizzes, and learning resources for RPA software training. Compared online learning platforms, selected a suitable platform, and organized content and assessments.</p><p className="text-lg text-slate-600 leading-relaxed mb-6">Delivered live online training to corporate clients, translating software processes into practical learning resources.</p></div></article>
            <article className="grid md:grid-cols-2 gap-16"><div><p className="text-sm text-slate-500 mt-1">14+ years of experience</p><h3 className="font-bold text-lg text-slate-900 mb-2">Independent language educator</h3><p className="text-lg text-slate-600 leading-relaxed">Adult language education & content</p></div><div><p className="text-lg text-slate-600 leading-relaxed mb-6">Taught adults using communicative, scenario-based, and task-supported approaches. Developed learning materials, educational videos, and online language resources.</p><p className="text-lg text-slate-600 leading-relaxed mb-6">Created Maestra Ksenia, a YouTube channel with 77,000+ subscribers, primarily Spanish-speaking learners studying Russian.</p></div></article>
          </div>
        </div></section>
        <section className="py-24 bg-slate-50" aria-labelledby="other-heading"><div className="container mx-auto px-6 max-w-6xl">
          <p className="text-sm font-bold tracking-widest text-indigo-700 uppercase mb-6">Other independent projects</p><h2 id="other-heading" className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Additional tools and applications.</h2><p className="text-slate-500 max-w-2xl mx-auto text-lg mb-20">Practical experience turning an idea into a usable application or teaching workflow.</p>
          <div className="space-y-32">
            <article className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"><figure className="flex-1 w-full group perspective-1000 block"><div className="flex justify-center items-center py-8">
        {}
        <div className="relative w-[280px] sm:w-[300px] group">
          {}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-slate-900 rounded-b-2xl z-20" />

          {}
          <div className="relative bg-slate-900 rounded-[2.5rem] p-[10px] shadow-2xl
                          shadow-slate-400/30 ring-1 ring-slate-700/50
                          transform group-hover:scale-[1.02] transition duration-500">

            {}
            <div className="relative overflow-hidden rounded-[2rem] bg-black aspect-[9/19.5]"><img src={mobileAppImg} alt="Positive Audio Affirmations Android application interface" width="300" height="400" loading="lazy" decoding="async" className="w-full h-full object-cover" />


              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-indigo-500/10 blur-2xl rounded-full" />
        </div>
      </div></figure><div className="flex-1 space-y-6"><p className="text-sm font-bold tracking-widest text-indigo-700 uppercase mb-6">Published Android app</p><h3 className="text-4xl font-bold text-slate-900">Positive Audio Affirmations</h3><p className="text-lg text-slate-600 leading-relaxed">Independently written without AI-assisted coding, reflecting my interest in behavioral design.</p><p className="text-sm text-slate-500 leading-relaxed">10,000+ total Google Play installs, with a substantial portion from paid advertising.</p><a className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200" href="https://play.google.com/store/apps/details?id=com.voiceapp.voice">View on Google Play <ArrowUpRight size={16} aria-hidden="true" /></a></div></article>
            <article className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center"><figure className="flex-1 w-full group perspective-1000 block"><div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white bg-slate-100 transform group-hover:rotate-1 cursor-pointer transition duration-500 aspect-video"><div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition z-10 pointer-events-none" /><video controls playsInline preload="metadata" aria-label="Clases con Xenia booking workflow demonstration" aria-describedby="booking-caption" autoPlay loop muted className="w-full h-full object-cover"><source src={`${base}img/booking.mp4`} type="video/mp4" /><a href={`${base}img/booking.mp4`}>Open the booking recording</a></video></div><figcaption id="booking-caption" className="text-sm text-slate-500 mt-1">The lesson-scheduling workflow. <a href="https://clases-con-xenia.com/">Visit the teaching website</a>.</figcaption></figure><div className="flex-1 space-y-6"><p className="text-sm font-bold tracking-widest text-indigo-700 uppercase mb-6">Personal teaching workflow</p><h3 className="text-4xl font-bold text-slate-900">Clases con Xenia · Booking</h3><p className="text-lg text-slate-600 leading-relaxed">A tool for lesson scheduling, Google Calendar integration, automated reminders, and teaching administration.</p><p className="text-sm text-slate-500 leading-relaxed">Supports the scheduling and administration of my individual lessons.</p><a className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200" href="https://clases-con-xenia.com/">Visit the teaching website <ArrowUpRight size={16} aria-hidden="true" /></a></div></article>
            <article className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"><figure className="flex-1 w-full group perspective-1000 block"><div className="flex justify-center items-center py-8">
        {}
        <div className="relative w-[280px] sm:w-[300px] group">
          {}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-slate-900 rounded-b-2xl z-20" />

          {}
          <div className="relative bg-slate-900 rounded-[2.5rem] p-[10px] shadow-2xl
                          shadow-slate-400/30 ring-1 ring-slate-700/50
                          transform group-hover:scale-[1.02] transition duration-500">

            {}
            <div className="relative overflow-hidden rounded-[2rem] bg-black aspect-[9/19.5]"><img src={voiceAppImg} alt="Voice Journal speech-to-text journaling application interface" width="300" height="400" loading="lazy" decoding="async" className="w-full h-full object-cover" />


              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-indigo-500/10 blur-2xl rounded-full" />
        </div>
      </div></figure><div className="flex-1 space-y-6"><p className="text-sm font-bold tracking-widest text-indigo-700 uppercase mb-6">Published speech-to-text app</p><h3 className="text-4xl font-bold text-slate-900">Voice Journal & Transcriber</h3><p className="text-lg text-slate-600 leading-relaxed">A journaling application that converts speech into text. Approximately 1,000+ downloads reported.</p><div className="flex flex-wrap gap-4 pt-6"><a className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200" href="https://play.google.com/store/apps/details?id=com.voicejournal">Google Play <ArrowUpRight size={16} aria-hidden="true" /></a><a className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200" href="https://github.com/xenia19/voice-journal">Source code <Github size={16} aria-hidden="true" /></a></div></div></article>
          </div>
        </div></section>

      <section className="py-24 bg-white border-t border-slate-200"><div className="container mx-auto px-6 max-w-4xl"><div className="grid md:grid-cols-2 gap-16"><div><h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">Languages</h3><ul className="grid grid-cols-2 gap-4 list-none"><li className="flex items-center gap-2 text-slate-700 font-medium p-3 bg-slate-50 rounded-lg">Russian <span>Native</span></li><li className="flex items-center gap-2 text-slate-700 font-medium p-3 bg-slate-50 rounded-lg">English <span>C1</span></li><li className="flex items-center gap-2 text-slate-700 font-medium p-3 bg-slate-50 rounded-lg">Spanish <span>C1</span></li><li className="flex items-center gap-2 text-slate-700 font-medium p-3 bg-slate-50 rounded-lg">Italian <span>B2</span></li></ul></div><div><h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"><GraduationCap size={21} aria-hidden="true" /> Education & professional development</h3><p className="block p-4 border border-slate-100 rounded-xl bg-white mb-4"><strong>Bachelor’s degree in Psychology</strong><br />Tyumen State University</p><p className="block p-4 border border-slate-100 rounded-xl bg-white mb-4"><a href="https://www.coursera.org/account/accomplishments/professional-cert/YQ4OOH6U3R3A">IBM Full Stack Software Developer certificate</a><br />Coursera / IBM · 2024</p></div></div></div></section></main>
      <footer id="contact" className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800"><div className="container mx-auto px-6 text-center"><h2 className="text-2xl font-bold text-white mb-4">Let’s work together.</h2><p className="text-slate-400 mb-8 max-w-xl mx-auto">I’m interested in Learning Experience Design, Instructional Design, Learning Technology, and Customer Education roles, including remote opportunities with employers able to hire someone based in Italy.</p><p className="text-slate-400 mb-8 max-w-xl mx-auto">Based in Palermo. Eligible to work in Italy; employment eligibility elsewhere depends on local requirements.</p><div className="flex justify-center gap-8 mb-8"><a href="mailto:xenia13@protonmail.com" className="hover:text-white hover:scale-110 transition"><Mail size={28} aria-hidden="true" /><span className="sr-only">Email</span></a><a href={linkedin} className="hover:text-white hover:scale-110 transition"><Linkedin size={28} aria-hidden="true" /><span className="sr-only">LinkedIn</span></a><a href="https://github.com/xenia19" className="hover:text-white hover:scale-110 transition"><Github size={28} aria-hidden="true" /><span className="sr-only">GitHub</span></a></div><p className="text-slate-500 text-sm">© {new Date().getFullYear()} Ksenia Galaktionova</p></div></footer>
    </div>;
}
export default App;
