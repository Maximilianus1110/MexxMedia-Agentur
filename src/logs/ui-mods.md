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