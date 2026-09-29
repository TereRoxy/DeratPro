export interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

export type ContactFormErrors = Partial<
  Record<keyof ContactFormData, string>
>;

export function validatePhoneNumber(phone: string): boolean {
  return /^07\d{8}$/.test(phone.trim());
}

export function validateContactForm(
  data: ContactFormData,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Introdu numele complet.';
  }

  if (!validatePhoneNumber(data.phone)) {
    errors.phone = 'Introdu un număr valid, în formatul 07xxxxxxxx.';
  }

  if (!data.service) {
    errors.service = 'Alege tipul de serviciu.';
  }

  return errors;
}
