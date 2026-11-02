# InspireLife — Codex Project Instructions

## Project Overview

Build a personal editorial blog for a former teacher who writes about childhood, parenting, education, life, nature, spirituality, and personal growth.

The website's working name is "Roots & Reflections".

The visual direction is a modern literary newspaper inspired by the editorial hierarchy of The New York Times, combined with a peaceful, nature-inspired identity.

## Technology Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Static Site Generation
- Sanity CMS (future integration)
- Cloudflare Pages (future deployment)

The Next.js application is located in `/web`.

A Sanity Studio application will eventually be created in `/studio`.

## Design Direction

- Calm, elegant, timeless, editorial.
- Warm ivory backgrounds and deep forest-green accents.
- Minimal tree logo symbolizing growth and wisdom.
- No Buddha imagery or overt religious iconography.
- Centered serif masthead.
- Three-column newspaper-inspired desktop homepage.
- Large featured article in the center, with a large image above its headline.
- Smaller, predominantly text-based articles in the left and right columns.
- On mobile, the featured article appears first, followed by stacked secondary articles.
- Thin separators, balanced whitespace, restrained imagery.
- Avoid dashboard-style cards, excessive shadows, rounded panels, gradients, glassmorphism, and unnecessary animations.

## Design Tokens

- Background: #F8F7F0
- Forest green: #294B39
- Sage: #A6BDA1
- Leaf green: #597B5F
- Text: #303A32
- Muted text: #667366
- Dividers: #D1D9CD

Typography:
- Headings: Newsreader
- Article body: Source Serif 4
- Navigation and metadata: Source Sans 3

## Engineering Requirements

1. Use TypeScript strict mode.
2. Prefer React Server Components.
3. Add `"use client"` only when actual client-side interactivity is required.
4. Build small reusable components with typed props.
5. Keep editorial layout logic separate from data fetching.
6. Use semantic HTML and accessible navigation.
7. Support desktop, tablet, and mobile screens.
8. Keep article content in real HTML for SEO and AI crawlers.
9. Support Next.js static export with `output: "export"`.
10. Do not introduce server actions, API routes, request-time dynamic rendering, or unnecessary services.
11. Avoid unnecessary dependencies.
12. Use meaningful, descriptive component and variable names.
13. Do not add Sanity until specifically requested.
14. Use mock articles for the first frontend milestone.
15. Never commit API tokens, credentials, or secrets.

## Working Practices

- Inspect existing code before modifying it.
- Implement only the requested phase.
- Keep diffs focused and maintainable.
- Run linting and production builds after meaningful changes.
- Fix errors before declaring a task complete.
- Report files created or changed.
- Explain any architectural tradeoffs.
- Do not install new dependencies unless justified.
- Do not modify unrelated files.
- Do not invent unpublished personal details about the author.
- All mock article content must be clearly identifiable as placeholder content.

## Initial Pages

- `/` — Editorial homepage
- `/writings/` — Article archive
- `/writings/[slug]/` — Individual article
- `/about/` — About the author

## First Milestone

Build the complete frontend using mock content.

The result should be visually polished, responsive, accessible, and ready for future Sanity integration.

Do not implement the CMS or production deployment until the frontend design has been reviewed.
