import type { ArticleSummary } from "../types/article";

export const ARCHIVE_PAGE_SIZE = 12;

export function sortArticles<T extends ArticleSummary>(articles: readonly T[]): T[] {
  return [...articles].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt) || a.slug.localeCompare(b.slug, "en"));
}

export function archivePageCount(articles: readonly ArticleSummary[]): number {
  return Math.max(1, Math.ceil(articles.length / ARCHIVE_PAGE_SIZE));
}

export function archivePath(page: number): string {
  return page === 1 ? "/writings/" : `/writings/page/${page}/`;
}

export function paginateArticles<T extends ArticleSummary>(articles: readonly T[], page: number): T[] | null {
  if (!Number.isInteger(page) || page < 1 || page > archivePageCount(articles)) return null;
  return sortArticles(articles).slice((page - 1) * ARCHIVE_PAGE_SIZE, page * ARCHIVE_PAGE_SIZE);
}

export function articleNeighbours(articles: readonly ArticleSummary[], slug: string) {
  const sorted = sortArticles(articles);
  const index = sorted.findIndex((article) => article.slug === slug);
  return {
    previous: index >= 0 ? sorted[index + 1] ?? null : null,
    next: index > 0 ? sorted[index - 1] : null,
  };
}

export function relatedArticles(articles: readonly ArticleSummary[], current: ArticleSummary, limit = 3) {
  const others = sortArticles(articles).filter((article) => article.slug !== current.slug);
  return [...others.filter((a) => a.category === current.category), ...others.filter((a) => a.category !== current.category)].slice(0, limit);
}
