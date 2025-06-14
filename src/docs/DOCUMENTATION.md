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
- **`ProblemSolution.astro`**: Eine interaktive Sektion zur Darstellung von Problemstellungen und deren Lösungen.
  - **Funktionalität**: Die Komponente ist ein Karussell, das automatisch durch verschiedene "Probleme" und deren "Lösungen" rotiert. Benutzer können auch manuell durch die Tabs navigieren.
  - **Technologie**: Die Interaktivität wird vollständig mit [AlpineJS](https://alpinejs.dev/) umgesetzt.
  - **Datenübergabe**: Die Daten für die Probleme (Titel, Beschreibung, etc.) werden im Astro-Frontmatter definiert und als JSON-Objekt an die Alpine-Komponente übergeben. Um typische Fehler bei der Übergabe von serverseitigen Daten an `x-data` zu vermeiden, wird das `x-data`-Attribut als JavaScript-Template-Literal (`x-data={`...`}`) definiert. Dies ermöglicht die direkte und syntaktisch korrekte Einbettung des JSON-Objekts in den Initialisierungs-Code von AlpineJS.
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

### 4.3 Interaktive Sektionen

#### 4.3.1 Beispiel-Galerie (`/service/webdesign.astro`)
Die Beispiel-Galerie in der Webdesign-Sektion verwendet einen modernen Scroll-basierten Ansatz mit GSAP ScrollTrigger. Die Besonderheit liegt in der realistischen Darstellung von Website-Layouts:

1. **Layout & Struktur**
   - 70vh Höhe pro Karte für optimale Sichtbarkeit
   - 15vh Top-Offset für besseren Kontext
   - Maximale Breite von 1200px und scale-90 für realistisches Web-Layout
   - Echter Website-Aufbau mit Header, Navigation und Hero-Bereich

2. **Komponenten**
   - Branchen-spezifische Navigation und Kontakt-Elemente
   - Realistische Header-Struktur mit Logo und Menü
   - Responsive Grid-Layouts für Content
   - Authentische Web-Typografie und Abstände

3. **Technische Umsetzung**
   - GSAP ScrollTrigger für smooth Scroll-Animationen
   - TypeScript Interfaces für verschiedene Website-Typen
   - Sticky Positioning mit vertikalem Offset
   - Optimierte Performance durch CSS-Transforms

4. **Vorteile des Ansatzes**
   - Realistischere Darstellung durch echte Website-Strukturen
   - Bessere Zugänglichkeit durch semantisches HTML
   - Echtzeit-Anpassung an Dark/Light Mode
   - Demonstriert Web-Design-Expertise direkt im Code

5. **Wartung & Erweiterung**
   - Modulare Komponenten-Struktur
   - Typsichere Datenstrukturen
   - Einfache Anpassung von Styles und Content
   - Optimierte Performance durch Code statt Bilder

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

### 6.3 Erweiterte SEO-Maßnahmen
- **`sitemap.xml`**: Eine Sitemap wird automatisch durch die `@astrojs/sitemap`-Integration generiert. Sie enthält alle Haupt- und Service-Seiten und hilft Suchmaschinen bei der Indexierung.
- **`robots.txt`**: Eine `robots.txt`-Datei im `/public`-Verzeichnis gibt Crawlern die Anweisung, die gesamte Seite zu indexieren und verweist auf den Speicherort der Sitemap.
- **Strukturierte Daten (JSON-LD)**: Das `Layout.astro` generiert dynamisch strukturierte Daten (Schema.org) für jede Seite. Dies verbessert die Darstellung in den Suchergebnissen (Rich Snippets). Folgende Typen werden verwendet: `Organization` (global), `LocalBusiness` (Startseite), `Service` (Dienstleistungsseiten) und `ContactPage` (Kontaktseite).
- **Social Previews**: Das Layout enthält zudem `og:*`- und `twitter:*`-Meta-Tags, um eine optimale Vorschau beim Teilen von Links auf sozialen Netzwerken zu gewährleisten.

## 7. Barrierefreiheit (Accessibility)

- **ARIA-Labels**: Wichtige interaktive Elemente sind mit ARIA-Labels versehen.
- **Semantisches HTML**: Korrekte Verwendung von HTML5-Tags zur Strukturierung der Inhalte.
- **Farbkontraste**: Die Farbpalette ist auf ausreichende Kontraste geprüft (WCAG AA).
- **Tastaturnavigation**: Alle interaktiven Elemente sind per Tastatur erreichbar und bedienbar.
- **Screen-Reader-Freundlichkeit**: Die Seite ist für die Nutzung mit Screen Readern optimiert.

## 8. Dark/Light Mode

Die Webseite verfügt über einen persistenten Dark/Light-Mode, der auch bei clientseitiger Navigation über Astro View Transitions erhalten bleibt.

### 8.1 Initialisierung (FOUC-Prävention)

Um ein Flackern des falschen Themes beim ersten Laden (FOUC) zu verhindern, ist ein blockierendes Inline-Skript im `<head>` der `Layout.astro` platziert. Dieses Skript prüft in der folgenden Reihenfolge:
1.  Ob ein Theme (`'light'` oder `'dark'`) im `localStorage` des Benutzers gespeichert ist.
2.  Falls nicht, ob der Benutzer auf Systemebene ein dunkles Farbschema bevorzugt (`prefers-color-scheme: dark`).
3.  Standardmäßig wird 'light' verwendet.

Das Skript fügt die Klasse `dark` direkt zum `<html>`-Element hinzu oder entfernt sie, noch bevor die Seite vollständig gerendert wird.

### 8.2 Zustandspersistenz bei Navigation

Der `ThemeToggle.astro`-Komponentenskript stellt sicher, dass der gewählte Zustand bei Seitenwechseln erhalten bleibt.
- **`astro:page-load` Event**: Das Skript nutzt den `astro:page-load`-Event, der nach jeder, auch clientseitiger, Navigation ausgelöst wird.
- **`applyTheme()` Funktion**: Bei jedem Event-Trigger wird eine Funktion ausgeführt, die den Theme-Wert aus dem `localStorage` erneut ausliest und die `dark`-Klasse auf dem `<html>`-Element entsprechend setzt.
- **Event-Listener**: Gleichzeitig wird der `click`-Event-Listener für den Toggle-Button neu registriert, um die Funktionalität sicherzustellen.

Diese Kombination aus einem initialen, blockierenden Skript und der Re-Hydrierung des Zustands bei jedem Seitenwechsel sorgt für ein nahtloses und konsistentes Benutzererlebnis.

## 9. Cookie-Management

- Implementierung eines Opt-in/Opt-out-Systems für Cookies über den `CookieBanner.astro`.
- Die Benutzereinwilligung wird im `localStorage` des Browsers gespeichert.
- Die Umsetzung ist DSGVO-konform.

## 10. Wartung & Content-Management

### 10.1 Zentrale Datenverwaltung
- **`src/data/site.ts`**: Globale und wiederkehrende Informationen (Firmenname, Kontaktdaten, Social-Media-Links, Adresse) sind in dieser zentralen Datei gespeichert. Komponenten wie der `Footer` und die `Kontaktseite` importieren ihre Daten von hier. Dies vereinfacht die Wartung und stellt Konsistenz über die gesamte Webseite sicher.

### 10.2 Inhaltsaktualisierungen
- **Blog/News**: Können über Markdown-Dateien im `src/pages/blog/` Verzeichnis hinzugefügt werden (Struktur muss ggf. erstellt werden).
- **Service-Beschreibungen**: Werden direkt in den jeweiligen `.astro`-Dateien in `src/pages/service/` gepflegt.
- **Team-Informationen**: Werden in der `About.astro`-Komponente oder einer zentralen Datendatei (z.B. in `src/data/`) verwaltet.

### 10.3 Technische Wartung
- **Abhängigkeiten**: Regelmäßige Updates der npm-Pakete mit `npm update`.
- **Sicherheit**: Beobachtung von Sicherheitsschwachstellen in den Abhängigkeiten.
- **Performance-Monitoring**: Regelmäßige Überprüfung der Ladezeiten und Core Web Vitals.

## 11. Entwicklungsrichtlinien

### 11.1 Code-Standards
- **TypeScript**: Verwendung des `strict`-Modus in `tsconfig.json`.
- **Linting**: ESLint ist für die Code-Qualität konfiguriert.
- **Formatierung**: Prettier wird für eine einheitliche Code-Formatierung verwendet.

### 11.2 Git-Workflow
- **Branching-Modell**: Entwicklung neuer Features in separaten `feature/`-Branches.
- **Pull Requests**: Code-Änderungen werden über Pull Requests in den `main`-Branch gemerged. Code-Reviews sind erwünscht.
- **Commit-Nachrichten**: Es wird die Verwendung von Conventional Commits empfohlen.

## 12. Deployment

- **Hosting**: Die Webseite wird auf Vercel gehostet.
- **CI/CD**: Jeder Push auf den `main`-Branch löst ein automatisches Deployment aus.
- **Preview-Deployments**: Für jeden Pull Request wird eine eigene Preview-Umgebung erstellt.
- **SSL/TLS**: Die Webseite ist durch ein von Vercel bereitgestelltes SSL-Zertifikat gesichert.
- **CDN**: Vercels globales CDN sorgt für schnelle Ladezeiten weltweit.

## 13. Terminbuchungssystem (Geplant)

Ein neues Feature zur Online-Terminbuchung ist in Planung und wird die folgende Funktionalität umfassen:

### 13.1 Frontend
- Eine dedizierte Seite `/termin-buchen` wird erstellt.
- Ein Kalender-Interface ermöglicht die Auswahl von verfügbaren Daten und Uhrzeiten.
- Ein Formular zur Eingabe der Kontaktdaten (Name, E-Mail, Anliegen) des Kunden.
- Das Design wird sich nahtlos in das bestehende Design der Webseite einfügen.

### 13.2 Backend & Integration
- **Google Kalender**: Gebuchte Termine werden automatisch in einem definierten Google Kalender eingetragen. Hierfür wird die Google Calendar API verwendet.
- **Authentifizierung**: Die Verbindung zur Google Calendar API wird serverseitig über sichere API-Keys und ggf. OAuth2 abgewickelt (z.B. über Astro API-Routen).

### 13.3 Benachrichtigungen
- **Bestätigungsmail an den Kunden**: Nach erfolgreicher Buchung erhält der Kunde eine automatische E-Mail-Bestätigung mit den Termindetails.
- **Benachrichtigung an MexxMedia**: Eine E-Mail mit den Termindetails und den Kundendaten wird an `info@mexxmedia.de` gesendet. Diese E-Mail enthält auch einen `.ics`-Kalendereintrag.

### 13.4 Zusätzliche geplante Features
- **Automatische Erinnerungen**: Kunden erhalten 24 Stunden vor dem Termin eine automatische Erinnerungs-E-Mail.
- **Stornierungs-Link**: Die Bestätigungs-E-Mail enthält einen Link, über den der Kunde den Termin einfach stornieren kann.
- **Pufferzeiten**: Automatische Blockierung von Zeitfenstern vor und nach einem gebuchten Termin, um Überbuchungen zu vermeiden. 