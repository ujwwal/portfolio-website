import { motion } from 'framer-motion';
import { aboutHighlights } from '../../data/portfolioData';
import { cardReveal, fadeUp, sectionViewport, staggerContainer } from '../../motion/variants';
import SectionHeading from '../ui/SectionHeading';

const aboutContainer = staggerContainer(0.14, 0.04);
const aboutText = fadeUp(14, 0.78);
const aboutIntro = fadeUp(10, 0.66);
const aboutCards = staggerContainer(0.12, 0.1);
const aboutCard = cardReveal(16, 0.62);

function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden px-6 pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/3 top-8 h-44 w-44 rounded-full bg-white/10 blur-3xl"
          animate={{ y: [0, 6, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={aboutContainer}
        className="relative z-10 mx-auto max-w-5xl"
      >
        <SectionHeading
          label="About Section"
          title="About Me"
          description="I work at the intersection of AI, machine learning, and product engineering to build systems that solve meaningful problems. My focus is on creating intelligent experiences that are practical, scalable, and genuinely useful for people and businesses."
          variants={aboutText}
        />

        <motion.div variants={aboutIntro} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={aboutCards} className="contents">
            {aboutHighlights.map((highlight) => (
              <motion.article
                key={highlight.title}
                variants={aboutCard}
                whileHover={{
                  y: -4,
                  boxShadow: '0 20px 42px rgba(255, 255, 255, 0.09)',
                  borderColor: 'rgba(148, 163, 184, 0.24)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="rounded-2xl border border-slate-300/10 bg-slate-900/35 p-5 shadow-[0_16px_34px_rgba(2,12,27,0.42)] backdrop-blur-lg"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-slate-300/85">{highlight.title}</p>
                <p className="mt-3 text-xl font-semibold text-slate-100">{highlight.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300/90">{highlight.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
