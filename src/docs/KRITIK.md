# Technische Kritik und Verbesserungsvorschläge

Dieses Dokument enthält konstruktive Kritik und Vorschläge, die über den Rahmen der letzten technischen Überprüfung hinausgehen. Diese Punkte können die Webseite in Zukunft weiter verbessern.

*Zuletzt überprüft: 2024-07-29*

## SEO & Content

### 1. Open Graph Image (`og:image`)
- **Beobachtung:** Es ist ein Standard-Platzhalter `og-image.png` im Layout integriert. Diese Datei muss noch im `public`-Verzeichnis erstellt werden.
- **Vorschlag:** Eine ansprechende und repräsentative `og-image.png` (Format 1200x630px empfohlen) erstellen und im `public`-Verzeichnis ablegen. Dies verbessert die visuelle Darstellung der Webseite, wenn sie auf sozialen Medien geteilt wird. Für Fortgeschrittene könnte man sogar pro Seite ein eigenes OG-Image dynamisch generieren.

### 2. Strukturierte Daten (Schema.org)
- **Beobachtung:** Die Webseite nutzt aktuell keine strukturierten Daten von Schema.org.
- **Vorschlag:** Schema.org-Markup hinzufügen, um Suchmaschinen mehr Kontext über den Inhalt zu geben. Dies kann zu Rich Snippets in den Suchergebnissen führen.
  - **Für die gesamte Seite:** `LocalBusiness` oder `Organization` Schema auf der Startseite oder im Footer global einbinden. Das würde Informationen wie Logo, Adresse, Telefonnummer und Öffnungszeiten für Google verständlich machen.
  - **Für Service-Seiten:** `Service`-Schema verwenden, um die angebotenen Dienstleistungen klar zu definieren.
  - **Für die Kontaktseite:** `ContactPage`-Schema.

### 3. Service-Übersichtsseite (`/service`)
- **Beobachtung:** Es existiert eine Übersichtsseite für Dienstleistungen unter `/service`, diese könnte jedoch weiter ausgebaut werden.
- **Vorschlag:** Sicherstellen, dass die Seite `/service` alle angebotenen Dienstleistungen ansprechend präsentiert, kurz anreißt und prominent auf die jeweiligen Detailseiten verlinkt. Dies verbessert die Benutzerführung und schafft eine klare, logische Struktur.

## Technik & Code-Struktur

### 1. Globale Datenverwaltung
- **Beobachtung:** Kontaktdaten (Telefon, E-Mail) und Social-Media-Links sind teilweise direkt (hardcodiert) in den Komponenten (`Footer.astro`, `kontakt.astro`) hinterlegt.
- **Vorschlag:** Ein zentrales Daten-File (z.B. `src/data/site.ts` oder `src/data/site.json`) anlegen, in dem alle globalen Informationen wie Firmenname, Kontaktdaten, Social-Media-Profile etc. gespeichert sind. Die Komponenten importieren die Daten dann von dort. Das erleichtert die Wartung erheblich, da Änderungen nur noch an einer einzigen Stelle vorgenommen werden müssen.

## Design & UI/UX

### 1. Favicon-Set
- **Beobachtung:** Es ist ein Standard-Favicon (`favicon.svg`) verlinkt.
- **Vorschlag:** Ein vollständiges Favicon-Set erstellen und einbinden, um eine konsistente Markendarstellung auf allen Geräten und Plattformen zu gewährleisten. Dazu gehören:
  - `favicon.ico` (für ältere Browser)
  - `apple-touch-icon.png` (für iOS-Geräte)
  - `manifest.json` mit Icons in verschiedenen Größen (für Android-Geräte und PWA-Features) 