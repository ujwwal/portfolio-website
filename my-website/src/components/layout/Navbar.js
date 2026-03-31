import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/portfolioData';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = navItems.map((item) => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 130;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;
        if (scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(`#${section}`);
          return;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top, behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveSection(href);
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        initial={{ y: -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto w-full max-w-6xl rounded-2xl border px-4 py-3 sm:px-6 ${
          isScrolled
            ? 'border-white/20 bg-black/74 shadow-[0_16px_36px_rgba(0,0,0,0.62)] backdrop-blur-2xl'
            : 'border-slate-300/10 bg-slate-950/42 backdrop-blur-lg'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, '#home')}
            className="relative font-display text-sm font-semibold uppercase tracking-[0.2em] text-slate-100"
          >
            Ujjwal Gupta
            <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-white/0 via-white/70 to-white/0" />
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-slate-300/12 bg-slate-900/55 p-1.5 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                whileHover={{ y: -1 }}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeSection === item.href ? 'text-white' : 'text-slate-300'
                }`}
              >
                {activeSection === item.href ? (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full border border-white/20 bg-white/10"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                  />
                ) : null}
                {item.label}
                {activeSection === item.href ? (
                  <motion.span
                    layoutId="active-nav-dot"
                    className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                ) : null}
              </motion.a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/15 bg-slate-900/50 text-slate-200 md:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 flex flex-col gap-2 border-t border-slate-300/10 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className={`rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-white ${
                      activeSection === item.href ? 'bg-white/10 text-white' : 'text-slate-300'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

export default Navbar;
