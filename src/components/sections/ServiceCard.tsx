import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  details: string;
  Icon: LucideIcon;
  tone: 'blue' | 'teal' | 'amber';
}

const toneClasses = {
  blue: 'bg-sky-50 text-brand-bluePrimary dark:bg-sky-950/50 dark:text-brand-silkyBlue',
  teal: 'bg-teal-50 text-brand-tealAccent dark:bg-teal-950/50 dark:text-teal-300',
  amber: 'bg-amber-50 text-brand-amberWarm dark:bg-amber-950/40 dark:text-amber-300',
};

export function ServiceCard({
  title,
  description,
  details,
  Icon,
  tone,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-xl sm:p-8 dark:border-slate-700/80 dark:bg-slate-900/70 dark:hover:border-sky-800">
      <div className={`grid size-14 place-items-center rounded-2xl ${toneClasses[tone]}`}>
        <Icon size={26} strokeWidth={1.8} />
      </div>
      <h3 className="mt-6 font-heading text-xl font-bold tracking-tight text-brand-navy dark:text-white">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {description}
      </p>
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5 dark:border-slate-700">
        <span className="text-xs font-semibold leading-5 text-slate-500 dark:text-slate-400">
          {details}
        </span>
        <a
          aria-label={`Solicită ${title}`}
          className="grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 transition group-hover:border-brand-bluePrimary group-hover:bg-brand-bluePrimary group-hover:text-white dark:border-slate-700 dark:text-slate-300 dark:group-hover:border-brand-silkyBlue dark:group-hover:bg-brand-silkyBlue dark:group-hover:text-brand-darkBg"
          href="#contact"
        >
          <ArrowUpRight size={18} />
        </a>
      </div>
    </article>
  );
}
