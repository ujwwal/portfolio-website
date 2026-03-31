import { motion } from 'framer-motion';
import { FolderGit2, Link2, Mail } from 'lucide-react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ujwwal', icon: FolderGit2 },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ujjwal-gupta', icon: Link2 },
  { label: 'Email', href: 'mailto:ujjwal@example.com', icon: Mail },
];

function Footer() {
  return (
    <footer className="relative border-t border-slate-300/10 px-6 py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 text-sm text-slate-400 sm:flex-row sm:items-center">
        <p className="text-slate-400/90">© {new Date().getFullYear()} Ujjwal Gupta. Built with focus and intent.</p>
        <div className="flex items-center gap-5">
          <a href="#about" className="relative transition hover:text-white">
            About
          </a>
          <a href="#projects" className="relative transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="relative transition hover:text-white">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -1, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg border border-slate-300/10 bg-slate-900/50 p-2 text-slate-300 transition hover:border-white/35 hover:text-white"
                aria-label={item.label}
              >
                <Icon size={15} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
