import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Globe, Mail, Github, Twitter, Layers, Terminal, MousePointerClick } from 'lucide-react';
import { useRef } from 'react';

const featuredProjects = [
  {
    name: 'SignalLens',
    summary: 'Analytics & ML workspace turning unorganized product events into data-driven narratives.',
    stack: ['React', 'Python', 'PostgreSQL'],
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
    icon: <Layers className="w-5 h-5 text-textMain" />
  },
  {
    name: 'NimbusOps',
    summary: 'Predictive reliability dashboard to resolve incidents before they escalate.',
    stack: ['TypeScript', 'FastAPI'],
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    icon: <Terminal className="w-5 h-5 text-textMain" />
  },
  {
    name: 'PersonaFlow',
    summary: 'Customer intelligence toolkit combining segmentation with semantic search.',
    stack: ['Next.js', 'LangChain'],
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    icon: <MousePointerClick className="w-5 h-5 text-textMain" />
  },
];

const SpotlightCard = ({ children, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`spotlight-card group ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.05),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};

const words = "Crafting digital experiences".split(" ");

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const yHero = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(smoothProgress, [0, 0.3], [1, 0]);

  return (
    <div className="relative min-h-screen text-textMain font-sans bg-background noise-bg selection:bg-white/20" ref={containerRef}>

      {/* Minimalist Header */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg"
      >
        <div className="glass-nav rounded-full px-6 py-3 flex items-center justify-between">
          <span className="font-display font-medium tracking-widest text-sm uppercase">Ujjwal /</span>
          <div className="flex gap-6 items-center">
            {['Work', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs uppercase tracking-widest text-textMuted hover:text-white transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      <main className="px-6 md:px-12 max-w-5xl mx-auto pt-48 pb-24 border-x border-white/[0.02]">
        
        {/* Hero Section */}
        <motion.section 
          style={{ y: yHero, opacity: opacityHero }}
          className="min-h-[60vh] flex flex-col justify-center items-start"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8 overflow-hidden"
          >
            <p className="text-sm text-textMuted uppercase tracking-[0.3em]">Software Engineer & Designer</p>
          </motion.div>

          <div className="max-w-4xl">
            <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[2%]"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: i * 0.15 + 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word === 'digital' ? <span className="text-glow font-medium">{word}</span> : word}
                </motion.span>
              ))}
            </h1>
            
            <motion.p 
              className="mt-12 text-lg text-textMuted max-w-xl leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              Fusing deeply technical architecture with stark, uncompromising aesthetics.
            </motion.p>
          </div>
        </motion.section>

        {/* Selected Work Section */}
        <section id="work" className="pt-32 relative z-20">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="mb-16 border-b border-white/[0.05] pb-8 flex items-end justify-between"
          >
             <h2 className="font-display text-2xl uppercase tracking-widest font-light">Selected Work</h2>
             <span className="text-xs text-textMuted">01 / 03</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[300px]">
            {featuredProjects.map((project, idx) => (
              <SpotlightCard key={project.name} className={`${project.colSpan} ${project.rowSpan} p-8 flex flex-col justify-between`}>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8 text-textMuted group-hover:text-white transition-colors duration-500">
                    {project.icon}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-3 tracking-wide">{project.name}</h3>
                  <p className="text-textMuted leading-relaxed max-w-sm text-sm font-light">{project.summary}</p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8 relative z-10">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs font-medium text-textMuted uppercase tracking-widest border border-white/[0.05] px-3 py-1 rounded-[4px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* Minimalist Contact Section */}
        <section id="contact" className="pt-48 pb-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="border border-white/[0.05] rounded-3xl p-12 md:p-20 text-center max-w-3xl mx-auto bg-black/20"
          >
            <h2 className="font-display text-3xl md:text-5xl font-light mb-6 tracking-tight">Start a conversation.</h2>
            <p className="text-textMuted text-lg max-w-md mx-auto leading-relaxed mb-12 font-light">
              Available for select freelance opportunities and bespoke engineering projects.
            </p>
            
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:hello@ujjwal.dev" 
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <Mail className="w-4 h-4" /> Reach Out
            </motion.a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="pt-10 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-textMuted uppercase tracking-widest">
          <p>Ujjwal / 2026</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">GitHub</a>
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;
