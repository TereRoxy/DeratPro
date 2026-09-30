import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  it('shows validation errors when submitted empty', () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole('button', { name: /trimite solicitarea/i }));

    expect(screen.getByText('Introdu numele complet.')).toBeInTheDocument();
    expect(screen.getByText('Introdu un număr valid, în formatul 07xxxxxxxx.')).toBeInTheDocument();
    expect(screen.getByText('Alege tipul de serviciu.')).toBeInTheDocument();
    expect(screen.getByLabelText(/Nume complet/)).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows a confirmation that clearly says the demo request was not sent', () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText('Nume complet'), {
      target: { value: 'Ana Popescu' },
    });
    fireEvent.change(screen.getByLabelText('Număr de telefon'), {
      target: { value: '0712345678' },
    });
    fireEvent.change(screen.getByLabelText('Tipul serviciului'), {
      target: { value: 'deratizare' },
    });
    fireEvent.click(screen.getByRole('button', { name: /trimite solicitarea/i }));

    expect(screen.getByRole('status')).toHaveTextContent('Aceasta este o demonstrație.');
    expect(screen.getByRole('status')).toHaveTextContent('solicitarea nu a fost trimisă sau salvată.');
  });

  it('resets the form after confirmation', () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText('Nume complet'), {
      target: { value: 'Ana Popescu' },
    });
    fireEvent.change(screen.getByLabelText('Număr de telefon'), {
      target: { value: '0712345678' },
    });
    fireEvent.change(screen.getByLabelText('Tipul serviciului'), {
      target: { value: 'deratizare' },
    });
    fireEvent.click(screen.getByRole('button', { name: /trimite solicitarea/i }));
    fireEvent.click(screen.getByRole('button', { name: /trimite o altă solicitare/i }));

    expect(screen.getByLabelText('Nume complet')).toHaveValue('');
    expect(screen.getByLabelText('Număr de telefon')).toHaveValue('');
    expect(screen.getByLabelText('Tipul serviciului')).toHaveValue('');
    expect(screen.getByRole('button', { name: /trimite solicitarea/i })).toBeInTheDocument();
  });
});