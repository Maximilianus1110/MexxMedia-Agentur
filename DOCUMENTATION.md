# MexxMedia Website Dokumentation

## 1. Projektübersicht

MexxMedia ist eine moderne Webagentur-Website, entwickelt mit Astro und Tailwind CSS. Die Website zeichnet sich durch ihre Performance, Barrierefreiheit und SEO-Optimierung aus.

## 2. Technologie-Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Sprache**: TypeScript
- **Animationen**: AOS (Animate on Scroll)
- **Icons**: Heroicons
- **Schriften**: Inter & Playfair Display

## 3. Seitenstruktur

### 3.1 Startseite (`/index.astro`)
- Hero-Section mit animiertem Hintergrund
- Service-Karten (klickbar, mit Hover-Effekten)
- Animierte Statistik-Section
- Problem-Lösung-Darstellung
- Testimonials
- Kontaktformular

### 3.2 Service-Seiten
- `/service/webdesign`
- `/service/seo`
- `/service/hosting`
Jede Service-Seite enthält:
- Detaillierte Leistungsbeschreibung
- Prozess-Darstellung
- Preisgestaltung
- Projektbeispiele

### 3.3 Über uns (`/about.astro`)
- Team-Vorstellung
- Unternehmensgeschichte
- Wertedarstellung
- Tech-Stack-Übersicht
- Call-to-Action

### 3.4 Rechtliches
- `/impressum.astro`
- `/datenschutz.astro`

## 4. Komponenten

### 4.1 Layout-Komponenten
- `Layout.astro`: Basis-Layout mit Meta-Tags und globalen Styles
- `Header.astro`: Navigation mit Dark Mode Toggle
- `Footer.astro`: 4-Spalten-Layout mit Links und Kontakt

### 4.2 Wiederverwendbare Komponenten
- `ServiceCard.astro`: Klickbare Service-Karten mit Hover-Effekten
- `CookieBanner.astro`: DSGVO-konformer Cookie-Banner
- `Stats.astro`: Animierte Statistik-Komponente

## 5. Styling-System

### 5.1 Farben
- Primary: Blau (#2563eb)
- Neutral: Graustufen
- Dark Mode optimiert

### 5.2 Typografie
- Überschriften: Playfair Display
- Fließtext: Inter
- Responsive Größen

### 5.3 Animationen
- AOS für Scroll-Animationen
- CSS Transitions für Hover-Effekte
- Custom Keyframes für spezielle Effekte

## 6. SEO & Performance

### 6.1 Meta-Tags
- Dynamische Titel und Beschreibungen
- OpenGraph-Tags für Social Media
- Canonical URLs

### 6.2 Performance-Optimierungen
- Bildoptimierung
- Code-Splitting
- Lazy Loading
- Preloading kritischer Assets

## 7. Barrierefreiheit

- ARIA-Labels
- Semantisches HTML
- Ausreichende Kontraste
- Keyboard Navigation
- Screen Reader optimiert

## 8. Cookie-Management

- Opt-in/Opt-out System
- LocalStorage basierte Speicherung
- DSGVO-konforme Implementierung

## 9. Wartung & Updates

### 9.1 Content-Updates
- Blog-Posts via Markdown
- Service-Beschreibungen in JSON
- Team-Informationen zentral verwaltet

### 9.2 Technische Updates
- Dependency Management
- Security Patches
- Performance Monitoring

## 10. Entwicklungsrichtlinien

### 10.1 Code-Standards
- TypeScript strict mode
- ESLint Konfiguration
- Prettier Formatierung

### 10.2 Git Workflow
- Feature Branches
- Pull Request Reviews
- Semantic Versioning

## 11. Deployment

- Vercel Hosting
- Automatische Previews
- SSL/TLS Verschlüsselung
- CDN Integration

## About Page

Die About-Seite präsentiert unser Team und unsere Werte:

- **Team-Sektion**: 
  - 2-Spalten-Grid mit Max (Strategie & Entwicklung) und Kürsat (Design & Kundenkontakt)
  - Hover-Effekte zeigen zusätzliche Informationen wie Lieblings-Tools
  - Integrierte Social Media Links
  - Responsive Design für alle Bildschirmgrößen

- **Story**: 
  - Klarer Fokus auf Webdesign & Entwicklung
  - Authentische Darstellung der Kompetenzen
  - Zielgruppe: Kleine und mittelständische Unternehmen

- **Tech-Stack**:
  - Moderne Webtechnologien: Astro, TailwindCSS, TypeScript
  - Hosting & Backend: Vercel, Supabase
  - Interaktive Icons mit Hover-Effekten

- **Werte-Sektion**:
  - Zukunftsdenken
  - Qualität vor Quantität
  - Ehrliche Kommunikation

Die Seite nutzt durchgehend Animationen (AOS - Animate on Scroll) und ist vollständig für Dark Mode optimiert. 