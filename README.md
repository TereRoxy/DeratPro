# DeratPro

DeratPro is a responsive website concept for a professional pest-control and disinfection service. It presents the core services, explains the service process, and gives visitors a direct way to request contact. The project is deployed on Vercel and is accessible online at this [link](https://derat-pro.vercel.app/).

## Run Locally

### Prerequisites

- Install a current LTS version of [Node.js](https://nodejs.org/). npm is included with Node.js.

### Start the development server

From the project directory, install dependencies and start Vite:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal, usually `http://localhost:5173`.

### Build and preview

```bash
npm run build
npm run preview
```

The build runs the TypeScript project checks and creates the production bundle in `dist/`. The preview command serves that bundle locally.

## What It Uses

- **React 19** for the user interface, with **TypeScript** for typed components and utilities.
- **Vite** for local development and production builds.
- **Tailwind CSS** for responsive styling and design tokens.
- **Lucide React** for interface icons.
- **Three.js**, **React Three Fiber**, and **React Three Drei** for the interactive 3D protection visual in the hero section.
- **npm** for dependency installation and project scripts.

The interface is organized into separate components for the header, hero, services, advantages, process, contact, and footer. Theme behavior is handled by a dedicated hook, and contact-field validation lives in a utility module.

## Design Direction

The visual direction is intentionally simple and easy to scan, including when reading diagonally. It takes cues from modern “breakthrough in tech” product sites rather than conventional landing-page templates. The interface aims to feel clean, clinical, and calm, with a restrained palette, careful detail, and layouts that reposition naturally across screen sizes.

The hero pairs a 3D molecular shield with a pointer-reactive particle animation. The particles are an abstract stand-in for pests: they move away from the pointer and fade as it passes over them, suggesting that pests disappear on contact. The molecular shield adds a second visual cue for protection and responds subtly to pointer movement.

### Competitor references and design gaps

The screenshots in [`reference_inspo/`](reference_inspo/) were used as starting points for reviewing competitor websites:

- [Screenshot 1](reference_inspo/Screenshot_1.png)
- [Screenshot 2](reference_inspo/Screenshot_2.png)
- [Screenshot 3](reference_inspo/Screenshot_3.png)
- [Screenshot 4](reference_inspo/Screenshot_4.png)
- [Screenshot 5](reference_inspo/Screenshot_5.png)

The review highlighted several patterns the DeratPro concept aimed to improve:

- Wordy, paragraph-heavy pages instead of concise, clearly separated sections.
- Bold colors and very high contrast that can feel visually harsh.
- Interfaces that lack a modern visual design.
- No light and dark theme options.
- Static, non-interactive experiences.
- Inconsistent design elements and weak cohesion between page sections.

### Design tool and prompt history

[Stitch by Google](https://stitch.withgoogle.com/projects/15787672423716523549) was used to create the design concept prototype. The concept was then implemented in React and Tailwind CSS. The prompts in [DESIGN.md](DESIGN.md) and [AGENTS.md](AGENTS.md) were also provided in the AI coding-agent context.

The following is the Stitch prompt history, preserved in Romanian as originally written:

**First prompt**

```text
Contextul
Un client fictiv, DeratPro — o firmă de servicii de deratizare, dezinsecție și dezinfecție pentru clienți casnici și comerciali — vrea un site de prezentare modern, tip landing page, care să inspire încredere și să genereze cereri de ofertă.
Nu ai brief de design de la client. Deciziile de UI/UX îți aparțin — vrem să vedem cum gândești și cum folosești tool-urile moderne.
Ce ai de construit
O pagină de tip landing page, cu 5 secțiuni așezate una sub alta (scroll vertical):

Hero — cu o animație Three.js (obligatoriu). Ce animație faci rămâne complet la alegerea ta. Include numele firmei + un buton principal (CTA).

Servicii — cele 3 servicii (deratizare, dezinsecție, dezinfecție), fiecare cu titlu, scurtă descriere și iconiță.

De ce DeratPro — 3–4 avantaje (ex: intervenție rapidă, substanțe avizate, personal autorizat, garanție).

Cum funcționează — proces în 3 pași (ex: Ne suni → Evaluare → Intervenție).

Contact — formular simplu (nume, telefon, mesaj) cu validare de bază. Nu trebuie să trimită date real; e suficient să valideze câmpurile și să afișeze un mesaj de confirmare.
```

**Second prompt**

```text
vreau sa creez conceptul pentru un design cu urmatoarele cerinte: + DESIGN.md.
```

**Third prompt**

```text
creaza un logo + icon pentru DeratPro care sa contina textul asa cum e in imagine. logo-ul trebuie sa existe in mai multe formate de imagine + un icon pentru web tab header. aspectul trebuie sa fie adaptabil pentru portret, peisaj si patrat, light+dark mode. logo-ul trebuie sa surprinda un recipient de curatenie cu pulverizator si o bifa in interior. foloseste nuanta de albastru din textul atasat in imagine.
```

**Fourth prompt**

```text
refa logo-ul pe varianta dark sa aiba background dark. foloseste varianta de logo/icon cu deratpro favicon si in celelalte ca sa asiguri uniformitatea logourilor. fa si un favicon cu light background cu acelasi model de recipient. unde utilizezi text "servicii ddd", foloseste sintagma "SERVICII D.D.D. AUTORIZATE".
```

## Decisions and Trade-offs

- **Prototype-to-code translation:** Stitch helped explore the visual concept, while the final site was implemented separately in React and Tailwind CSS. Translating a prototype into a working responsive interface requires implementation choices and can introduce differences from the original concept.
- **Brand assets versus brand identity:** A consistent logo and favicon help recognition, but the restrained visual system still leaves limited room for a distinctive company personality.
- **Premium positioning:** The polished, highly controlled presentation can feel generic or forgettable and gives the company less distinct personal branding.
- **Limited human warmth:** The “surgical” one-and-done service impression may not communicate an approachable, ongoing relationship with customers. A stronger brand voice, team photography, or more human-centered content could address this trade-off.

## AI Collaboration and Workflow

GitHub Copilot Agent was used to generate the project template and implement basic contact-form validation, following the project instructions in [AGENTS.md](AGENTS.md) and design requirements in [DESIGN.md](DESIGN.md). AI assistance also helped accelerate repetitive markup and Tailwind CSS styling, draft TypeScript interfaces, and review accessibility details such as `aria-describedby` associations and visible focus states. Suggestions were reviewed and adapted to the project.
