# Changelog

Alle nennenswerten Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/) und dieses Projekt hält sich an [Semantic Versioning](https://semver.org/spec/v2.0.html).

## [Unreleased]

### Geplant
- **Terminbuchungssystem**: Implementierung eines Tools zur Online-Terminbuchung mit Google Kalender-Integration und E-Mail-Benachrichtigungen.

## [2.1.0] - 2024-07-29

### Added
- **Detaillierte Dokumentation**:
  - `README.md` wurde vollständig überarbeitet, bereinigt und auf Deutsch verfasst.
  - `DOCUMENTATION.md` wurde umfassend aktualisiert, um die aktuelle Projektarchitektur, Komponenten, das Design-System und geplante Features widerzuspiegeln.
  - `CHANGELOG.md` (diese Datei) wurde neu strukturiert und bereinigt, um einem konsistenten Format zu folgen.
  - `SEO_STRATEGIE.md` und `KRITIK.md` werden als Nächstes überprüft und aktualisiert.
- **Neue Dokumentationsstruktur**:
  - Alle Markdown-Dokumentationsdateien wurden in das Verzeichnis `src/docs/` verschoben.
  - Ein Pfad-Alias `@/` wurde in `tsconfig.json` für das `src`-Verzeichnis konfiguriert.

## [2.0.0] - 2024-07-28

### Added
- **SEO-Optimierung**: Umfassende Implementierung von SEO-Best-Practices.
  - Seitenspezifische und strategische `<title>`- und `<meta name="description">`-Tags für alle Seiten.
  - `Open Graph`-Tags für die verbesserte Darstellung in sozialen Medien.
  - `Twitter`-spezifische Meta-Tags.
  - `canonical`-Link-Tag zur Vermeidung von Duplicate Content.
- **Dark Mode**: Vollständige Dark-Mode-Unterstützung für die gesamte Webseite.
- **Cookie-Banner**: DSGVO-konformer Cookie-Banner mit "Akzeptieren"- und "Ablehnen"-Funktion.
- **Erweiterte Kontaktseite**: Die Kontaktseite wurde mit zusätzlichen Informationen, direkten Kontaktoptionen und einem verbesserten Formular neugestaltet.
- **Neue Komponenten**:
  - `Hero`: Moderne Hero-Sektion mit SVG-Illustration.
  - `ServiceCard`: Neue Karten für die Darstellung der Dienstleistungen.
  - `Stats`: Sektion mit animierten Zählern.
- **Dokumentationsdateien**:
  - `KRITIK.md` zur Sammlung von Feedback.
  - `CHANGELOG.md` zur Nachverfolgung von Änderungen.

### Changed
- **Dark-Mode-Logik**: Die Implementierung wurde überarbeitet, um FOUC (Flash of Unstyled Content) zu verhindern. Die Initialisierung erfolgt nun über ein blockierendes Skript im `<head>`.
- **Navigation**: Die Texte im mobilen Menü wurden ins Deutsche übersetzt.
- **Call-to-Action**: Der Haupt-CTA-Button im Header wurde von "Get Started" zu "Projekt anfragen" umbenannt.
- **Footer**: Das Design wurde auf ein 4-Spalten-Layout aktualisiert.

### Fixed
- **Theme-Toggle**: Der Umschalter für den Dark-Mode funktioniert nun auch nach clientseitiger Navigation (View Transitions) zuverlässig.
- **Cookie-Banner**: Die Funktionalität des Banners wurde korrigiert, sodass er konsistent angezeigt wird und auf Benutzereingaben reagiert.
- **Interne Verlinkung**: Alle Navigations- und Footer-Links wurden überprüft und auf die korrekten Zielseiten korrigiert.
- **Kontaktdaten**: Falsche Platzhalter-Daten im Footer wurden durch korrekte, klickbare `tel:` und `mailto:` Links ersetzt.

## [1.0.0] - (Datum der initialen Version)

### Added
- **Initiales Projekt-Setup**: Projekt aufgesetzt mit Astro und Tailwind CSS.
- **Grundlegende Seiten**: Erstellung der initialen Seiten: Startseite, Über uns, Service-Übersicht, Kontakt, Impressum und Datenschutz.
- **Design-System**: Definition des initialen Design-Systems mit warmen Erdtönen und der Typografie (Playfair Display, Inter).
- **Grundkomponenten**: Erstellung der ersten grundlegenden UI-Komponenten.
- **Responsives Layout**: Sicherstellung der grundlegenden Funktionalität auf verschiedenen Bildschirmgrößen. 