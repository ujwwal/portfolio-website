import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Layers3,
  Mail,
  MapPinned,
  Radio,
  Shield,
  TerminalSquare,
  TimerReset,
} from 'lucide-react';

const projects = [
  {
    title: 'F1 2026 Race Strategy Suite',
    label: 'Primary Project',
    description:
      'Telemetry-driven race strategy system modeling lap time, tyre wear, hybrid deployment, and active aero trade-offs for the 2026 Formula 1 regulations.',
    highlights: [
      'Built an automated FastF1 ingestion pipeline that pulls race weekend telemetry and normalizes laps, sector splits, stints, and tyre data into analysis-ready tables.',
      'Designed an idempotent Pandas + SQL dataset workflow so ingestion can be rerun safely without duplicate race records or metric drift.',
      'Developing predictive models for lap-time estimation and tyre degradation to support stint planning, pace forecasting, and undercut or overcut analysis.',
      'Prototyping a hybrid energy optimization layer to evaluate ICE versus electric deployment strategies using ML and RL-style decision modeling.',
      'Simulating 2026 active aero states such as X-mode and Z-mode to quantify drag versus pace trade-offs across lap phases.',
    ],
    stack: ['Python', 'Pandas', 'FastF1', 'SQL', 'Scikit-learn (planned)', 'Jupyter Notebook'],
    interesting:
      'This project treats motorsport data like a production decision system, not a notebook demo: ingest, model, simulate, and iterate against real telemetry.',
    icon: Radio,
  },
  {
    title: 'CyberVantage',
    description:
      'AI-powered cybersecurity training platform for phishing simulation, behavioral scoring, and adaptive user feedback.',
    highlights: [
      'Built a phishing simulation engine with Google Gemini that generates context-aware attack scenarios instead of relying on static email templates.',
      'Designed a structured scoring rubric that turns user actions into targeted feedback loops for measurable decision-making improvement.',
      'Implemented fallback paths and failure handling that kept the platform available at roughly 99.9% even during upstream AI or API instability.',
      'Added session-level tracking and performance analytics to measure user behavior over time and identify weak points in training outcomes.',
      'Recognized with the Tech Brilliance Award at the Tech^Us Showcase at Macquarie University.',
    ],
    stack: ['Python', 'Flask', 'SQLAlchemy', 'JWT', 'Google Gemini', 'HTML', 'CSS'],
    interesting:
      'The core problem is human reliability, not model novelty: generate realistic attacks, measure responses, and close the loop with actionable feedback.',
    icon: Shield,
  },
  {
    title: 'InfraBeacon',
    description:
      'Infrastructure intelligence platform that classifies civic issues from geotagged reports and turns them into spatially actionable incident data.',
    highlights: [
      'Built image-based issue classification on Google Vertex AI to convert raw public reports into structured infrastructure incident types.',
      'Implemented severity detection and categorization so reports can be prioritized for response rather than stored as passive submissions.',
      'Designed duplicate detection using geolocation matching plus model-assisted reasoning to reduce redundant issue reporting.',
      'Integrated Google Maps heatmaps and marker views to surface issue concentration, spread, and operational hotspots.',
    ],
    stack: ['Python', 'Flask', 'Google Vertex AI', 'Google Maps API', 'SQL'],
    interesting:
      'It combines vision, geospatial context, and workflow logic to turn noisy public input into something operations teams can actually use.',
    icon: MapPinned,
  },
  {
    title: 'Attendease',
    description:
      'Attendance management system built around real academic constraints, auditability, and clean analytics instead of basic CRUD.',
    highlights: [
      'Built subject-wise attendance tracking with one-record-per-day-per-subject constraints to preserve data integrity at the source.',
      'Allowed historical edits while preventing future-date manipulation, balancing operational flexibility with rule enforcement.',
      'Designed an analytics dashboard for overall and subject-wise attendance visibility, including shortage tracking and trend inspection.',
      'Implemented OTP-based password reset with expiry validation and email delivery for controlled account recovery.',
    ],
    stack: ['Python', 'Flask', 'Flask-Login', 'SQL', 'Email APIs'],
    interesting:
      'The interesting part is constraint handling: the system has to support backfills and corrections without opening paths for data abuse.',
    icon: TimerReset,
  },
  {
    title: 'OpenClaw',
    description:
      'Self-hosted AI agent deployment with WhatsApp automation, controlled access, and cloud runtime management on owned infrastructure.',
    highlights: [
      'Deployed the agent stack on a DigitalOcean Ubuntu instance and tuned the runtime with swap memory and Node-level optimization for low-resource operation.',
      'Integrated WhatsApp messaging with allowlist-based access control so automation remains private and operationally bounded.',
      'Kept the agent durable with persistent `tmux` sessions and cron-driven daily automation instead of relying on manual process recovery.',
      'Designed Gemini-backed conversational workflows for task execution while retaining end-to-end infrastructure control.',
    ],
    stack: ['Node.js', 'OpenClaw', 'DigitalOcean', 'Ubuntu', 'Gemini API'],
    interesting:
      'This is infrastructure-first agent work: deployment, process management, access control, and runtime stability all matter as much as the model API.',
    icon: TerminalSquare,
  },
];

const engineeringFocus = [
  'Python-first backend development with Flask, FastAPI, and production-oriented data pipelines.',
  'Reliability engineering through fallbacks, idempotent ingestion, and failure-aware system design.',
  'ML experimentation with Pandas, NumPy, Matplotlib, and Jupyter without stopping at notebook prototypes.',
  'Strong Git and GitHub workflows plus high-volume creative execution across technical and visual domains.',
];

const sectionMotion = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

function App() {
  return (
    <div className="min-h-screen bg-background text-textMain selection:bg-white/15">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(240,244,255,0.12),transparent_32%),linear-gradient(180deg,rgba(8,11,18,0.96),rgba(5,7,12,1))]" />
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-40" />

      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-0 right-0 z-50 px-4"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-5 py-3 backdrop-blur-xl">
          <a href="#top" className="text-xs uppercase tracking-[0.35em] text-white/90">
            Ujjwal
          </a>
          <div className="flex items-center gap-5 text-[11px] uppercase tracking-[0.28em] text-textMuted">
            <a href="#projects" className="transition-colors hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </motion.nav>

      <main id="top" className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <motion.section
          {...sectionMotion}
          className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.9fr)] lg:items-end"
        >
          <div className="max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-textMuted">
              Software Engineer • Backend Systems • Data Products
            </p>
            <h1 className="max-w-5xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
              Building production-grade systems across data pipelines, AI workflows, and reliability-critical backend services.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              I work primarily in Python and build systems that hold up under real constraints: idempotent ingestion, fallback paths, clean APIs, and measurable operational behavior.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-textMuted">Engineering Focus</span>
              <Layers3 className="h-4 w-4 text-white/70" />
            </div>
            <div className="space-y-3">
              {engineeringFocus.map((item) => (
                <p key={item} className="border-l border-white/10 pl-4 text-sm leading-6 text-slate-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          {...sectionMotion}
          className="pt-16"
        >
          <div className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-textMuted">Selected Work</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Projects</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Focused on systems with clear operational shape: real data, explicit constraints, and implementation decisions that matter beyond demo depth.
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-colors hover:border-white/20 sm:p-8"
                >
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
                    <div>
                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-slate-300">
                          <Icon className="h-3.5 w-3.5" />
                          Project {String(index + 1).padStart(2, '0')}
                        </span>
                        {project.label ? (
                          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-200">
                            {project.label}
                          </span>
                        ) : null}
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                            {project.title}
                          </h3>
                          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                            {project.description}
                          </p>
                        </div>
                        <ArrowUpRight className="mt-1 hidden h-5 w-5 shrink-0 text-white/45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white sm:block" />
                      </div>

                      <div className="mt-8">
                        <h4 className="text-xs uppercase tracking-[0.32em] text-textMuted">Key Highlights</h4>
                        <ul className="mt-4 space-y-3">
                          {project.highlights.map((item) => (
                            <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300 sm:text-[15px]">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-6 rounded-3xl border border-white/8 bg-slate-950/55 p-5">
                      <div>
                        <h4 className="text-xs uppercase tracking-[0.32em] text-textMuted">Tech Stack</h4>
                        <div className="mt-4 flex flex-wrap gap-2.5">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.interesting ? (
                        <div className="border-t border-white/10 pt-5">
                          <h4 className="text-xs uppercase tracking-[0.32em] text-textMuted">
                            What Makes This Interesting
                          </h4>
                          <p className="mt-3 text-sm leading-6 text-slate-400">{project.interesting}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          {...sectionMotion}
          className="mt-20 rounded-[32px] border border-white/10 bg-white/[0.03] p-8 sm:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.35em] text-textMuted">Contact</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                Interested in backend systems, applied ML, or data-heavy product work.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                I like building systems where model behavior, data quality, and operational reliability all have to line up.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@ujjwal.dev"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                hello@ujjwal.dev
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/25 hover:bg-white/[0.04]"
              >
                <ArrowUpRight className="h-4 w-4" />
                View Projects
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default App;
