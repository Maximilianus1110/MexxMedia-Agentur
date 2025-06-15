# Inquiry Modal Component

## Übersicht
Die `InquiryModal`-Komponente ist ein wiederverwendbares Modal-Fenster für Anfragen und Beratungswünsche. Sie wird in der `Pricing.astro`-Komponente verwendet und kann sowohl für Paketanfragen als auch für allgemeine Beratungsanfragen genutzt werden.

## Funktionalität

### Öffnen des Modals
Das Modal kann auf zwei Arten geöffnet werden:
1. Über die Paket-Buttons mit `openInquiryModal('Paketname')`
2. Über den Beratungs-Button mit `openInquiryModal('Beratung')`

### Features
- Responsives Design
- Dark/Light Mode Unterstützung
- Formularvalidierung
- Datenschutz-Checkbox
- Schließen via:
  - Schließen-Button
  - Klick außerhalb des Modals
  - ESC-Taste

### Technische Details
- Astro View Transitions kompatibel
- Event-Listener werden bei Navigation neu initialisiert
- Formular-Reset beim Schließen
- Fehlerbehandlung bei API-Aufrufen

## Verwendung

### Modal einbinden
```astro
---
import InquiryModal from '../components/InquiryModal.astro';
---

<InquiryModal id="inquiry-modal" />
```

### Modal öffnen
```typescript
// Für Pakete
openInquiryModal('Web Basic');
openInquiryModal('Web Plus');
openInquiryModal('Web Max');

// Für Beratung
openInquiryModal('Beratung');
```

## Styling
- Konsistentes Design mit der Website
- Animierte Übergänge
- Responsive Layout
- Barrierefreie Bedienung

## Formularfelder
- Name (Pflichtfeld)
- E-Mail (Pflichtfeld)
- Telefon (optional)
- Nachricht (optional)
- Datenschutz-Zustimmung (Pflichtfeld)
- Verstecktes Feld für Paket/Beratung

## Best Practices
- Modale Dialoge werden für fokussierte Interaktionen verwendet
- Klare Benutzerführung
- Einfache Bedienung
- Konsistentes Verhalten über alle Aufrufe hinweg
- Zugänglichkeit durch Keyboard-Navigation

## Erweiterungen
Die Komponente wurde erweitert, um auch Beratungsanfragen zu unterstützen:
- Einheitliche Behandlung von Paket- und Beratungsanfragen
- Angepasste Überschrift für Beratungsanfragen
- Konsistentes Nutzererlebnis 