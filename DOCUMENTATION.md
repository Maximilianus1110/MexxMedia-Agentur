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

## Kontaktfunktionalität

### Übersicht
Die Kontaktfunktionalität der MexxMedia Website besteht aus zwei Hauptkomponenten:
1. Eine dedizierte Kontaktseite (`/kontakt`)
2. Eine wiederverwendbare Kontakt-Komponente für andere Seiten

### Kontaktseite (`/kontakt`)

#### Struktur
Die Kontaktseite ist in mehrere Sektionen unterteilt:

1. **Hero-Sektion**
   - Hauptüberschrift mit Highlight-Effekt
   - Beschreibender Text
   - Feature-Icons:
     * Kostenlose Erstberatung
     * Schnelle Antwortzeiten
     * Individuelle Beratung
   - Gradient-Hintergrund mit animiertem Blur-Effekt

2. **Kontaktformular**
   - Einleitender Text mit 24h-Antwortversprechen
   - Formularfelder:
     * Name (Pflichtfeld)
     * E-Mail (Pflichtfeld)
     * Betreff
     * Nachricht/Projektbeschreibung
   - DSGVO-Checkbox mit Link zur Datenschutzerklärung
   - Submit-Button (deaktiviert bis zur DSGVO-Zustimmung)
   - Platzhaltertexte für intuitive Benutzererfahrung

3. **Direkte Kontaktoptionen**
   - E-Mail: info@mexxmedia.de
   - WhatsApp: +49 157 7215 0009
   - Instagram: @mexxmedia
   - Jede Option mit eigenem Icon und Hover-Effekten

4. **Zusätzliche Informationen**
   - "Warum uns kontaktieren" Box
   - Liste der Unternehmensvorteile
   - Visuelle Hervorhebung durch Icons

#### Technische Details

##### Formularvalidierung
```typescript
// Aktivierung des Submit-Buttons bei DSGVO-Zustimmung
const privacyCheckbox = document.getElementById('privacy') as HTMLInputElement;
const submitButton = document.getElementById('submitButton') as HTMLButtonElement;

privacyCheckbox?.addEventListener('change', () => {
  if (submitButton) {
    submitButton.disabled = !privacyCheckbox.checked;
  }
});
```

##### Styling-Klassen
- Formularfelder:
  ```css
  class="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:border-primary-600 dark:focus:border-primary-400 focus:ring-2 focus:ring-primary-600/20 dark:focus:ring-primary-400/20 outline-none transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
  ```
- Kontakt-Optionen:
  ```css
  class="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-primary-600 dark:hover:border-primary-400 transition-colors group"
  ```

### Kontakt-Komponente (`Contact.astro`)

#### Props
```typescript
interface Props {
  title?: string;          // Überschrift (Standard: "Bereit, gemeinsam loszulegen?")
  description?: string;    // Beschreibungstext
  ctaText?: string;       // Button-Text (Standard: "Jetzt Kontakt aufnehmen")
  ctaHref?: string;       // Button-Link (Standard: "/kontakt")
}
```

#### Verwendung
```astro
<Contact 
  title="Custom Title"
  description="Custom Description"
  ctaText="Custom Button Text"
  ctaHref="/custom-path"
/>
```

#### Features
- Responsive Grid-Layout
- Animierte Hintergrund-Gradienten
- Interaktive Kontaktoptionen
- AOS (Animate on Scroll) Animationen
- Dark Mode Unterstützung

### Barrierefreiheit
- Semantische HTML-Struktur
- ARIA-Labels für Icons
- Ausreichende Farbkontraste
- Fokus-Indikatoren für Tastaturnavigation
- Responsive Text-Größen

### Dark Mode
- Automatische Anpassung aller Farben
- Konsistente Kontraste
- Weiche Übergänge durch Transitions

### Performance
- Optimierte SVG-Icons
- Lazy-Loading für Bilder
- Minimale JavaScript-Nutzung
- Effiziente CSS-Klassen durch Tailwind

### Wartung und Updates
1. **Kontaktdaten ändern**
   - Direkte Änderung in der Komponente
   - Zentrale Verwaltung für konsistente Darstellung

2. **Styling anpassen**
   - Tailwind-Klassen in den entsprechenden Komponenten
   - Globale Farben in `tailwind.config.mjs`

3. **Formularverarbeitung hinzufügen**
   ```javascript
   const contactForm = document.getElementById('contactForm');
   contactForm?.addEventListener('submit', (e) => {
     e.preventDefault();
     // Hier Formularverarbeitung implementieren
   });
   ```

### Best Practices
1. **Formular**
   - Validierung vor Absenden
   - Klare Fehlermeldungen
   - Persistenz bei Fehleingaben
   - DSGVO-Konformität

2. **UX/UI**
   - Klare visuelle Hierarchie
   - Intuitive Eingabefelder
   - Responsive Design
   - Konsistente Animationen

3. **Sicherheit**
   - CSRF-Schutz
   - Input-Validierung
   - Sichere Datenübertragung
   - Spam-Schutz

### Zukünftige Erweiterungen
- [ ] Formular-Backend-Integration
- [ ] Automatische E-Mail-Benachrichtigungen
- [ ] Spam-Schutz durch reCAPTCHA
- [ ] Dateiupload-Funktion
- [ ] Live-Chat Integration
- [ ] Kontaktformular-Analytics 

## Dark Mode

### Implementierung
Der Dark Mode wird durch eine Kombination aus einem Inline-Skript im `<head>` der `Layout.astro` und einer Umschalt-Komponente (`ThemeToggle.astro`) gesteuert.

#### Initialisierung (FOUC-Prävention)
Das Skript prüft drei Dinge in dieser Reihenfolge:
1.  Befindet sich ein `theme`-Wert (`'light'` or `'dark'`) in `localStorage`?
2.  Falls nicht, bevorzugt der Benutzer ein dunkles Farbschema auf Systemebene (`prefers-color-scheme: dark`)?
3.  Falls beides nicht zutrifft, wird standardmäßig `'light'` verwendet.

Dieses Skript wird `is:inline` ausgeführt, um jegliches "Flackern" (Flash of Unstyled Content - FOUC) zu verhindern und sicherzustellen, dass das korrekte Theme sofort beim Rendern der Seite angewendet wird.

### Theme-Umschalter (`ThemeToggle.astro`)

Die Komponente `src/components/ThemeToggle.astro` enthält den Button, mit dem der Benutzer manuell zwischen Light- und Dark-Mode wechseln kann. Das zugehörige Skript ist so konzipiert, dass es auch mit Astro's View Transitions funktioniert. Es nutzt den `astro:page-load`-Event, um sicherzustellen, dass der Klick-Listener nach jeder clientseitigen Navigation neu an den Button gebunden wird.

### Cookie-Banner (`CookieBanner.astro`)

Die Website verfügt über einen Cookie-Banner, um die Zustimmung des Benutzers einzuholen. Die Logik ist in `src/components/CookieBanner.astro` gekapselt.

- **Anzeigelogik:** Der Banner wird nur angezeigt, wenn im `localStorage` kein `cookieConsent`-Eintrag gefunden wird.
- **Zustimmung:** Klickt der Benutzer auf "Akzeptieren" oder "Ablehnen", wird die Entscheidung im `localStorage` gespeichert und der Banner wird dauerhaft ausgeblendet.
- **View Transitions:** Ähnlich wie der Theme-Umschalter verwendet das Skript des Banners den `astro:page-load`-Event, um seine Funktionalität über alle Seitenwechsel hinweg beizubehalten.

## SEO-Strategie

### Meta-Tags
Jede Seite erhält individuelle Metadaten für Titel und Beschreibung. Diese werden in der jeweiligen Seitendatei (z.B. `index.astro`) definiert und an die `Layout.astro`-Komponente übergeben.

**Beispiel (`index.astro`):**
```astro
---
const title = "Webagentur MexxMedia – Webseiten, die wirken";
const description = "Moderne Webseiten & Online-Lösungen für den Mittelstand.";
---
<Layout title={title} description={description}>
  ...
</Layout>
```

### Globale SEO-Tags (`Layout.astro`)
Die `Layout.astro`-Komponente generiert automatisch weitere wichtige SEO-Tags für jede Seite:

- **Canonical URL:** Verhindert Duplicate Content.
  ```html
  <link rel="canonical" href={Astro.url.href} />
  ```
- **Open Graph (für Facebook, LinkedIn etc.):**
  ```html
  <meta property="og:type" content="website" />
  <meta property="og:url" content={Astro.url.href} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={new URL('og-image.png', Astro.url).href} />
  ```
- **Twitter Card:**
  ```html
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={Astro.url.href} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={new URL('og-image.png', Astro.url).href} />
  ```
> **Hinweis:** Das Bild `og-image.png` muss im `public/` Verzeichnis existieren.

### Heading-Struktur
Es wurde darauf geachtet, eine logische und hierarchische Heading-Struktur (`<h1>`, `<h2>`, etc.) auf allen Seiten einzuhalten, um die semantische Struktur für Suchmaschinen zu verbessern. Es gibt pro Seite nur eine `<h1>`.

## Verlinkungen
Alle internen Links in `Header`, `Footer` und CTA-Buttons wurden überprüft und korrigiert, um eine konsistente und fehlerfreie Navigation zu gewährleisten.

- **Services:** Verweisen nun korrekt auf die Unterseiten (z.B. `/service/webdesign`).
- **Kontakt:** Alle Kontakt-Links führen zur zentralen Kontaktseite `/kontakt`.
- **Rechtliches:** Links zu Impressum und Datenschutz sind korrekt.

Die Kontaktdaten im Footer wurden ebenfalls aktualisiert und sind als `tel:` und `mailto:` Links klickbar. 