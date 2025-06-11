# SEO-Strategie für MexxMedia

Dieses Dokument beschreibt die umfassende SEO-Strategie, die für die MexxMedia-Website implementiert wurde. Ziel ist es, die Auffindbarkeit in Suchmaschinen zu maximieren, die technische Grundlage zu stärken und eine Basis für zukünftiges Wachstum zu schaffen.

## 1. Grundlagen und Ziele

- **Hauptziel:** Verbesserung der organischen Sichtbarkeit in Suchmaschinen wie Google, um qualifizierten Traffic zu generieren.
- **Zielgruppe:** Kleine und mittelständische Unternehmen (KMU), vorwiegend im Raum Nürnberg und Umgebung.
- **Keyword-Fokus:** Die Strategie zielt auf eine Mischung aus dienstleistungsbezogenen Keywords (z.B. "Webdesign Nürnberg", "SEO Agentur") und Marken-Keywords ("MexxMedia") ab.

---

## 2. Umgesetzte On-Page-SEO-Maßnahmen

On-Page-SEO bezieht sich auf alle Optimierungen, die direkt am Inhalt und HTML-Quellcode der Seite vorgenommen werden.

### a) Meta-Tags (Titel & Beschreibung)

Für jede Seite wurden einzigartige und strategische Metadaten festgelegt. Die `Layout.astro` Komponente stellt sicher, dass diese auf jeder Seite korrekt ausgegeben werden.

**Struktur:**
- **Title:** Prägnante Beschreibung des Seiteninhalts, inklusive Haupt-Keyword und Markenname am Ende.
- **Description:** Ansprechende Zusammenfassung (ca. 155 Zeichen), die zum Klicken anregt und das Haupt-Keyword enthält.

| Seite | Title | Description |
| :--- | :--- | :--- |
| `/` | Webagentur MexxMedia – Webseiten, die wirken | Moderne Webseiten & Online-Lösungen für den Mittelstand. |
| `/service/webdesign`| Webdesign für Unternehmen – MexxMedia | Individuelles Design, schnelle Ladezeiten & Mobile First. |
| `/service/seo` | SEO & Content Marketing – MexxMedia | Suchmaschinenoptimierung für lokale Unternehmen. |
| `/service/hosting` | Hosting & Wartung – MexxMedia | DSGVO-sicheres Hosting & technische Pflege. |
| `/about` | Das Team hinter MexxMedia – Über uns | Wer wir sind, wie wir arbeiten, und warum das wirkt. |
| `/kontakt` | Kontakt aufnehmen – MexxMedia | Persönlich, schnell & ehrlich. Jetzt unverbindlich anfragen. |

### b) Semantische HTML- und Heading-Struktur

- **HTML5-Struktur:** Die Website nutzt durchgehend semantische HTML5-Tags wie `<header>`, `<footer>`, `<main>`, `<section>` und `<nav>`. Dies hilft Suchmaschinen, die Struktur und den Zweck verschiedener Inhaltsbereiche zu verstehen.
- **Logische Heading-Hierarchie:** Jede Seite hat genau eine `<h1>`-Überschrift, die den Hauptinhalt der Seite zusammenfasst. Untergeordnete Themen werden mit `<h2>`, `<h3>` usw. logisch strukturiert. Dies ist entscheidend für die Lesbarkeit für Nutzer und Crawler.

### c) Interne Verlinkung

Eine saubere interne Verlinkungsstrategie wurde umgesetzt, um "Link Juice" (SEO-Wert) auf der Website zu verteilen und die Navigation zu verbessern.
- **Navigation:** Links in Header und Footer wurden korrigiert und verweisen auf die korrekten Seiten.
- **Call-to-Actions (CTAs):** Wichtige Buttons (z.B. "Projekt anfragen") leiten Nutzer gezielt zur `/kontakt`-Seite und signalisieren Suchmaschinen die Wichtigkeit dieser Seite.

---

## 3. Umgesetzte Technische SEO-Maßnahmen

Technische SEO stellt sicher, dass die Website von Suchmaschinen effizient gecrawlt und indexiert werden kann.

### a) Canonical URLs

- **Implementierung:** Die `Layout.astro`-Komponente generiert automatisch für jede Seite einen Canonical-Tag.
  ```html
  <link rel="canonical" href="https://www.mexxmedia.de/aktuelle-seite" />
  ```
- **Zweck:** Dieses Tag teilt Suchmaschinen mit, welche URL die "Master-Version" einer Seite ist. Das ist entscheidend, um Probleme mit Duplicate Content zu vermeiden (z.B. durch URLs mit oder ohne `www`, mit Parametern etc.).

### b) Open Graph & Twitter Cards

- **Implementierung:** Für jede Seite werden automatisch Social-Media-spezifische Tags im `<head>` generiert.
  ```html
  <!-- Open Graph / Facebook -->
  <meta property="og:title" content="Seitentitel" />
  <meta property="og:description" content="Seitenbeschreibung" />
  <meta property="og:image" content="https://www.mexxmedia.de/og-image.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  ```
- **Zweck:** Diese Tags steuern, wie Links zur Website aussehen, wenn sie auf Plattformen wie Facebook, LinkedIn oder Twitter geteilt werden. Ein ansprechendes Vorschaubild und ein guter Text können die Klickrate erheblich steigern.
- **Hinweis:** Eine Datei namens `og-image.png` (empfohlenes Format: 1200x630 Pixel) muss im `public/`-Ordner abgelegt werden.

### c) Performance und User Experience (UX)

- **Ladezeiten:** Durch den Einsatz des modernen Astro-Frameworks und die Optimierung von Assets sind die Ladezeiten sehr kurz. Schnelle Ladezeiten sind ein wichtiger Rankingfaktor.
- **Dark Mode:** Der robuste Dark Mode verbessert die User Experience, was zu positiven Nutzersignalen (z.B. längere Verweildauer, niedrigere Absprungrate) führen kann, die von Google indirekt bewertet werden.

---

## 4. Weiterführende Empfehlungen (Nächste Schritte)

Die aktuelle Implementierung bietet eine sehr starke SEO-Grundlage. Die folgenden Schritte werden empfohlen, um die Sichtbarkeit weiter zu maximieren.

### a) Strukturierte Daten (Schema.org)

Die Implementierung von strukturierten Daten ist einer der wichtigsten nächsten Schritte, um Rich Snippets in den Google-Suchergebnissen zu erhalten.

- **Empfehlung:** Fügen Sie ein `LocalBusiness`-Schema hinzu. Dies kann global im Footer platziert werden.
- **Beispiel (JSON-LD):**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MexxMedia",
    "url": "https://www.mexxmedia.de/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.mexxmedia.de/suche?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  ```

### b) Bilder-SEO

- **Alt-Texte:** Stellen Sie sicher, dass alle aussagekräftigen Bilder descriptive `alt`-Attribute haben. Dies ist wichtig für die Barrierefreiheit und die Bildersuche. Rein dekorative Bilder sollten ein leeres `alt=""`-Attribut haben.
- **Dateinamen:** Benennen Sie Bilddateien deskriptiv (z.B. `webdesign-agentur-nuernberg.jpg` statt `IMG_1234.jpg`).

### c) Sitemap und robots.txt

- **sitemap.xml:** Erstellen Sie eine `sitemap.xml` (Astro bietet hierfür eine Integration: `@astrojs/sitemap`). Reichen Sie diese Datei bei der Google Search Console ein, um sicherzustellen, dass Google alle Ihre Seiten findet.
- **robots.txt:** Erstellen Sie eine `robots.txt`-Datei im `public/`-Ordner, um Crawlern Anweisungen zu geben. Eine einfache Version könnte so aussehen:
  ```
  User-agent: *
  Allow: /

  Sitemap: https://www.mexxmedia.de/sitemap-index.xml
  ```

### d) Content-Strategie

- **Blog / Ratgeber:** Erwägen Sie das Hinzufügen eines Blogs, um regelmäßig hochwertige Inhalte zu Themen wie "Worauf bei einer neuen Website achten?" oder "Lokales SEO für Handwerker" zu veröffentlichen. Dies etabliert Expertise und zieht organischen Traffic über Long-Tail-Keywords an. 