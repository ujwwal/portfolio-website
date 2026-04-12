import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Shipped', value: '18+' },
  { label: 'Years Building', value: '4' },
  { label: 'Avg. Model Lift', value: '23%' },
];

const featuredProjects = [
  {
    name: 'SignalLens',
    summary:
      'An analytics + ML workspace that turns messy product events into clear recommendations for teams.',
    stack: ['React', 'Python', 'PostgreSQL'],
  },
  {
    name: 'NimbusOps',
    summary:
      'A reliability dashboard that predicts outages and helps engineering teams resolve incidents earlier.',
    stack: ['TypeScript', 'FastAPI', 'Docker'],
  },
  {
    name: 'PersonaFlow',
    summary:
      'Customer intelligence toolkit that combines segmentation, semantic search, and narrative reporting.',
    stack: ['Next.js', 'LangChain', 'Redis'],
  },
];

const skills = [
  'AI Product Design',
  'ML Prototyping',
  'Data Engineering',
  'React Frontends',
  'Experimentation',
  'API Architecture',
  'Cloud Deployment',
  'Storytelling with Data',
];

function App() {
  return (
    <main className="min-h-screen bg-page text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-slate-200/10 bg-[#08080ebf] px-6 py-4 backdrop-blur-xl md:px-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <span className="font-mono text-sm font-bold tracking-[0.12em] text-violet-300">UJ/</span>
          <div className="hidden items-center gap-8 md:flex">
            {['Work', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.16em] text-slate-300/75 transition hover:text-violet-300"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-300/65">Open to work</span>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pb-16 pt-20 md:px-10 md:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(167,139,250,0.22),transparent_35%),radial-gradient(circle_at_84%_14%,rgba(56,189,248,0.22),transparent_34%)]" />
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.24)_1px,transparent_1px)] [background-size:46px_46px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/90">Portfolio 2026</p>
            <h1 className="font-display mt-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Reimagined portfolio.
              <span className="block bg-gradient-to-r from-violet-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Cleaner story, stronger impact.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              I build production-ready AI products that balance technical depth with user experience. This redesign focuses
              on clarity, stronger hierarchy, and a modern visual identity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-900 shadow-lg shadow-cyan-500/20"
              >
                Explore Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-100 transition hover:border-violet-300/50 hover:text-violet-200"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="rounded-3xl border border-slate-300/15 bg-slate-900/50 p-6 shadow-[0_24px_48px_rgba(2,12,27,0.45)] backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-violet-200/90">Snapshot</p>
            <div className="mt-5 space-y-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-300/10 bg-slate-900/45 p-4">
                  <p className="text-2xl font-bold text-slate-100">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="work" className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.26em] text-cyan-200/80">Work</p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">Featured Projects</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-300/10 bg-slate-900/45 p-5 transition hover:-translate-y-1 hover:border-violet-300/35"
              >
                <h3 className="font-display text-xl font-semibold text-slate-100">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-300/15 bg-slate-800/50 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-cyan-100/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-300/10 bg-slate-900/45 p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.26em] text-violet-200/80">Skills</p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">What I Bring</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill} className="rounded-xl border border-slate-300/12 bg-slate-950/40 px-4 py-3 text-sm text-slate-200">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-200/15 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-8 text-center md:p-12">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/80">Contact</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">Want this same level of polish for your product?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            I&apos;m available for AI engineering, product builds, and design-driven frontend work.
          </p>
          <a
            href="mailto:hello@ujjwal.dev"
            className="mt-8 inline-flex rounded-full bg-slate-100 px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900"
          >
            hello@ujjwal.dev
          </a>
        </div>
      </section>

      <section id="about" className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#0f1320] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-violet-200/90">About</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
            I focus on the intersection of machine learning, product thinking, and engineering execution. I enjoy taking
            ambiguous ideas and shaping them into resilient systems that people actually use.
          </p>
        </div>
      </section>

      <footer id="contact" className="px-6 pb-20 pt-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/15 to-violet-500/15 p-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/90">Contact</p>
            <p className="mt-3 text-2xl font-bold">Let&apos;s build something sharp.</p>
          </div>
          <a
            href="mailto:hello@ujjwal.dev"
            className="rounded-md bg-slate-100 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-900"
          >
            hello@ujjwal.dev
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
