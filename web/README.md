# Roots & Reflections — Phase 1

An editorial blog shell built with Next.js App Router, TypeScript, and Tailwind CSS 4.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000. Google Fonts are downloaded at build time by `next/font/google`, then served locally to visitors. The initial build needs access to Google Fonts.

## Validation

```sh
npm run lint
npm run build
```

The production build exports static files into `out/`. Serve that directory with a static file server; `next start` does not serve static exports.

## Design system

- Color variables and Tailwind 4 theme mappings: `src/app/globals.css`.
- Fonts: Newsreader for headings, Source Serif 4 for prose, Source Sans 3 for navigation and labels, configured in `src/app/layout.tsx`.
- Shared shell: `Container`, `SectionDivider`, `TreeLogo`, `SiteHeader`, and `SiteFooter` in `src/components/`.
- Site identity and navigation destinations: `src/lib/site.ts`.
- The installed `@tailwindcss/turbopack` loader is configured in `next.config.ts` to compile theme tokens and utilities. No additional dependencies are needed.

The shell and page content are Server Components. Only `SiteNavigation` uses a client boundary for the mobile disclosure and current-page indication. The menu supports keyboard activation, Escape to close and return focus, and closes after a link is selected. The copyright year is generated at build time and updates on rebuild.

## Scope

The homepage is a temporary welcome. `/writings/` and `/about/` are explicitly labeled placeholders so header and footer links have working destinations. Topic links target sections of the Writings placeholder. There are no articles, article listings, CMS integration, or deployment configuration in this phase.

Before approving the design, review the masthead and spacing at desktop, tablet, and mobile widths, the tree at 32px and 96px, font rendering, visible keyboard focus, and mobile navigation. Check for horizontal overflow at 320px and with text zoom enabled.
