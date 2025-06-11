# Changelog

## [Unreleased] - Technische Finalisierung & SEO

### Dark Mode
- **Fixed:** Die Dark-Mode-Logik wurde vollständig überarbeitet, um Inkonsistenzen und FOUC (Flash of Unstyled Content) zu beheben.
- **Added:** Eine zentrale, blockierende Skript-Logik im `<head>` sorgt nun für eine sofortige und korrekte Anwendung des Themes beim Laden der Seite.
- **Changed:** Die `ThemeToggle`-Komponente wurde vereinfacht und enthält nur noch die Logik zum Umschalten, nicht mehr zur Initialisierung.
- **Added:** Der gewählte Theme-Zustand wird nun zuverlässig im `localStorage` gespeichert und bei jedem Besuch korrekt ausgelesen.

### SEO-Optimierung
- **Added:** Spezifische und strategische `title`- und `description`-Metatags für alle Seiten (`/`, `/service/...`, `/about`, `/kontakt`).
- **Added:** `Open Graph`-Tags (`og:title`, `og:description`, `og:image`, `og:url`) wurden in das globale Layout integriert, um die Darstellung beim Teilen in sozialen Medien zu verbessern.
- **Added:** `Twitter`-spezifische Metatags (`twitter:card`, `twitter:title`, etc.) wurden hinzugefügt.
- **Added:** Ein `canonical`-Link-Tag wurde für jede Seite implementiert, um Duplicate Content zu vermeiden und die SEO-Struktur zu stärken.

### Verlinkungen
- **Fixed:** Fehlerhafte Navigationslinks im `Header` wurden korrigiert. Der "Services"-Link verweist nun auf eine spezifische Dienstleistung, und der "Kontakt"-Link auf die korrekte Seite.
- **Fixed:** Die Links im `Footer` wurden korrigiert, um auf die richtigen Service-Unterseiten zu verweisen.
- **Changed:** Die Navigationstexte im mobilen Menü wurden zur Konsistenz ins Deutsche übersetzt.
- **Changed:** Der CTA-Button im Header wurde von "Get Started" in "Projekt anfragen" umbenannt.
- **Fixed:** Falsche Platzhalter-Kontaktdaten im `Footer` wurden durch die korrekten, klickbaren Informationen ersetzt.

### Dokumentation
- **Added:** Eine neue `KRITIK.md`-Datei wurde erstellt, um konstruktives Feedback und weiterführende Verbesserungsvorschläge zu dokumentieren.
- **Added:** Dieses Changelog wurde neu erstellt, um alle Änderungen im Rahmen der technischen Finalisierung detailliert festzuhalten.
- **Changed:** Die `DOCUMENTATION.md` wird als Nächstes aktualisiert, um die neuen SEO- und Dark-Mode-Implementierungen widerzuspiegeln.

## [Unreleased]

### Added
- Cookie banner with accept/decline functionality
- DSGVO compliance improvements
- Updated footer design with four columns
- Added contact information in footer
- Simplified navigation structure
- Erweiterte Kontaktseite mit verbesserter UX
  * Platzhaltertexte für intuitive Formulareingaben
  * Zusätzliches Betreff-Feld
  * Feature-Icons in der Hero-Sektion
  * "Warum uns kontaktieren" Infobox
  * Verbesserte visuelle Hierarchie
- Dark Mode Optimierungen für Kontaktformular
- Erweiterte Formularvalidierung
- Detaillierte Dokumentation der Kontaktfunktionalität

### Changed
- Removed newsletter signup from footer
- Updated service links in footer
- Improved responsive layout
- Removed social media links temporarily
- Überarbeitetes Layout der Kontaktoptionen
- Verbesserte Platzhaltertexte für Formularfelder
- Optimierte mobile Darstellung
- Aktualisierte Styling-Klassen für bessere Konsistenz

### Fixed
- TypeScript errors in components
- Accessibility improvements in navigation
- Dark mode consistency
- Korrektur der DSGVO-Checkbox-Funktionalität
- Verbessertes Hover-Verhalten der Kontaktoptionen
- Optimierte Darstellung im Dark Mode

# Changelog – Juni 2025

## Neue Komponenten

### Hero Section
- Moderne SVG-Illustration hinzugefügt (Webdesign & Strategie)
- Responsive Layout: Illustration bei Mobile ausgeblendet
- Bestehender Text & CTA beibehalten

### Service Cards
- Neue weiße Card-Struktur implementiert
- Feature-Bullets im dunklen Design integriert
- Blaue Icons beibehalten
- Hover-Effekt: Anhebung + blauer Schatten
- Vollständig klickbare Cards mit Links zu Detail-Seiten

### Statistik-Sektion
- Animierte Zähler mit IntersectionObserver
- Realistische Werte:
  - "Ziel: 50+ glückliche Kunden"
  - "30+ geplante Projekte"
  - "5+ Jahre Erfahrung"
- Responsive Grid-Layout
- Optimierte Typografie

### Cookie-Banner
- DSGVO-konformer Hinweis
- Minimalistisches Design
- Lokale Speicherung der Entscheidung
- Dark Mode Support

## Neue Seiten

### Impressum (/impressum)
- Vollständige Angaben nach §5 TMG
- Kontaktdaten & Registereintragungen
- Haftungsausschlüsse
- Responsive Layout & Dark Mode

### Datenschutz (/datenschutz)
- DSGVO-konforme Datenschutzerklärung
- Cookie-Richtlinien
- Nutzerrechte & Datenverarbeitung
- Hosting-Informationen

### About-Seite überarbeitet
- Team auf 2 Personen reduziert (Max & Kürsat)
- Fokus auf Webagentur klargestellt
- Fremdthemen entfernt

## SEO-Optimierung

### Meta-Tags
- Optimierte Titles & Descriptions für alle Seiten
- OpenGraph Tags für Social Media Sharing
- Canonical URLs zur Vermeidung von Duplicate Content

### Beispiele
- Startseite: "Webagentur MexxMedia – Websites mit Wirkung"
- Service: "Leistungen – MexxMedia"
- Webdesign: "Webdesign für Unternehmen – MexxMedia"

## Interne Verlinkungen

### Footer
- Links zu Impressum & Datenschutz
- Strukturierte Navigation
- Kontaktinformationen

### Service-Seiten
- "← Zur Übersicht" Links
- Breadcrumb-Navigation
- Konsistente Verlinkungsstruktur

## Technische Verbesserungen

### Performance
- Optimierte SVG-Grafiken
- Lazy Loading für Bilder
- Effiziente Animationen

### Accessibility
- ARIA-Labels für interaktive Elemente
- Semantische HTML-Struktur
- Ausreichende Kontraste

### Dark Mode
- Konsistente Farbpalette
- Angepasste Schatten & Effekte
- Optimierte Lesbarkeit

## Kontaktseite & Startseiten-CTA
- Neue Kontaktseite mit DSGVO-konformem Formular erstellt
- WhatsApp, Instagram & E-Mail als direkte Kontaktoption integriert
- Kontakt-Section auf Startseite hinzugefügt
- Animierte Hintergründe und Hover-Effekte implementiert
- Dark Mode Support für alle Kontakt-Komponenten
- Formular-Validierung und DSGVO-Checkbox-Logik hinzugefügt 