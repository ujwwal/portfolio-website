import { motion } from 'framer-motion';

function App() {
  const smoothEase = [0.22, 1, 0.36, 1];
  const aboutHighlights = [
    {
      title: 'AI Product Thinking',
      value: 'End-to-End',
      description: 'From ideation and data strategy to deployment and measurable outcomes.',
    },
    {
      title: 'Machine Learning',
      value: 'Applied',
      description: 'Designing practical ML systems that are robust, explainable, and production-ready.',
    },
    {
      title: 'Execution Style',
      value: 'Fast + Reliable',
      description: 'Shipping quickly while keeping code quality, experimentation, and user impact in focus.',
    },
  ];
  const projectItems = [
    {
      title: 'Intelligent Support Copilot',
      description: 'An AI assistant workflow for customer support with retrieval-based responses, quality scoring, and feedback loops.',
      tech: ['React', 'Python', 'LangChain'],
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'A forecasting platform that turns historical business metrics into near-term predictions and scenario simulations.',
      tech: ['TypeScript', 'FastAPI', 'XGBoost'],
    },
    {
      title: 'Vision QA Pipeline',
      description: 'A computer vision system for automated quality checks with model monitoring and real-time alerting.',
      tech: ['PyTorch', 'OpenCV', 'Docker'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.18,
        staggerChildren: 0.16,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: smoothEase,
      },
    },
  };

  const buttonGroupVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: smoothEase,
      },
    },
  };

  const anchorCardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.68,
        ease: smoothEase,
      },
    },
  };

  const buttonVariants = {
    hover: {
      y: -2,
      transition: { duration: 0.24, ease: 'easeOut' },
    },
    tap: {
      scale: 0.985,
      transition: { duration: 0.14, ease: 'easeOut' },
    },
  };

  const aboutContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.04,
        staggerChildren: 0.14,
      },
    },
  };

  const aboutTextVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.78,
        ease: smoothEase,
      },
    },
  };

  const aboutCardsIntroVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.66,
        ease: smoothEase,
      },
    },
  };

  const aboutCardsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const aboutCardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.62,
        ease: smoothEase,
      },
    },
  };

  const projectsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.15,
      },
    },
  };

  const projectsTextVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.78,
        ease: smoothEase,
      },
    },
  };

  const projectsCardsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.64,
        ease: smoothEase,
      },
    },
  };

  return (
    <main className="bg-page text-slate-100">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-electric/25 blur-3xl sm:h-80 sm:w-80"
            animate={{ y: [0, -10, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-10 left-10 h-32 w-32 rounded-full bg-cyan-400/18 blur-2xl"
            animate={{ y: [0, 8, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          />
          <motion.div
            className="absolute right-10 top-20 h-40 w-40 rounded-full bg-indigo-400/16 blur-2xl"
            animate={{ y: [0, -6, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          />
        </div>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center"
        >
          <motion.div variants={itemVariants}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 sm:text-sm">
              Ujjwal Gupta
            </p>

            <h1 className="font-display text-4xl font-bold leading-tight text-slate-100 sm:text-5xl md:text-6xl">
              AI Engineer
              <span className="mx-2 text-slate-500">|</span>
              <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-cyan-200 bg-clip-text text-transparent">
                Data Scientist
              </span>
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Building intelligent products with machine learning, practical data systems, and beautiful digital experiences.
          </motion.p>

          <motion.div
            variants={buttonGroupVariants}
            className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          >
            <motion.a
              href="#projects"
              variants={buttonVariants}
              whileHover={{
                scale: 1.03,
                y: -2,
                boxShadow: '0 18px 36px rgba(34, 211, 238, 0.32)',
              }}
              whileTap="tap"
              className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-slate-900 shadow-lg shadow-cyan-500/25 transition sm:w-auto"
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover={{
                y: -2,
                borderColor: 'rgba(125, 211, 252, 0.75)',
                backgroundColor: 'rgba(15, 23, 42, 0.52)',
                color: 'rgb(186, 230, 253)',
              }}
              whileTap="tap"
              className="w-full rounded-full border border-slate-500/70 bg-slate-900/38 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-slate-100 backdrop-blur transition sm:w-auto"
            >
              Contact
            </motion.a>
          </motion.div>

          <motion.div variants={anchorCardVariants} className="mt-8 w-full max-w-md px-2 sm:px-0">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-2xl border border-slate-300/10 bg-slate-900/35 px-5 py-4 shadow-[0_10px_30px_rgba(8,47,73,0.25)] backdrop-blur-lg"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">Now Building</p>
              <p className="mt-2 text-sm text-slate-200/90">Applied AI products with measurable, real-world business impact.</p>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.div
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          animate={{ y: [0, 8, 0], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex h-10 w-6 justify-center rounded-full border border-slate-400/45 bg-slate-900/25 p-1 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-slate-200/75" />
          </div>
        </motion.div>
      </section>

      <section id="about" className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-1/3 top-8 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl"
            animate={{ y: [0, 6, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={aboutContainerVariants}
          className="relative z-10 mx-auto max-w-5xl"
        >
          <motion.p variants={aboutTextVariants} className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/85">
            About Section
          </motion.p>
          <motion.h2 variants={aboutTextVariants} className="font-display mt-4 text-3xl font-bold text-slate-100 sm:text-4xl md:text-5xl">
            About Me
          </motion.h2>
          <motion.p variants={aboutTextVariants} className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I work at the intersection of AI, machine learning, and product engineering to build systems that solve meaningful problems. My focus is on creating intelligent experiences that are practical, scalable, and genuinely useful for people and businesses.
          </motion.p>

          <motion.div
            variants={aboutCardsIntroVariants}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div variants={aboutCardsVariants} className="contents">
              {aboutHighlights.map((highlight) => (
                <motion.article
                  key={highlight.title}
                  variants={aboutCardVariants}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 20px 42px rgba(34, 211, 238, 0.11)',
                    borderColor: 'rgba(148, 163, 184, 0.24)',
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="rounded-2xl border border-slate-300/10 bg-slate-900/35 p-5 shadow-[0_16px_34px_rgba(2,12,27,0.42)] backdrop-blur-lg"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/80">{highlight.title}</p>
                  <p className="mt-3 text-xl font-semibold text-slate-100">{highlight.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300/90">{highlight.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section id="projects" className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute right-1/4 top-12 h-40 w-40 rounded-full bg-indigo-400/10 blur-3xl"
            animate={{ y: [0, -6, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={projectsContainerVariants}
          className="relative z-10 mx-auto max-w-6xl"
        >
          <motion.p variants={projectsTextVariants} className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/85">
            Portfolio Work
          </motion.p>
          <motion.h2 variants={projectsTextVariants} className="font-display mt-4 text-3xl font-bold text-slate-100 sm:text-4xl md:text-5xl">
            Selected Projects
          </motion.h2>

          <motion.div variants={projectsCardsVariants} className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectItems.map((project) => (
              <motion.article
                key={project.title}
                variants={projectCardVariants}
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(148, 163, 184, 0.28)',
                  boxShadow: '0 22px 44px rgba(34, 211, 238, 0.11)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group flex h-full flex-col rounded-2xl border border-slate-300/10 bg-slate-900/38 p-6 shadow-[0_18px_38px_rgba(2,12,27,0.42)] backdrop-blur-lg"
              >
                <h3 className="font-display text-xl font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300/90">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-300/12 bg-slate-800/45 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-cyan-100/85"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02, y: -1, boxShadow: '0 16px 30px rgba(34, 211, 238, 0.24)' }}
                  whileTap={{ scale: 0.99 }}
                  className="mt-7 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-900"
                >
                  View Project
                </motion.button>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

export default App;
