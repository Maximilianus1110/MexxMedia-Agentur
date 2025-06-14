# Logbuch für UI-Änderungen

In dieser Datei werden alle Änderungen an der Benutzeroberfläche (UI) dokumentiert, die im Rahmen von Bugfixes oder technischen Anpassungen vorgenommen werden mussten.

---

*Bisher wurden keine UI-Änderungen vorgenommen.*

# UI Modifications Log

## [2024-03-XX] Pricing-Komponente: Beratungs-Block

### Änderungen
- Neuer Beratungs-Block zwischen Preisplänen und FAQ
- Neutrales Design mit Dark/Light Mode Anpassung
- Hover-Effekte für bessere Interaktivität
- Chat-Icon für visuelles Feedback

### Design-Details
- Maximale Breite: 48rem (max-w-3xl)
- Abstand oben: 4rem (mt-16)
- Padding: 2rem (p-8)
- Abgerundete Ecken: 1rem (rounded-2xl)
- Farben:
  - Light Mode: Weißer Hintergrund, neutrale Akzente
  - Dark Mode: Neutral-900 Hintergrund, weiße Akzente
  - Border: 50% Opacity im jeweiligen Mode

### Interaktivität
- Hover-Effekt auf CTA-Button:
  - Leichte Anhebung (-translate-y-1)
  - Schatten-Effekt (shadow-lg)
  - Farbübergang bei Hover

## 2024-03-XX - ServiceCard Erweiterung
- **Komponente**: ServiceCard.astro
- **Änderung**: Implementierung eines aufklappbaren Bereichs für zusätzliche Features
- **Details**:
  - Hinzufügung eines "Mehr anzeigen" Buttons
  - Alpine.js Integration für Expand/Collapse Funktionalität
  - Smooth Transitions für bessere UX
  - Anpassung des Designs an Light/Dark Mode
- **Zweck**: Bessere Übersichtlichkeit durch initiales Anzeigen der wichtigsten Features, während zusätzliche Features bei Bedarf eingeblendet werden können. 