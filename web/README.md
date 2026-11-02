# Roots & Reflections — Phase 2B

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
node --experimental-strip-types --test src/lib/*.test.mjs
npm run build
```

The production build exports static files into `out/`. Serve that directory with a static file server; `next start` does not serve static exports.

## Design system

- Color variables and Tailwind 4 theme mappings: `src/app/globals.css`.
- Fonts: Newsreader for headings, Source Serif 4 for prose, Source Sans 3 for navigation and labels, configured in `src/app/layout.tsx`.
- Shared shell: `Container`, `SectionDivider`, `TreeLogo`, `SiteHeader`, and `SiteFooter` in `src/components/`.
- Site identity and navigation destinations: `src/lib/site.ts`.
- The installed `@tailwindcss/turbopack` loader is configured in `next.config.ts` to compile theme tokens and utilities. No additional dependencies are needed.

The shell and page content are Server Components. Mobile navigation uses native `details`/`summary`, so it opens with the keyboard and works without JavaScript. Desktop navigation remains visible at its breakpoint. The copyright year is generated at build time and updates on rebuild.

## Scope

The homepage now contains an editorial feature section and a journal grid. `src/types/article.ts` defines the summary contract; `src/data/mock-articles.ts` supplies thirteen explicitly illustrative stories covering all seven requested topics. `src/lib/select-homepage-articles.ts` selects the newest explicit feature (or newest story), then the next four stories for the rails and the rest for the journal. It never mutates the input and deduplicates by slug. Its tests cover empty, single, few-story, duplicate, ordering, and feature-precedence cases using Node 22's built-in TypeScript stripping without extra dependencies.

The feature appears first in the DOM. At desktop widths, CSS Grid places it in the middle six columns of a twelve-column grid, between two three-column rails. Tablet rails use two columns below the feature; mobile stories stack with horizontal rules. The journal uses three columns on desktop, two on tablets, and one on mobile. Missing optional images and empty sections do not leave broken placeholders.

The new Server Components are `EditorialHero`, `FeaturedArticle`, `SideStory`, `ArticleCard`, `MoreFromJournal`, and `ArticleMetadata`. Dates use an explicit UTC timezone for consistent static rendering.

## Article pages and archive

- `src/data/mock-article-content.ts` adds original illustrative prose to every summary, without attributing real experiences or a real name to the author. Two older mock summaries exercise the second archive page.
- `src/types/article.ts` defines typed paragraphs, inline emphasis/links, headings, lists, blockquotes, and figures. `ArticleContent` renders these as semantic HTML without an HTML injection layer or Markdown dependency.
- `/writings/[slug]/` statically generates all thirteen article paths. Each includes the compact reading masthead, a centered title, optional subtitle and photograph, placeholder author, date, reading time, article content, adjacent stories, and related articles.
- `.reading-prose` has a 700px maximum width, Source Serif 4 at up to 19px, and 1.75 line height. A server-rendered article marker selects the compact masthead through CSS `:has()`, keeping the homepage masthead intact without client route state.
- `src/lib/articles.ts` supplies immutable chronological sorting, twelve-item pagination, previous/next selection, and same-category-first related articles. Previous means older; next means newer. Neither wraps at the ends.
- `/writings/` contains the first twelve stories; `/writings/page/2/` contains the remaining story. `generateStaticParams` emits only needed continuation pages, with page one always at `/writings/`. Masthead topic links jump to the first matching story on the first archive page.
- Both dynamic routes set `dynamicParams = false` and validate lookups. Unknown paths use `out/404.html`; a future static host must serve that file with HTTP 404 rather than rewriting missing paths to the homepage.
- `/about/` contains a warm, clearly labeled first-person placeholder biography for a former teacher. It does not supply an invented name, qualifications, or career history.

## SEO configuration

Every page has a title, description, a single H1, and a meaningful heading hierarchy. Article bodies and navigation links are present in the exported HTML.

Set the build-time `SITE_URL` environment variable to the eventual absolute production origin, for example `https://your-domain.example`, then run `npm run build`. `src/lib/seo.ts` uses this value for `metadataBase` and page-specific canonical URLs. Until it is set, canonical tags are intentionally omitted so the preview cannot claim a guessed production domain. Canonical URLs retain each archive page's own path.

All current content is illustrative, so the site remains `noindex, follow`. Remove the placeholder indexing restriction from the root metadata and article metadata when real content is approved for publication. No production URL or credentials are committed.

Photography is stored in `public/images/journal/`; exact sources and the Unsplash license are recorded in `SOURCES.md` alongside the assets. No external API, CMS, new dependency, or production deployment is included.

Review the article typography, photograph crops, About copy, and archive spacing before accepting the design. The mock dates, authorship, and reading times must be replaced with approved editorial data before publication.
