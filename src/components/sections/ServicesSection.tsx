import { BugOff, ShieldCheck, SprayCan } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    title: 'Deratizare',
    description:
      'Protecție completă împotriva rozătoarelor, cu planuri de control și stații de intoxicare securizate pentru spațiul tău.',
    details: 'Rezidențial · Comercial · Industrial',
    Icon: ShieldCheck,
    tone: 'blue' as const,
  },
  {
    title: 'Dezinsecție',
    description:
      'Tratamente precise prin nebulizare și pulverizare pentru insecte, cu soluții profesionale atent alese.',
    details: 'Insecte zburătoare și târâtoare',
    Icon: BugOff,
    tone: 'teal' as const,
  },
  {
    title: 'Dezinfecție',
    description:
      'Igienizarea suprafețelor și a aerului pentru un mediu curat în locuințe, birouri și spații comerciale.',
    details: 'Proceduri adaptate fiecărui spațiu',
    Icon: SprayCan,
    tone: 'amber' as const,
  },
];

export function ServicesSection() {
  return (
    <section className="bg-white py-20 sm:py-24 dark:bg-brand-darkBgAlt" id="servicii">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-tealAccent">
            Servicii DDD
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl dark:text-white">
            Protecție completă, fără compromisuri
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Soluții profesionale, alese în funcție de spațiu și de nevoile tale.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
