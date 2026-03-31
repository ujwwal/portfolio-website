import { motion } from 'framer-motion';
import { FolderGit2, Link2, Mail } from 'lucide-react';
import { contactLinks } from '../../data/portfolioData';
import { cardReveal, fadeUp, sectionViewport, staggerContainer } from '../../motion/variants';
import SectionHeading from '../ui/SectionHeading';

const contactContainer = staggerContainer(0.14, 0.05);
const contactText = fadeUp(12, 0.72);
const contactCards = staggerContainer(0.12, 0.08);
const contactCard = cardReveal(14, 0.6);
const iconMap = {
  Email: Mail,
  GitHub: FolderGit2,
  LinkedIn: Link2,
};

function ContactSection() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden px-6 pb-24 pt-20 md:pb-28 md:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-10 h-36 w-36 rounded-full bg-white/10 blur-3xl"
          animate={{ y: [0, -5, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        variants={contactContainer}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <SectionHeading
          label="Get In Touch"
          title="Contact"
          description="Open to collaborations, AI product consulting, and full-time opportunities where machine learning can create meaningful impact."
          variants={contactText}
        />

        <motion.div variants={contactCards} className="mt-10 grid gap-5 md:grid-cols-3">
          {contactLinks.map((item) => {
            const Icon = iconMap[item.label] ?? Mail;
            return (
            <motion.a
              key={item.label}
              href={item.href}
              variants={contactCard}
              whileHover={{
                y: -3,
                boxShadow: '0 18px 34px rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(148, 163, 184, 0.24)',
              }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="group relative overflow-hidden rounded-2xl border border-slate-300/10 bg-slate-900/45 p-5 shadow-[0_16px_30px_rgba(2,12,27,0.38)] backdrop-blur-lg"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/14 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white">
                <Icon size={18} />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-200/85">{item.label}</p>
              <p className="mt-2 text-sm font-medium text-slate-100">{item.value}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-slate-400">Connect</p>
            </motion.a>
            );
          })}
        </motion.div>

        <motion.p variants={contactText} className="mt-10 text-sm text-slate-300/90 sm:text-base">
          Have an idea in mind? Let&apos;s build something thoughtful and high-impact together.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default ContactSection;
