# Design System & Specificații UI/UX: **DeratPro**

Acest document conține specificațiile complete ale sistemului de design, direcția vizuală, paleta de culori și structura celor 5 secțiuni pentru platforma **DeratPro**, pregătite pentru documentația de proiect.

---

## 1. Limbaj Vizual & Direcție Creativă

DeratPro transmite igienă, siguranță, eficiență clinică și profesionalism autorizat, eliminând complet elementele vizuale agresive (cum ar fi ilustrațiile explicite cu dăunători).

### Paleta de Culori (Sistem Dual: Light / Dark Mode)

#### **Light Mode (Principal)**

* **Background Principal:** `#FFFFFF` (Alb pur)
* **Background Secundar:** `#F8FAFC` (Gri steril ultra-deschis)
* **Primary (Încredere):** `#0F172A` (Navy Deep) / `#0284C7` (Albastru Medical)
* **Accent (Siguranță/Curățenie):** `#0D9488` (Emerald Green / Teal)
* **Secondary / Badge-uri:** `#D97706` (Warm Resin / Chihlimbar)

#### **Dark Mode**

* **Background Principal:** `#0F172A` (Dark Slate)
* **Background Alt:** `#020617` (Deep Dark)
* **Primary:** `#38BDF8` (Silky Neon Blue)
* **Carduri:** `rgba(30, 41, 59, 0.7)` + `backdrop-filter: blur(8px)` (Glassmorphism sobru)

---

### Tipografie / Fonturi

* **Headings (H1 - H4):** `Plus Jakarta Sans` / `Inter`
* **Weights:** 700 (Bold), 800 (ExtraBold)
* **Stil:** Geometric, clar, lizibil, litere aerisite.


* **Body & Controls:** `Inter`
* **Weights:** 400 (Regular), 500 (Medium), 600 (SemiBold)
* **Stil:** Proporții tabulare curate, lizibilitate crescută pe ecran.



---

### Comutator Tema (Light/Dark Toggle)

* **Plasare:** În Header (dreapta).
* **Format:** Pill fluid cu iconițe minimaliste (soare / luna).
* **Tranziție:** Smooth CSS pe culori de fundal și text (`transition: all 0.3s ease`).

---

## 2. Structura Celor 5 Secțiuni (Vertical Scroll)

### Header (Sticky Nav)

* **Stânga:** Logo DeratPro (scut minimalist + font bold) + indicator vizual *"Autorizat DSP/ANSVSA"*.
* **Centru:** Link-uri rapide de navigare (*Servicii*, *De Ce Noi*, *Cum Funcționează*, *Contact*).
* **Dreapta:** Comutator Light/Dark Mode + Buton apel rapid (`Tel: 07xx xxx xxx`).

---

### Secțiunea 1: Hero (cu Animație Three.js)

* **Concept Animație 3D:** *"Scutul Protecției Moleculare"*
* Canvas interactiv 3D (React Three Fiber / Three.js).
* În loc de dăunători 3D, afișează un scut sferic tridimensional și o rețea moleculară de protecție (*Plexus Grid*).
* Reacționează subtil la mișcarea cursorului (wave effect / purificare).
* Fallback performant cu `requestAnimationFrame` optimizat.


* **Conținut Stânga (Text Overlay):**
* **Badge:** ` (Fulger) Servicii de Urgență 24/7 – Răspuns în max. 2 ore`
* **H1:** *Mediu Purificat și Sigur. Fără Dăunători, Fără Riscuri.*
* **Subtitlu:** Servicii profesionale de deratizare, dezinsecție și dezinfecție cu substanțe avizate și garanție pe contract.
* **CTAs:** `[ Solicită Evaluare Gratuită ]` (Buton solid cu efect de hover elevat) + `[ Sună-ne Acum ]` (Secondary).



---

### Secțiunea 2: Servicii

* **Layout:** Grid cu 3 carduri mari, cu efect de ridicare subtilă (elevation/hover).
* **Card 1 – Deratizare:** Iconiță Scut/Protecție. Descriere focusată pe eliminare definitivă (șoareci, șobolani) și stații de intoxicare securizate.
* **Card 2 – Dezinsecție:** Iconiță Atomizor/Spray curat. Descriere focusată pe proceduri de nebulizare/UAV (gândaci, ploșnițe, țânțari) cu substanțe fără miros.
* **Card 3 – Dezinfecție:** Iconiță Microb/Moleculă curată. Descriere axată pe sterilizare spații comerciale, birouri și rezidențial.

---

### Secțiunea 3: De ce DeratPro (Avantaje)

* **Layout:** Grid 4 coloane (sau 2x2 pe mobile) cu numere mari de impact (`01`, `02`, `03`, `04`):
1. **Intervenție Rapidă:** Echipa ajunge în maximum 2–4 ore la locație.
2. **Substanțe Avizate:** Soluții certificate de Ministerul Sănătății (sigure pentru copii și animale).
3. **Personal Autorizat:** Tehnicieni calificați cu echipamente de ultimă generație.
4. **Garanție pe Contract:** Re-intervenție gratuită dacă problema reapare în perioada garantată.



---

### Secțiunea 4: Cum Funcționează (Proces în 3 Pași)

* **Layout:** Timeline orizontal cu indicatori numerici circulari (`01`, `02`, `03`):
* **Pasul 01: Preiei Legătura** — Ne suni sau trimiți formularul. Stabilim urgența.
* **Pasul 02: Inspecție & Plan** — Evaluăm spațiul și aplicăm tratamentul personalizat.
* **Pasul 03: Spațiu Protejat** — Primești procesul verbal și garanția că ești în siguranță.



---

### Secțiunea 5: Contact & Validare

* **Layout:** Formular compact pe un card izolat (stânga) + Date de contact direct / Program / Certificări (dreapta).
* **Câmpuri Formular:**
* Nume complet
* Număr de telefon
* Tip serviciu (Dropdown: Deratizare, Dezinsecție, Dezinfecție, Pachet Complet DDD)
* Mesaj / Detalii spațiu


* **UX & Validare Frontend:**
* Validare în timp real pe numărul de telefon (10 cifre).
* La trimitere cu succes: Tranziție fluidă către un card de confirmare:
> *"Solicitarea ta a fost trimisă! Un tehnician te va contacta în cel mai scurt timp."*