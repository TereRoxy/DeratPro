import { describe, expect, it } from 'vitest';
import { validateContactForm, validatePhoneNumber } from './validation';

describe('validatePhoneNumber', () => {
  it('accepts a Romanian mobile number', () => {
    expect(validatePhoneNumber('0712345678')).toBe(true);
  });

  it.each(['071234567', '0812345678', '07 12345678', ''])('rejects %j', (phone) => {
    expect(validatePhoneNumber(phone)).toBe(false);
  });
});

describe('validateContactForm', () => {
  it('returns field errors when required values are missing or invalid', () => {
    expect(validateContactForm({
      name: ' ',
      phone: '123',
      service: '',
      message: '',
    })).toEqual({
      name: 'Introdu numele complet.',
      phone: 'Introdu un număr valid, în formatul 07xxxxxxxx.',
      service: 'Alege tipul de serviciu.',
    });
  });

  it('accepts valid required fields and an empty optional message', () => {
    expect(validateContactForm({
      name: 'Ana Popescu',
      phone: '0712345678',
      service: 'deratizare',
      message: '',
    })).toEqual({});
  });
});