import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projectItems } from '../../data/portfolioData';
import { cardReveal, fadeUp, sectionViewport, staggerContainer } from '../../motion/variants';
import SectionHeading from '../ui/SectionHeading';

const projectsContainer = staggerContainer(0.15, 0.05);
const projectsText = fadeUp(14, 0.78);
const projectsCards = staggerContainer(0.12, 0.1);
const projectCard = cardReveal(16, 0.64);

function ProjectsSection() {
  return (
    <section id="projects" className="relative scroll-mt-24 overflow-hidden px-6 pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute right-1/4 top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl"
          animate={{ y: [0, -6, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={projectsContainer}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <SectionHeading label="Portfolio Work" title="Selected Projects" variants={projectsText} />

        <motion.div variants={projectsCards} className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectItems.map((project) => (
            <motion.article
              key={project.title}
              variants={projectCard}
              whileHover={{
                y: -4,
                borderColor: 'rgba(148, 163, 184, 0.28)',
                boxShadow: '0 24px 46px rgba(255, 255, 255, 0.09)',
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-300/10 bg-slate-900/42 p-5 shadow-[0_18px_38px_rgba(2,12,27,0.42)] backdrop-blur-lg ${
                project.featured ? 'md:col-span-2 xl:col-span-2' : ''
              }`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -left-12 top-1/3 h-28 w-28 rounded-full bg-white/14 blur-2xl" />
              </div>
              <div
                className={`relative mb-5 overflow-hidden rounded-xl border border-slate-300/12 bg-gradient-to-br ${project.accent} p-3`}
              >
                <div className="h-36 rounded-lg border border-slate-300/12 bg-slate-950/55" />
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-white/16 blur-2xl" />
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-200/80">
                  {project.featured ? 'Featured Project' : 'Case Study'}
                </p>
              </div>

              <h3 className="font-display text-xl font-semibold text-slate-100">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300/90">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-300/12 bg-slate-800/45 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-slate-200/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -1, boxShadow: '0 16px 30px rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.99 }}
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-slate-100 to-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-black"
              >
                {project.cta}
                <ExternalLink size={13} />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ProjectsSection;
