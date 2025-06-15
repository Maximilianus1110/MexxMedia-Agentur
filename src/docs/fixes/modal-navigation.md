# Modal Navigation Fix

## Problem
Das Modal in der `Pricing.astro`-Section funktionierte beim ersten Aufruf einwandfrei, aber nach Navigation zu einer anderen Seite und zurück ließ sich das Modal nicht mehr öffnen.

## Ursache
Das Problem trat auf, weil die Modal-Initialisierung und Event-Listener nach der Astro View Transition nicht erneut eingerichtet wurden. Astro's View Transitions behalten zwar den DOM-Zustand bei, aber JavaScript-Event-Listener müssen nach jeder Navigation neu registriert werden.

## Lösung
Die Lösung bestand darin, die gesamte Modal-Initialisierung in eine `setupModal`-Funktion zu kapseln und diese bei jedem `astro:page-load`-Event auszuführen. Dies stellt sicher, dass:

1. Alle Event-Listener nach jeder Navigation neu registriert werden
2. Die `openInquiryModal`-Funktion im globalen Scope korrekt neu definiert wird
3. Die Modal-Funktionalität auch nach View Transitions vollständig verfügbar ist

### Implementierungsdetails

```typescript
// Modal-Setup in eine Funktion gekapselt
const setupModal = () => {
  // Modal-Initialisierung und Event-Listener
  // ...
};

// Ausführung bei initialem Laden und nach jeder Navigation
document.addEventListener('astro:page-load', setupModal);
```

## Vorteile
- Zuverlässige Modal-Funktionalität über alle Seitennavigationen hinweg
- Keine Beeinträchtigung der bestehenden Funktionalität
- Beibehaltung aller Design- und UX-Aspekte
- Unterstützung von Dark/Light Mode

## Getestete Szenarien
- Direkter Seitenaufruf
- Navigation über Header-Links
- Zurücknavigation im Browser
- Mehrfache Navigation zwischen Seiten
- Modal-Öffnung nach verschiedenen Navigationssequenzen

## Best Practices
- Event-Listener werden sauber bei jeder Navigation neu registriert
- Keine Memory-Leaks durch mehrfache Event-Listener-Registrierung
- Beibehaltung der ursprünglichen Modal-Funktionalität
- Konsistente Benutzererfahrung über alle Navigationsszenarien 