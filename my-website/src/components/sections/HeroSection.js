import { motion } from 'framer-motion';
import { buttonTap, fadeUp, staggerContainer } from '../../motion/variants';

const heroContainer = staggerContainer(0.16, 0.18);
const heroItem = fadeUp(18, 0.75);
const heroButtons = fadeUp(18, 0.7);
const heroAnchor = fadeUp(16, 0.68);

function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen scroll-mt-24 items-center justify-center overflow-hidden px-6 pb-20 pt-28">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-white/12 blur-3xl sm:h-80 sm:w-80"
          animate={{ y: [0, -10, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"
          animate={{ y: [0, 8, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        <motion.div
          className="absolute right-10 top-20 h-40 w-40 rounded-full bg-slate-200/10 blur-2xl"
          animate={{ y: [0, -6, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        />
      </div>

      <motion.div variants={heroContainer} initial="hidden" animate="visible" className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.div variants={heroItem}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 sm:text-sm">Ujjwal Gupta</p>

          <h1 className="font-display text-4xl font-bold leading-tight text-slate-100 sm:text-5xl md:text-6xl">
            AI Engineer
            <span className="mx-2 text-slate-500">|</span>
            <span className="bg-gradient-to-r from-slate-100 via-white to-slate-300 bg-clip-text text-transparent">Data Scientist</span>
          </h1>
        </motion.div>

        <motion.p variants={heroItem} className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Building intelligent products with machine learning, practical data systems, and beautiful digital experiences.
        </motion.p>

        <motion.div variants={heroButtons} className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03, y: -2, boxShadow: '0 18px 36px rgba(255, 255, 255, 0.18)' }}
            whileTap={buttonTap}
            className="w-full rounded-full bg-gradient-to-r from-slate-100 to-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black shadow-lg shadow-white/20 transition sm:w-auto"
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{
              y: -2,
              borderColor: 'rgba(255, 255, 255, 0.65)',
              backgroundColor: 'rgba(10, 10, 10, 0.52)',
              color: 'rgb(255, 255, 255)',
            }}
            whileTap={buttonTap}
            className="w-full rounded-full border border-slate-500/70 bg-slate-900/38 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-slate-100 backdrop-blur transition sm:w-auto"
          >
            Contact
          </motion.a>
        </motion.div>

        <motion.div variants={heroAnchor} className="mt-8 w-full max-w-md px-2 sm:px-0">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-2xl border border-slate-300/10 bg-slate-900/35 px-5 py-4 shadow-[0_10px_30px_rgba(8,47,73,0.25)] backdrop-blur-lg"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-slate-300/75">Now Building</p>
            <p className="mt-2 text-sm text-slate-200/90">Applied AI products with measurable, real-world business impact.</p>
          </motion.div>
        </motion.div>
      </motion.div>

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
  );
}

export default HeroSection;
