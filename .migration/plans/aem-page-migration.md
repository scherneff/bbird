# Homepage Migration Plan — Amazon Prime Air Drone Delivery

**Source URL:** https://www.amazon.com/Prime-Air-Drone-Delivery/b?ie=UTF8&node=206533607011

## Overview

Migrate the Amazon Prime Air Drone Delivery landing page to AEM Edge Delivery Services. This involves scraping the source page, analyzing its structure (hero sections, feature highlights, media content), mapping content to EDS blocks, generating import infrastructure, and producing the final HTML content for local preview.

## Prerequisites

- [x] Obtain the source homepage URL from the user

## Checklist

- [ ] **Scrape the source page** — Download HTML, extract metadata, capture images from the Prime Air page
- [ ] **Analyze page structure** — Identify sections (hero, feature blocks, media, CTAs), content sequences, and block candidates
- [ ] **Map blocks** — Match content patterns to available EDS blocks (hero, columns, cards, media, etc.)
- [ ] **Generate import infrastructure** — Create block parsers and page transformers tailored to this page's DOM
- [ ] **Import content** — Run the import script to produce structured HTML in the content directory
- [ ] **Preview and validate** — Verify the migrated page renders correctly in the local dev server
- [ ] **Design/style migration** — Extract and adapt CSS (colors, typography, spacing, layout) from the original page
- [ ] **Final QA** — Compare migrated page against original for visual fidelity and content accuracy

## Approach

1. **Scrape & Analyze** — Use the page-import skill to orchestrate scraping, structure identification, and block mapping for the Prime Air page
2. **Block Selection** — Leverage existing project blocks and the Block Collection; create new block variants only where needed for unique content patterns (e.g., drone animation sections, delivery timeline graphics)
3. **Import & Generate** — Produce structured HTML content with proper section breaks, block tables, and metadata
4. **Preview** — Validate in local dev server, confirm images load, sections render, and blocks decorate correctly
5. **Style** — Migrate visual design (Amazon's dark theme, accent colors, typography) into block-scoped CSS
6. **Iterate** — Compare against original and refine until acceptable fidelity is reached

## Risks & Considerations

- Amazon pages are heavily JavaScript-rendered; scraping may yield limited static HTML — may need browser-based capture
- Dynamic/interactive elements (video players, animations) will be simplified to static equivalents in EDS
- Proprietary fonts and brand assets may need substitution with project fonts

---

*Ready for execution. Switch to Execute mode to begin the migration.*
