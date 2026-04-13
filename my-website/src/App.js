import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Globe, MessageCircle, Mail, Sparkles, Code2, Database, Rocket } from 'lucide-react';
import { useRef } from 'react';

const featuredProjects = [
  {
    name: 'SignalLens',
    summary: 'Analytics & ML workspace turning unorganized product events into data-driven narratives and recommendations.',
    stack: ['React', 'Python', 'PostgreSQL'],
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
    icon: <Sparkles className="w-5 h-5 text-accent-violet" />
  },
  {
    name: 'NimbusOps',
    summary: 'Predictive reliability dashboard to resolve incidents before they escalate.',
    stack: ['TypeScript', 'FastAPI'],
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    icon: <Database className="w-5 h-5 text-accent-blue" />
  },
  {
    name: 'PersonaFlow',
    summary: 'Customer intelligence toolkit combining segmentation with semantic search.',
    stack: ['Next.js', 'LangChain'],
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    icon: <Code2 className="w-5 h-5 text-accent-cyan" />
  },
];

const skills = [
  'AI Product Design', 'ML Prototyping', 'Data Engineering', 'React Frontends',
  'Experimentation', 'API Architecture', 'Cloud Deployment', 'Storytelling with Data',
  'AI Product Design', 'ML Prototyping', 'Data Engineering', 'React Frontends', // Duplicate for infinite scroll
];

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="relative min-h-screen text-textMain font-sans selection:bg-accent-violet/30" ref={containerRef}>
      {/* Background Elements */}
      <div className="mesh-bg" />
      <motion.div 
        className="absolute inset-0 z-[-1] opacity-30 bg-repeat bg-[length:32px_32px]"
        style={{ 
          backgroundImage: 'radial-gradient(#ffffff11 1px, transparent 1px)',
          y: backgroundY 
        }}
      />

      {/* Floating Header */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
      >
        <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between">
          <span className="font-display font-bold text-xl tracking-tight">UJ<span className="text-accent-violet">/</span></span>
          <div className="hidden md:flex gap-8 items-center">
            {['Work', 'Skills', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-textMuted hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-2">
            Let's Talk <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.nav>

      <main className="px-6 md:px-12 max-w-7xl mx-auto pt-40 pb-24">
        
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center items-start">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-accent-cyan">Open for New Roles</span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.h1 
              className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting <span className="text-gradient">intellgent</span> <br/>
              digital experiences.
            </motion.h1>
            
            <motion.p 
              className="mt-8 text-lg md:text-xl text-textMuted max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Production-ready AI product engineering blending technical precision with compelling user design. Elevating how users interact with data.
            </motion.p>
          </div>

          <motion.div 
            className="mt-12 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
             <a href="#work" className="bg-white text-black px-8 py-4 rounded-full font-semibold text-sm hover:scale-105 transition-transform flex items-center gap-2">
               Explore Work
             </a>
          </motion.div>
        </section>

        {/* Bento Box Work Section */}
        <section id="work" className="pt-24 mt-24 border-t border-white/5">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">Selected Work</h2>
              <p className="text-textMuted mt-3">Things I've built lately.</p>
            </div>
            <Rocket className="w-10 h-10 text-accent-violet hidden sm:block opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[280px]">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className={`glass-card rounded-3xl p-8 flex flex-col justify-between group cursor-default relative overflow-hidden ${project.colSpan} ${project.rowSpan}`}
              >
                {/* Decorative glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-violet/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-surface/50 p-3 rounded-xl border border-white/5">
                      {project.icon}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">{project.name}</h3>
                  <p className="text-textMuted leading-relaxed max-w-sm">{project.summary}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/80 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Marquee Skills Section */}
        <section id="skills" className="pt-32 pb-16 overflow-hidden">
          <div className="flex space-x-8 animate-marquee whitespace-nowrap opacity-60">
            {skills.map((skill, i) => (
              <span key={`${skill}-${i}`} className="font-display text-4xl md:text-7xl font-bold stroke-text text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)'}}>
                {skill} <span className="text-accent-blue/30 mx-4">•</span>
              </span>
            ))}
          </div>
        </section>

        {/* Contact & About Section */}
        <section id="about" className="pt-24 md:pt-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel relative rounded-3xl p-10 md:p-16 overflow-hidden text-center max-w-4xl mx-auto"
          >
            {/* Inner Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-50" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent-blue/20 blur-[100px] pointer-events-none" />

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Let's build together.</h2>
            <p className="text-textMuted text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              I am always looking for exciting opportunities to build resilient, design-driven systems. If you have a project that needs a sharp technical edge combined with stunning UI, my inbox is open.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:hello@ujjwal.dev" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold transition hover:bg-slate-200 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" /> Say Hello
              </a>
              <div className="flex gap-4 w-full sm:w-auto justify-center">
                <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-accent-cyan transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-accent-blue transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-textMuted">
          <p>© 2026 Ujjwal. Portfolio Redesign.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> All Systems Nominal</span>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;
