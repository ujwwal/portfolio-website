import { motion } from 'framer-motion';

function SectionHeading({ label, title, description, variants }) {
  return (
    <>
      <motion.p variants={variants} className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-300/85">
        {label}
      </motion.p>
      <motion.h2 variants={variants} className="font-display mt-4 text-3xl font-bold text-slate-100 sm:text-4xl md:text-5xl">
        {title}
      </motion.h2>
      {description ? (
        <motion.p variants={variants} className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {description}
        </motion.p>
      ) : null}
    </>
  );
}

export default SectionHeading;
