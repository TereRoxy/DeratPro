import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          lightBg: '#FFFFFF',
          lightBgAlt: '#F8FAFC',
          navy: '#0F172A',
          bluePrimary: '#0284C7',
          tealAccent: '#0D9488',
          amberWarm: '#D97706',
          darkBg: '#0F172A',
          darkBgAlt: '#020617',
          silkyBlue: '#38BDF8',
          darkCard: 'rgba(30, 41, 59, 0.7)',
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(15, 23, 42, 0.22)',
        glow: '0 0 70px rgba(2, 132, 199, 0.18)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 1px 1px, rgba(2, 132, 199, 0.12) 1px, transparent 0)',
      },
      backgroundSize: {
        'hero-grid': '26px 26px',
      },
    },
  },
  plugins: [],
} satisfies Config;
