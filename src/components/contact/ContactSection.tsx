import { Clock3, Mail, MapPin, PhoneCall, ShieldCheck } from 'lucide-react';
import { ContactForm } from './ContactForm';

const contactDetails = [
  {
    label: 'Telefon',
    value: '07xx xxx xxx',
    Icon: PhoneCall,
    href: 'tel:0740000000',
  },
  {
    label: 'Email',
    value: 'contact@deratpro.ro',
    Icon: Mail,
    href: 'mailto:contact@deratpro.ro',
  },
  {
    label: 'Zonă de intervenție',
    value: 'Completează orașul și județul',
    Icon: MapPin,
  },
];

export function ContactSection() {
  return (
    <section className="bg-brand-lightBgAlt py-20 sm:py-24 dark:bg-brand-darkBg" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-tealAccent">
            Contact
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl dark:text-white">
            Hai să găsim soluția potrivită
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Povestește-ne pe scurt despre spațiul tău, iar echipa noastră te va
            ajuta cu următorii pași.
          </p>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <ContactForm />
          <aside className="space-y-7 lg:pt-2">
            <div>
              <h3 className="font-heading text-xl font-bold text-brand-navy dark:text-white">
                Vorbește direct cu noi
              </h3>
              <div className="mt-5 space-y-3">
                {contactDetails.map(({ label, value, Icon, href }) => {
                  const content = (
                    <>
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-brand-bluePrimary shadow-sm dark:bg-slate-800 dark:text-brand-silkyBlue">
                        <Icon size={20} />
                      </span>
                      <span>
                        <span className="block text-xs text-slate-500 dark:text-slate-400">{label}</span>
                        <span className="mt-0.5 block text-sm font-semibold text-brand-navy dark:text-slate-100">{value}</span>
                      </span>
                    </>
                  );

                  return href ? (
                    <a
                      className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 transition hover:border-sky-200 dark:border-slate-700 dark:bg-slate-900/50 dark:hover:border-sky-800"
                      href={href}
                      key={label}
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-slate-700 dark:bg-slate-900/50"
                      key={label}
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 dark:border-slate-700 dark:bg-brand-darkCard">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-amber-50 text-brand-amberWarm dark:bg-amber-950/50 dark:text-amber-300">
                  <Clock3 size={19} />
                </span>
                <h3 className="font-heading font-bold text-brand-navy dark:text-white">Program</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Programări: luni–vineri, 08:00–18:00
                <br />
                Urgențe: disponibilitate 24/7
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-teal-200/70 bg-teal-50/70 p-5 dark:border-teal-900 dark:bg-teal-950/30">
              <ShieldCheck className="mt-0.5 shrink-0 text-brand-tealAccent dark:text-teal-300" size={21} />
              <p className="text-sm leading-6 text-teal-950 dark:text-teal-100">
                <span className="font-bold">Personal autorizat.</span> Completează
                aici numerele autorizațiilor și certificările valabile pentru
                compania ta.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
