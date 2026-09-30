import { ArrowDown, ArrowRight, BadgeCheck, Clock3, Zap } from 'lucide-react';
import { HeroParticles } from './HeroParticles';
import { ProtectionShieldCanvas } from './ProtectionShieldCanvas';

export function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-brand-lightBgAlt dark:bg-brand-darkBg"
      id="top"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-hero-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <HeroParticles />
      <div className="relative z-10 mx-auto grid min-h-[650px] max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-4 lg:px-8 lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-2 text-xs font-semibold leading-5 text-amber-900 sm:text-sm dark:border-amber-900/70 dark:bg-amber-950/40 dark:text-amber-200">
            <Zap className="shrink-0 fill-current" size={16} />
            <span>Urgențe 24/7 <span className="px-1 opacity-50">·</span> Răspuns în max. 2 ore</span>
          </div>
          <h1 className="font-heading text-[clamp(2.55rem,7vw,5.2rem)] font-extrabold leading-[1.06] tracking-[-0.055em] text-brand-navy dark:text-white">
            Mediu purificat și sigur.
            <span className="mt-1 block text-brand-bluePrimary dark:text-brand-silkyBlue">
              Fără riscuri. De la macro la micro.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300">
            Deratizare, dezinsecție și dezinfecție realizate prompt de profesioniști,
            la cele mai înalte standarde.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-bluePrimary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/15 transition hover:-translate-y-0.5 hover:bg-sky-700 dark:bg-brand-silkyBlue dark:text-brand-darkBg dark:hover:bg-sky-300"
              href="#contact"
            >
              Solicită evaluare gratuită
              <ArrowRight size={17} />
            </a>

          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="text-brand-tealAccent" size={18} />
              Substanțe avizate
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="text-brand-tealAccent" size={18} />
              Intervenții rapide
            </span>
          </div>
          <a
            className="mt-10 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 transition hover:text-brand-bluePrimary lg:inline-flex dark:text-slate-500 dark:hover:text-brand-silkyBlue"
            href="#servicii"
          >
            Descoperă serviciile
            <ArrowDown size={14} />
          </a>
        </div>
        <div className="hero-visual relative mx-auto h-[min(78vw,390px)] w-full max-w-[520px] sm:h-[440px] lg:h-[520px] lg:max-w-none">
          <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10" />
          <ProtectionShieldCanvas />
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 shadow-soft backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 sm:bottom-5">
            <span className="size-2 rounded-full bg-brand-tealAccent shadow-[0_0_12px_rgba(13,148,136,0.8)]" />
            Scutul protecției moleculare
          </div>
        </div>
      </div>
    </section>
  );
}
