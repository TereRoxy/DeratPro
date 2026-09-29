import { ArrowUp, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 dark:border-slate-800 dark:bg-brand-darkBgAlt">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <a className="inline-flex items-center gap-2 font-heading font-bold text-brand-navy dark:text-white" href="#top">
          <ShieldCheck className="text-brand-bluePrimary dark:text-brand-silkyBlue" size={19} />
          DeratPro
        </a>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} DeratPro. Înlocuiește datele demonstrative înainte de publicare.
        </p>
        <a
          aria-label="Înapoi sus"
          className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:border-brand-bluePrimary hover:text-brand-bluePrimary dark:border-slate-700 dark:hover:border-brand-silkyBlue dark:hover:text-brand-silkyBlue"
          href="#top"
        >
          <ArrowUp size={17} />
        </a>
      </div>
    </footer>
  );
}
