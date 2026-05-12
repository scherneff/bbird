Let me check what blocks are available in this project to inform the migration plan.# Amazon Prime Air Drone Delivery — Page Migration Plan

**Source URL:** https://www.amazon.com/Prime-Air-Drone-Delivery/b?ie=UTF8&node=206533607011

## Overview

Migrate the Amazon Prime Air Drone Delivery landing page to AEM Edge Delivery Services. This involves scraping the source page, analyzing its structure (hero, feature highlights, media sections, CTAs), mapping content to available EDS blocks, generating import infrastructure, and producing the final HTML content for local preview.

## Available Project Blocks

The following blocks are already available in this project and can be leveraged for mapping:

| Block | Likely Usage |
|-------|-------------|
| `hero` | Hero/banner sections with headline + CTA |
| `columns` | Side-by-side content (text + image features) |
| `cards` | Feature cards / highlights grid |
| `teaser` | Promotional content with image + text |
| `tabs` | Tabbed content sections |
| `embed` | Video embeds (drone footage, demos) |
| `fragment` | Reusable content fragments |
| `faq` | FAQ/accordion sections |

## Prerequisites

- [x] Obtain the source homepage URL from the user
- [x] Inventory available project blocks

## Checklist

- [ ] **Scrape the source page** — Download HTML, extract metadata, capture images from the Prime Air landing page
- [ ] **Analyze page structure** — Identify sections (hero banner, feature highlights, drone specs, delivery info, media/video, CTAs), content sequences, and block candidates
- [ ] **Map blocks** — Match content patterns to existing blocks (hero, columns, cards, teaser, embed); identify any new block variants needed
- [ ] **Generate import infrastructure** — Create block parsers and page transformers tailored to this page's DOM structure
- [ ] **Import content** — Run the import script to produce structured HTML in the content directory
- [ ] **Preview and validate** — Verify the migrated page renders correctly in the local dev server
- [ ] **Design/style migration** — Extract and adapt CSS (dark theme, accent colors, typography, spacing) from the original page
- [ ] **Final QA** — Compare migrated page against original for visual fidelity and content accuracy

## Approach

1. **Scrape & Analyze** — Use the `page-import` skill to orchestrate scraping, structure identification, and block mapping
2. **Block Selection** — Leverage existing project blocks (`hero`, `columns`, `cards`, `teaser`, `embed`); create new block variants only where needed for unique patterns (e.g., animated/parallax sections, delivery timeline)
3. **Import & Generate** — Produce structured HTML with proper section breaks, block tables, and metadata
4. **Preview** — Validate in local dev server; confirm images load, sections render, and blocks decorate correctly
5. **Style** — Migrate visual design into block-scoped CSS matching the original page aesthetics
6. **Iterate** — Compare against original and refine until acceptable fidelity

## Risks & Considerations

- **JS-rendered content:** Amazon pages are heavily JavaScript-rendered; scraping may yield limited static HTML — browser-based capture will be attempted
- **Dynamic elements:** Video players, animations, and interactive demos will be simplified to static/embed equivalents in EDS
- **Brand assets:** Proprietary Amazon fonts and assets may need substitution with project fonts (Montserrat, EB Garamond, Roboto)
- **Navigation/footer:** Amazon's global nav will be excluded; project header/footer will be used instead

## Execution

This plan is ready for implementation. Switch to **Execute mode** to begin the migration using the `page-import` skill.
