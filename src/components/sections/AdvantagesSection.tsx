import { BadgeCheck, Clock3, FileCheck2, UserRoundCheck } from 'lucide-react';

const advantages = [
  {
    number: '01',
    title: 'Intervenție rapidă',
    description: 'Ajungem în 2–4 ore, în funcție de locație și disponibilitate.',
    Icon: Clock3,
  },
  {
    number: '02',
    title: 'Substanțe avizate',
    description: 'Folosim produse biocide autorizate și aplicate responsabil.',
    Icon: BadgeCheck,
  },
  {
    number: '03',
    title: 'Personal calificat',
    description: 'Tehnicieni instruiți și echipamente profesionale pentru fiecare intervenție.',
    Icon: UserRoundCheck,
  },
  {
    number: '04',
    title: 'Garanție pe contract',
    description: 'Plan clar de intervenție și condiții de garanție documentate.',
    Icon: FileCheck2,
  },
];

export function AdvantagesSection() {
  return (
    <section className="relative overflow-hidden bg-brand-lightBgAlt py-20 sm:py-24 dark:bg-brand-darkBg">
      <div aria-hidden="true" className="absolute -right-28 top-0 size-80 rounded-full bg-teal-300/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="avantaje">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-tealAccent">
            De ce DeratPro?
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl dark:text-white">
            Profesionalism care se vede în fiecare detaliu
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ number, title, description, Icon }) => (
            <article
              className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 transition hover:border-teal-200 hover:shadow-soft sm:p-6 dark:border-slate-700/80 dark:bg-brand-darkCard dark:hover:border-teal-800"
              key={number}
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-3xl font-extrabold tracking-tight text-slate-200 dark:text-slate-700">
                  {number}
                </span>
                <span className="grid size-11 place-items-center rounded-xl bg-teal-50 text-brand-tealAccent dark:bg-teal-950/50 dark:text-teal-300">
                  <Icon size={21} />
                </span>
              </div>
              <h3 className="mt-6 font-heading text-lg font-bold text-brand-navy dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
