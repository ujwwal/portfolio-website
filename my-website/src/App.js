import { motion } from 'framer-motion';

const navItems = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

const projects = [
  {
    title: 'Atlas AI Console',
    year: '2026',
    description:
      'Unified command center for model monitoring, feedback triage, and release quality gates across multiple AI products.',
    tags: ['React', 'FastAPI', 'Postgres'],
  },
  {
    title: 'Papertrail Vision',
    year: '2025',
    description:
      'Document intelligence workflow for extracting structured data from noisy forms with confidence scoring and review queues.',
    tags: ['TypeScript', 'Python', 'OpenCV'],
  },
  {
    title: 'Northstar Forecast',
    year: '2025',
    description:
      'Decision support dashboard combining historical behavior, scenario planning, and explainable predictive signals.',
    tags: ['Next.js', 'XGBoost', 'Docker'],
  },
];

const principles = [
  'Design for clarity first',
  'Prototype quickly, validate early',
  'Ship reliable systems, not demos',
  'Make metrics understandable',
];

function App() {
  return (
    <div className="min-h-screen bg-[#090b14] text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#090b14cc] px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <span className="font-mono text-sm font-bold tracking-[0.18em] text-violet-300">UJ/</span>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs uppercase tracking-[0.2em] text-slate-300/75 transition hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </div>
          <span className="rounded-full border border-emerald-400/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
            Open to work
          </span>
        </div>
      </nav>

      <header className="relative overflow-hidden px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.25),transparent_32%),radial-gradient(circle_at_85%_0%,rgba(167,139,250,0.25),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/90">From scratch redesign</p>
            <h1 className="font-display mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              A portfolio that
              <span className="block bg-gradient-to-r from-cyan-300 via-violet-300 to-cyan-200 bg-clip-text text-transparent">
                feels intentional.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
              I build AI-heavy products with production quality, clear UX, and measurable business outcomes. This version
              is minimal, editorial, and focused on communicating value fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-md bg-cyan-300 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#09111f]"
              >
                View work
              </a>
              <a
                href="#contact"
                className="rounded-md border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-100"
              >
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-[#0f1320] p-6 shadow-[0_24px_45px_rgba(2,8,20,0.55)]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-violet-200">Approach</p>
            <ul className="mt-5 space-y-3">
              {principles.map((item) => (
                <li key={item} className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </header>

      <section id="work" className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Selected Work</h2>
          <div className="mt-8 space-y-4">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="grid gap-4 rounded-2xl border border-white/10 bg-[#0f1320] p-6 md:grid-cols-[120px_1fr_auto] md:items-start"
              >
                <p className="font-mono text-xs tracking-[0.16em] text-cyan-200/90">{project.year}</p>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-200/30 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
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
