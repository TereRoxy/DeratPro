import { useState } from 'react';
import {
  Check,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
} from 'lucide-react';
import type { Theme } from '../../hooks/useTheme';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const navigation = [
  { label: 'Servicii', href: '#servicii' },
  { label: 'De ce noi?', href: '#avantaje' },
  { label: 'Cum funcționează?', href: '#proces' },
  { label: 'Contact', href: '#contact' },
];

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl transition-colors dark:border-slate-700/70 dark:bg-brand-darkBg/90">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          className="flex shrink-0 items-center gap-2.5"
          href="#top"
          aria-label="DeratPro, pagina principală"
          onClick={closeMenu}
        >
          <img
            alt=""
            aria-hidden="true"
            className="size-10 shrink-0"
            src={theme === 'dark'
              ? '/resources/deratpro-icon-dark.svg'
              : '/resources/deratpro-icon-light.svg'}
          />
          <span className="font-heading text-xl font-extrabold tracking-tight">
            Derat<span className="text-brand-bluePrimary dark:text-brand-silkyBlue">Pro</span>
          </span>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-800 xl:flex dark:border-teal-800 dark:bg-teal-950/50 dark:text-teal-200">
          <Check size={14} />
          Autorizat DSP / ANSVSA
        </div>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigare principală">
          {navigation.map((item) => (
            <a
              className="text-sm font-medium text-slate-600 transition hover:text-brand-bluePrimary dark:text-slate-300 dark:hover:text-brand-silkyBlue"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            aria-label={`Schimbă tema în ${theme === 'light' ? 'întunecată' : 'luminoasă'}`}
            className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-bluePrimary hover:text-brand-bluePrimary dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-silkyBlue dark:hover:text-brand-silkyBlue"
            onClick={onToggleTheme}
            type="button"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            className="hidden items-center gap-2 rounded-full bg-brand-bluePrimary px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-900/10 transition hover:-translate-y-0.5 hover:bg-sky-700 sm:inline-flex dark:bg-brand-silkyBlue dark:text-brand-darkBg dark:hover:bg-sky-300"
            href="tel:0727222532"
          >
            <Phone size={16} />
            <span className="hidden xl:inline">Sună acum</span>
            <span className="xl:hidden">Sună acum</span>
          </a>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Închide meniul' : 'Deschide meniul'}
            className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-700 lg:hidden dark:border-slate-700 dark:text-slate-200"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg lg:hidden dark:border-slate-700 dark:bg-brand-darkBg"
          id="mobile-navigation"
          aria-label="Navigare mobilă"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <a
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2 px-3 py-2 text-xs font-semibold text-teal-700 dark:text-teal-300">
              <Check size={14} />
              Autorizat DSP / ANSVSA
            </div>
            <a
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-bluePrimary px-4 py-3 text-sm font-semibold text-white dark:bg-brand-silkyBlue dark:text-brand-darkBg"
              href="tel:0727222532"
            >
              <Phone size={16} />
              Sună acum · 0727222532
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
