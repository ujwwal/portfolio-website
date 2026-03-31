export const premiumEase = [0.22, 1, 0.36, 1];

export const sectionViewport = {
  once: true,
  amount: 0.24,
};

export const staggerContainer = (stagger = 0.14, delayChildren = 0.04) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren,
      staggerChildren: stagger,
    },
  },
});

export const fadeUp = (distance = 14, duration = 0.72) => ({
  hidden: { opacity: 0, y: distance, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration,
      ease: premiumEase,
    },
  },
});

export const cardReveal = (distance = 16, duration = 0.62) => ({
  hidden: { opacity: 0, y: distance, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration,
      ease: premiumEase,
    },
  },
});

export const buttonTap = {
  scale: 0.985,
  transition: { duration: 0.14, ease: 'easeOut' },
};
