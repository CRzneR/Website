# Mein Projekt

# Christoph Renz – Portfolio

Personal portfolio website of Christoph Renz, Webentwickler & Frontend Developer based in Germany.

🌐 **Live:** [christophrenz.de](https://www.christophrenz.de)

---

## Tech Stack

| Bereich     | Technologie                                                      |
| ----------- | ---------------------------------------------------------------- |
| Framework   | Next.js 14 (App Router)                                          |
| Sprache     | TypeScript                                                       |
| Styling     | Tailwind CSS                                                     |
| Animationen | GSAP + ScrollTrigger                                             |
| Fonts       | Cormorant SC, Encode Sans Expanded, Roc Grotesk, Panther, BStyle |
| Deployment  | Vercel                                                           |

---

## Projektstruktur

```
src/
├── app/
│   ├── datenschutz/       # Datenschutzerklärung
│   ├── impressum/         # Impressum
│   ├── globals.css
│   ├── layout.tsx         # Root Layout + Metadata + JSON-LD
│   ├── page.tsx           # Startseite
│   ├── sitemap.ts         # Automatische Sitemap
│   ├── robots.ts          # robots.txt
│   ├── manifest.ts        # PWA Manifest
│   ├── not-found.tsx      # 404 Seite
│   └── error.tsx          # Error Boundary
├── components/
│   ├── effects/           # Animationskomponenten (FadeIn, SplitText)
│   ├── Projects/          # Projektübersicht, Lifas, Vert
│   ├── Top/               # NavBar, HeroSection
│   ├── vorstellung/       # Introduction Desktop + Mobile
│   ├── UxProjects/        # UX Projekte
│   ├── CustomCursor.tsx   # Custom Cursor mit mix-blend-mode
│   ├── callToAction.tsx
│   ├── testimonials.tsx
│   └── analytics.tsx
└── fonts/                 # Lokale Schriftdateien
```

---

## Features

- **Custom Cursor** mit `mix-blend-mode: difference` und Größenänderung bei Buttons & Überschriften
- **GSAP Animationen** – Hero-Sequenz, ScrollTrigger Reveals, SplitText
- **Responsive** – separate Layouts für Mobile und Desktop
- **SEO optimiert** – Metadata API, JSON-LD (Person Schema), OpenGraph, Twitter Cards
- **Performance** – lokale Fonts mit `display: swap`, optimierte Bilder via `next/image`
- **Cookie Consent** – DSGVO-konformes Banner
- **Security Headers** – CSP, X-Frame-Options, Referrer-Policy via `next.config.ts`

---

## Projekte im Portfolio

- **FastFive** – Pokémon-Brettspiel als Web-App → [crzner.github.io/Fast5](https://crzner.github.io/Fast5/)
- **Rings** – CAD & 3D-Druck Showcase → [rings-nu.vercel.app](https://rings-nu.vercel.app)
- **For Champions** – Turnier-App → [champs-front.vercel.app](https://champs-front.vercel.app)
- **Moneta** – Haushaltsbuch App → [moneta-frontend.vercel.app](https://moneta-frontend.vercel.app)

---

## Kontakt

- 🌐 [christophrenz.de](https://www.christophrenz.de)
- 💼 [LinkedIn](https://www.linkedin.com/in/christoph-renz-806822388/)
- 🐙 [GitHub](https://github.com/crzner)
