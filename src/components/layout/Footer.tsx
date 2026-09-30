import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-brand-darkBgAlt">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a className="inline-flex items-center gap-2 font-heading font-bold text-brand-navy dark:text-white" href="#top">
              <img
                alt=""
                aria-hidden="true"
                className="size-6 dark:hidden"
                src="/resources/deratpro-icon-light.svg"
              />
              <img
                alt=""
                aria-hidden="true"
                className="hidden size-6 dark:block"
                src="/resources/deratpro-icon-dark.svg"
              />
              DeratPro SRL
            </a>
            <dl className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <div>
                <dt className="inline font-semibold">CUI: </dt>
                <dd className="inline">38320275</dd>
              </div>
              <div>
                <dt className="inline font-semibold">Reg. Com.: </dt>
                <dd className="inline">J2026093005666</dd>
              </div>
              <div>
                <dt className="font-semibold">Punct de lucru</dt>
                <dd>Str. Principala, sat Răcătău, com. Măguri-Răcătău, jud. Cluj-Napoca</dd>
              </div>
            </dl>
          </div>

          <nav aria-label="Sitemap" id="sitemap">
            <h2 className="font-heading text-sm font-bold text-brand-navy dark:text-white">Sitemap</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a className="transition hover:text-brand-bluePrimary dark:hover:text-brand-silkyBlue" href="#top">Acasă</a></li>
              <li><a className="transition hover:text-brand-bluePrimary dark:hover:text-brand-silkyBlue" href="#servicii">Servicii</a></li>
              <li><a className="transition hover:text-brand-bluePrimary dark:hover:text-brand-silkyBlue" href="#avantaje">De ce DeratPro</a></li>
              <li><a className="transition hover:text-brand-bluePrimary dark:hover:text-brand-silkyBlue" href="#proces">Cum funcționează</a></li>
              <li><a className="transition hover:text-brand-bluePrimary dark:hover:text-brand-silkyBlue" href="#contact">Contact</a></li>
            </ul>
          </nav>

          <nav aria-label="Informarea consumatorilor">
            <h2 className="font-heading text-sm font-bold text-brand-navy dark:text-white">Informarea consumatorilor</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <li>
                <a className="transition hover:text-brand-bluePrimary dark:hover:text-brand-silkyBlue" href="https://anpc.ro/" rel="noreferrer" target="_blank">
                  ANPC
                </a>
              </li>
              <li>
                <a className="transition hover:text-brand-bluePrimary dark:hover:text-brand-silkyBlue" href="https://reclamatiisal.anpc.ro/" rel="noreferrer" target="_blank">
                  Soluționarea alternativă a litigiilor (SAL)
                </a>
              </li>
              <li>
                <a className="transition hover:text-brand-bluePrimary dark:hover:text-brand-silkyBlue" href="https://consumer-redress.ec.europa.eu/index_en" rel="noreferrer" target="_blank">
                  Consumer Redress în UE
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-5 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} DeratPro SRL. Această pagină este un concept de prezentare.</p>
          <a
            aria-label="Înapoi sus"
            className="grid size-10 place-items-center rounded-full border border-slate-200 transition hover:border-brand-bluePrimary hover:text-brand-bluePrimary dark:border-slate-700 dark:hover:border-brand-silkyBlue dark:hover:text-brand-silkyBlue"
            href="#top"
          >
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
