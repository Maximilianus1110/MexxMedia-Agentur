# MexxMedia Webseite - Technische Dokumentation

Diese Dokumentation beschreibt die technische Umsetzung, Architektur und die Entwicklungsprozesse der MexxMedia-Webseite.

## 1. Projektübersicht

MexxMedia ist eine moderne Webseite für eine Medienagentur, entwickelt mit Astro und Tailwind CSS. Die Seite ist auf Performance, Barrierefreiheit, SEO und eine exzellente User Experience ausgelegt.

## 2. Technologie-Stack

- **Framework**: Astro (v4)
- **Styling**: Tailwind CSS
- **Sprache**: TypeScript
- **Animationen**: AOS (Animate on Scroll)
- **Icons**: Heroicons
- **Schriften**: Inter & Playfair Display
- **Deployment**: Vercel

## 3. Seitenstruktur

Die Webseite ist in die folgenden Hauptseiten und Routen unterteilt:

### 3.1 Hauptseiten
- **`/(index.astro)`**: Die Startseite mit einer Übersicht der Agentur, Dienstleistungen und Kundenstimmen.
- **`/service(service.astro)`**: Eine Übersichtsseite, die alle angebotenen Dienstleistungen vorstellt.
- **`/about(about.astro)`**: Vorstellung des Teams, der Unternehmensgeschichte und der Werte.
- **`/kontakt(kontakt.astro)`**: Kontaktseite mit Formular und weiteren Kontaktmöglichkeiten.

### 3.2 Service-Detailseiten (`/service/*`)
- **`/service/webdesign`**: Detaillierte Beschreibung des Webdesign-Angebots.
- **`/service/seo`**: Detaillierte Beschreibung des SEO-Angebots.
- **`/service/hosting`**: Detaillierte Beschreibung des Hosting-Angebots.

Jede Service-Seite enthält eine detaillierte Leistungsbeschreibung, eine Darstellung des Prozesses, Preisinformationen und relevante Projektbeispiele.

### 3.3 Rechtliche Seiten
- **`/impressum.astro`**: Gesetzlich vorgeschriebenes Impressum.
- **`/datenschutz.astro`**: Datenschutzerklärung gemäß DSGVO.

## 4. Komponenten-Architektur

Das Projekt nutzt eine komponentenbasierte Architektur. Die Komponenten sind in `src/components/` und `src/layouts/` zu finden.

### 4.1 Layout-Komponenten
- **`Layout.astro`**: Das Basis-Layout, das auf allen Seiten verwendet wird. Es enthält den `<head>`-Bereich mit globalen Meta-Tags, Schriftarten, globalen Stylesheets und Skripten.
- **`Header.astro`**: Die Hauptnavigation der Webseite. Enthält das Logo, die Navigationslinks und den Dark-Mode-Schalter (`ThemeToggle`).
- **`Footer.astro`**: Die Fußzeile mit einem 4-Spalten-Layout für weiterführende Links, Kontaktinformationen und Social-Media-Profile.

### 4.2 UI-Komponenten (`src/components/`)
- **`ThemeToggle.astro`**: Schalter zur Aktivierung des Dark/Light-Modes.
- **`CookieBanner.astro`**: DSGVO-konformer Cookie-Banner zur Einholung der Zustimmung des Nutzers.
- **`ProblemSolution.astro`**: Eine Sektion zur Darstellung von Problemstellungen und deren Lösungen.
- **`Contact.astro`**: Eine wiederverwendbare Kontakt-Sektion, die auf mehreren Seiten eingebunden werden kann.
- **`About.astro`**: Komponente für die "Über Uns"-Sektion.
- **`Hero.astro`**: Die Hero-Sektion für die Startseite.
- **`Services.astro`**: Eine Sektion zur Auflistung der Dienstleistungen.
- **`ServiceCard.astro`**: Eine Karte zur Darstellung einer einzelnen Dienstleistung.
- **`Stats.astro`**: Animierte Statistiken zur visuellen Darstellung von Kennzahlen.
- **`ProcessTimeline.astro`**: Eine Zeitleiste zur Darstellung von Arbeitsprozessen.
- **`Pricing.astro`**: Eine Komponente zur Darstellung von Preisplänen.
- **`SectionSeparator.astro`**: Ein visueller Trenner für Sektionen.
- **`ParticlesEffect.astro`**: Komponente für einen Partikel-Effekt im Hintergrund.

## 5. Styling & Design System

### 5.1 Farbpalette
- **Primär**: `#A48155` (Warmes Braun)
- **Sekundär**: `#8B6B47` (Tiefes Braun)
- **Akzent**: `#F4E8D9` (Warmes Beige)
- **Dark Mode Highlight**: `#C4A47D` (Gold)
- **Dark Mode Hintergrund**: `#0A0A0B`

### 5.2 Typografie
- **Überschriften**: 'Playfair Display', eine elegante Serifenschrift.
- **Fließtext**: 'Inter', eine moderne und gut lesbare Sans-Serif-Schrift.
- Responsive Schriftgrößen sind durch Tailwind CSS-Klassen implementiert.

### 5.3 Animationen
- **AOS (Animate on Scroll)**: Wird für das Einblenden von Elementen beim Scrollen verwendet.
- **CSS Transitions**: Für sanfte Hover-Effekte und Zustandsänderungen.
- **Custom Keyframes**: Für spezielle, aufmerksamkeitsstarke Animationen.

## 6. SEO & Performance

### 6.1 Meta-Tag-Management
- Dynamische Seitentitel und Meta-Beschreibungen werden über das `Layout.astro` gesteuert.
- OpenGraph-Tags für die Vorschau in sozialen Netzwerken sind implementiert.
- Canonical URLs werden gesetzt, um doppelten Inhalt zu vermeiden.

### 6.2 Performance-Optimierungen
- **Bildoptimierung**: Astro's eingebaute Bildoptimierung wird genutzt.
- **Code-Splitting**: Automatisches Code-Splitting pro Seite.
- **Lazy Loading**: Bilder und Iframe-Inhalte werden standardmäßig per Lazy Loading geladen.
- **Preloading**: Kritische Assets können bei Bedarf vorab geladen werden.

## 7. Barrierefreiheit (Accessibility)

- **ARIA-Labels**: Wichtige interaktive Elemente sind mit ARIA-Labels versehen.
- **Semantisches HTML**: Korrekte Verwendung von HTML5-Tags zur Strukturierung der Inhalte.
- **Farbkontraste**: Die Farbpalette ist auf ausreichende Kontraste geprüft (WCAG AA).
- **Tastaturnavigation**: Alle interaktiven Elemente sind per Tastatur erreichbar und bedienbar.
- **Screen-Reader-Freundlichkeit**: Die Seite ist für die Nutzung mit Screen Readern optimiert.

## 8. Cookie-Management

- Implementierung eines Opt-in/Opt-out-Systems für Cookies über den `CookieBanner.astro`.
- Die Benutzereinwilligung wird im `localStorage` des Browsers gespeichert.
- Die Umsetzung ist DSGVO-konform.

## 9. Wartung & Content-Management

### 9.1 Inhaltsaktualisierungen
- **Blog/News**: Können über Markdown-Dateien im `src/pages/blog/` Verzeichnis hinzugefügt werden (Struktur muss ggf. erstellt werden).
- **Service-Beschreibungen**: Werden direkt in den jeweiligen `.astro`-Dateien in `src/pages/service/` gepflegt.
- **Team-Informationen**: Werden in der `About.astro`-Komponente oder einer zentralen Datendatei (z.B. in `src/data/`) verwaltet.

### 9.2 Technische Wartung
- **Abhängigkeiten**: Regelmäßige Updates der npm-Pakete mit `npm update`.
- **Sicherheit**: Beobachtung von Sicherheitsschwachstellen in den Abhängigkeiten.
- **Performance-Monitoring**: Regelmäßige Überprüfung der Ladezeiten und Core Web Vitals.

## 10. Entwicklungsrichtlinien

### 10.1 Code-Standards
- **TypeScript**: Verwendung des `strict`-Modus in `tsconfig.json`.
- **Linting**: ESLint ist für die Code-Qualität konfiguriert.
- **Formatierung**: Prettier wird für eine einheitliche Code-Formatierung verwendet.

### 10.2 Git-Workflow
- **Branching-Modell**: Entwicklung neuer Features in separaten `feature/`-Branches.
- **Pull Requests**: Code-Änderungen werden über Pull Requests in den `main`-Branch gemerged. Code-Reviews sind erwünscht.
- **Commit-Nachrichten**: Es wird die Verwendung von Conventional Commits empfohlen.

## 11. Deployment

- **Hosting**: Die Webseite wird auf Vercel gehostet.
- **CI/CD**: Jeder Push auf den `main`-Branch löst ein automatisches Deployment aus.
- **Preview-Deployments**: Für jeden Pull Request wird eine eigene Preview-Umgebung erstellt.
- **SSL/TLS**: Die Webseite ist durch ein von Vercel bereitgestelltes SSL-Zertifikat gesichert.
- **CDN**: Vercels globales CDN sorgt für schnelle Ladezeiten weltweit.

## 12. Terminbuchungssystem (Geplant)

Ein neues Feature zur Online-Terminbuchung ist in Planung und wird die folgende Funktionalität umfassen:

### 12.1 Frontend
- Eine dedizierte Seite `/termin-buchen` wird erstellt.
- Ein Kalender-Interface ermöglicht die Auswahl von verfügbaren Daten und Uhrzeiten.
- Ein Formular zur Eingabe der Kontaktdaten (Name, E-Mail, Anliegen) des Kunden.
- Das Design wird sich nahtlos in das bestehende Design der Webseite einfügen.

### 12.2 Backend & Integration
- **Google Kalender**: Gebuchte Termine werden automatisch in einem definierten Google Kalender eingetragen. Hierfür wird die Google Calendar API verwendet.
- **Authentifizierung**: Die Verbindung zur Google Calendar API wird serverseitig über sichere API-Keys und ggf. OAuth2 abgewickelt (z.B. über Astro API-Routen).

### 12.3 Benachrichtigungen
- **Bestätigungsmail an den Kunden**: Nach erfolgreicher Buchung erhält der Kunde eine automatische E-Mail-Bestätigung mit den Termindetails.
- **Benachrichtigung an MexxMedia**: Eine E-Mail mit den Termindetails und den Kundendaten wird an `info@mexxmedia.de` gesendet. Diese E-Mail enthält auch einen `.ics`-Kalendereintrag.

### 12.4 Zusätzliche geplante Features
- **Automatische Erinnerungen**: Kunden erhalten 24 Stunden vor dem Termin eine automatische Erinnerungs-E-Mail.
- **Stornierungs-Link**: Die Bestätigungs-E-Mail enthält einen Link, über den der Kunde den Termin einfach stornieren kann.
- **Pufferzeiten**: Automatische Blockierung von Zeitfenstern vor und nach einem gebuchten Termin, um Überbuchungen zu vermeiden. 