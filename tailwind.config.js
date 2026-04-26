/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Fraunces', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        background: '#f6f1e7',
        surface: '#fffaf1',
        surfaceLighter: '#fffdf8',
        accent: {
          light: '#f7efe2',
          muted: '#ad8a64',
          dark: '#573d22',
        },
        textMain: '#1f1914',
        textMuted: '#7c6b59',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
