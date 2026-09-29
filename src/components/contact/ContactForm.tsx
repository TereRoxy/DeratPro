import { useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from '../../utils/validation';

const initialForm: ContactFormData = {
  name: '',
  phone: '',
  service: '',
  message: '',
};

const inputClass =
  'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-brand-bluePrimary focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-brand-silkyBlue dark:focus:ring-sky-950';

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    const nextValue =
      name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value;
    const nextForm = { ...form, [name]: nextValue };

    setForm(nextForm);
    setSubmitted(false);
    if (name === 'phone' && phoneTouched) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        phone: nextValue && !/^07\d{8}$/.test(nextValue)
          ? 'Introdu un număr valid, în formatul 07xxxxxxxx.'
          : undefined,
      }));
    } else if (errors[name as keyof ContactFormData]) {
      setErrors((currentErrors) => ({ ...currentErrors, [name]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPhoneTouched(true);

    const nextErrors = validateContactForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div
        className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-teal-100 bg-teal-50/70 p-8 text-center dark:border-teal-900 dark:bg-teal-950/30"
        role="status"
      >
        <span className="grid size-16 place-items-center rounded-full bg-teal-100 text-brand-tealAccent dark:bg-teal-900/70 dark:text-teal-300">
          <CheckCircle2 size={34} />
        </span>
        <h3 className="mt-6 font-heading text-2xl font-bold text-brand-navy dark:text-white">
          Mulțumim pentru solicitare!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-300">
          Formularul a fost validat cu succes. Conectează-l la serviciul tău de
          contact pentru a transmite solicitările echipei.
        </p>
        <button
          className="mt-6 text-sm font-semibold text-brand-bluePrimary underline-offset-4 hover:underline dark:text-brand-silkyBlue"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          type="button"
        >
          Trimite o altă solicitare
        </button>
      </div>
    );
  }

  return (
    <form className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-soft sm:p-8 dark:border-slate-700 dark:bg-slate-900/70" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="contact-name">
          Nume complet
          <input
            autoComplete="name"
            className={inputClass}
            id="contact-name"
            name="name"
            onChange={updateField}
            placeholder="Numele tău"
            value={form.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <span className="mt-1 block text-xs font-medium text-rose-600" id="name-error">{errors.name}</span>}
        </label>
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="contact-phone">
          Număr de telefon
          <input
            autoComplete="tel-national"
            className={inputClass}
            id="contact-phone"
            inputMode="numeric"
            maxLength={10}
            name="phone"
            onBlur={() => {
              setPhoneTouched(true);
              setErrors((currentErrors) => ({
                ...currentErrors,
                phone: form.phone && !/^07\d{8}$/.test(form.phone)
                  ? 'Introdu un număr valid, în formatul 07xxxxxxxx.'
                  : undefined,
              }));
            }}
            onChange={updateField}
            placeholder="07xx xxx xxx"
            type="tel"
            value={form.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && <span className="mt-1 block text-xs font-medium text-rose-600" id="phone-error">{errors.phone}</span>}
        </label>
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 sm:col-span-2" htmlFor="contact-service">
          Tipul serviciului
          <select
            className={inputClass}
            id="contact-service"
            name="service"
            onChange={updateField}
            value={form.service}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'service-error' : undefined}
          >
            <option value="">Alege un serviciu</option>
            <option value="deratizare">Deratizare</option>
            <option value="dezinsectie">Dezinsecție</option>
            <option value="dezinfectie">Dezinfecție</option>
            <option value="pachet-complet">Pachet complet DDD</option>
          </select>
          {errors.service && <span className="mt-1 block text-xs font-medium text-rose-600" id="service-error">{errors.service}</span>}
        </label>
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 sm:col-span-2" htmlFor="contact-message">
          Detalii despre spațiu <span className="font-normal text-slate-400">(opțional)</span>
          <textarea
            className={`${inputClass} min-h-28 resize-y`}
            id="contact-message"
            name="message"
            onChange={updateField}
            placeholder="Tipul spațiului, problema observată..."
            rows={4}
            value={form.message}
          />
        </label>
      </div>
      <button
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-bluePrimary px-5 py-3 text-sm font-bold text-white shadow-md shadow-sky-900/10 transition hover:-translate-y-0.5 hover:bg-sky-700 sm:w-auto dark:bg-brand-silkyBlue dark:text-brand-darkBg dark:hover:bg-sky-300"
        type="submit"
      >
        Trimite solicitarea
        <ArrowRight size={17} />
      </button>
      <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">
        Datele tale sunt folosite doar pentru a răspunde solicitării.
      </p>
    </form>
  );
}
