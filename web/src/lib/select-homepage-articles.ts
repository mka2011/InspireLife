import type { ArticleSummary } from "../types/article";

export interface HomepageArticles {
  featured: ArticleSummary | null;
  sideStories: ArticleSummary[];
  moreArticles: ArticleSummary[];
}

/** Selects from a copy, keeping source records and their order unchanged. */
export function selectHomepageArticles(
  articles: readonly ArticleSummary[],
): HomepageArticles {
  const sorted = [...articles].sort(
    (a, b) =>
      Date.parse(b.publishedAt) - Date.parse(a.publishedAt) ||
      a.slug.localeCompare(b.slug, "en"),
  );
  // Treat the slug as editorial identity, even if a source repeats a record.
  const seen = new Set<string>();
  const unique = sorted.filter(({ slug }) => {
    if (seen.has(slug)) return false;
    seen.add(slug);
    return true;
  });
  const featured = unique.find((article) => article.featured) ?? unique[0] ?? null;
  const remaining = unique.filter((article) => article.slug !== featured?.slug);

  return {
    featured,
    sideStories: remaining.slice(0, 4),
    moreArticles: remaining.slice(4),
  };
}
