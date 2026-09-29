# DeratPro: Architecture and Engineering Directives

## 1. Modular Architecture Principles

Do not produce monolithic, single-file implementations. Follow a modular,
single-responsibility architecture, with code divided among component files,
custom hooks, utilities, and configuration modules.

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── hero/
│   │   ├── ProtectionShieldCanvas.jsx
│   │   └── HeroSection.jsx
│   ├── sections/
│   │   ├── ServicesSection.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── AdvantagesSection.jsx
│   │   └── ProcessSection.jsx
│   └── contact/
│       ├── ContactSection.jsx
│       └── ContactForm.jsx
├── hooks/
│   └── useTheme.js
├── utils/
│   └── validation.js
├── styles/
│   └── globals.css
├── App.jsx
└── index.js
```

## 2. Component and File Separation Requirements

Every component and logic module must reside in its own dedicated file.

### Header — `Header.jsx`

- Sticky navigation bar containing the logo, an “Autorizat DSP/ANSVSA” badge,
  navigation links, a theme toggle button, and a quick-call CTA button.

### Hero Section — `HeroSection.jsx`

- Text overlay, 24/7 emergency badge, H1 title, subtitle, and call-to-action
  buttons.

### Hero 3D Canvas — `ProtectionShieldCanvas.jsx`

- Isolated `@react-three/fiber` and `@react-three/drei` 3D Canvas implementation
  of “Scutul Protecției Moleculare” (Plexus Grid and interactive sphere).

### Services Section — `ServicesSection.jsx` and `ServiceCard.jsx`

- Interactive three-card grid highlighting Deratizare, Dezinsecție, and
  Dezinfecție.

### Advantages Section — `AdvantagesSection.jsx`

- Four-column layout detailing rapid response times, certified biocide usage,
  qualified technicians, and contract guarantees.

### Process Section — `ProcessSection.jsx`

- Three-step horizontal/vertical timeline logic.

### Contact Section — `ContactSection.jsx` and `ContactForm.jsx`

- Isolated contact form card alongside direct contact information, operational
  hours, and certification details.

## 3. Theme State Management — `useTheme.js`

Dark/light mode logic must be abstracted into a dedicated custom hook.

- **Hook file:** `src/hooks/useTheme.js`
- **Behavior:**
  - Manages theme state (`'light' | 'dark'`).
  - Syncs the `dark` CSS class directly onto `document.documentElement`.
  - Persists theme selection in `localStorage`.
  - Exports `{ theme, toggleTheme }` to power the header toggle switch.

## 4. Form Validation and Helper Logic — `validation.js`

Separate all JavaScript validation and string formatting from UI rendering
logic.

- **Utility file:** `src/utils/validation.js`
- **Functions:**
  - `validatePhoneNumber(phone)`: Validates Romanian 10-digit phone number
    format (`/^07\d{8}$/`).
  - `validateContactForm(data)`: Validates name, phone, and service fields, and
    returns field-specific error objects.

## 5. Color Palette and Styling System — `tailwind.config.js`

All visual styling must rely on Tailwind CSS theme tokens configured in
`tailwind.config.js`.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          lightBg: '#FFFFFF',
          lightBgAlt: '#F8FAFC',
          navy: '#0F172A',
          bluePrimary: '#0284C7',
          tealAccent: '#0D9488',
          amberWarm: '#D97706',
          darkBg: '#0F172A',
          darkBgAlt: '#020617',
          silkyBlue: '#38BDF8',
          darkCard: 'rgba(30, 41, 59, 0.7)',
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

## 6. Execution Guidelines for Code Generation

When generating code based on these specifications:

- Do not aggregate exports into single files.
- Deliver each file separately with explicit relative imports (for example,
  `import { useTheme } from '../hooks/useTheme'`).
- Ensure all React 3D dependencies (`@react-three/fiber`, `@react-three/drei`,
  and `three`) are scoped strictly within `ProtectionShieldCanvas.jsx`.