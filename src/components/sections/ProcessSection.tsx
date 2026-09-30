import { ClipboardList, SearchCheck, Shield } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Preiei legătura',
    description: 'Ne suni sau ne trimiți o solicitare. Înțelegem rapid situația.',
    Icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Inspecție și plan',
    description: 'Evaluăm spațiul și stabilim tratamentul potrivit pentru tine.',
    Icon: SearchCheck,
  },
  {
    number: '03',
    title: 'Spațiu protejat',
    description: 'Aplicăm tratamentul și îți oferim documentația intervenției.',
    Icon: Shield,
  },
];

export function ProcessSection() {
  return (
    <section className="bg-white py-20 sm:py-24 dark:bg-brand-darkBgAlt" id="proces">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-bluePrimary dark:text-brand-silkyBlue">
            Simplu și transparent
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl dark:text-white">
            Cum funcționează
          </h2>
        </div>
        <ol className="process-steps grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {steps.map(({ number, title, description, Icon }) => (
            <li className="relative flex gap-4 md:flex-col md:items-center md:text-center" key={number}>
              <div className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl border border-sky-100 bg-sky-50 text-brand-bluePrimary dark:border-sky-900 dark:bg-sky-950/50 dark:text-brand-silkyBlue">
                <Icon size={24} />
              </div>
              <div>
                <span className="text-xs font-bold tracking-[0.16em] text-brand-tealAccent">
                  PASUL {number}
                </span>
                <h3 className="mt-1 font-heading text-lg font-bold text-brand-navy dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600 md:mx-auto dark:text-slate-300">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
