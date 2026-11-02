import assert from "node:assert/strict";
import test from "node:test";
import { archivePageCount, archivePath, paginateArticles, articleNeighbours, relatedArticles } from "./articles.ts";

const article = (index, category = "Nature") => Object.freeze({
  slug: `story-${index}`,
  title: `Story ${index}`,
  category,
  excerpt: "Illustrative placeholder",
  publishedAt: `2026-10-${String(index + 1).padStart(2, "0")}`,
  readingTimeMinutes: 3,
  isPlaceholder: true,
});

const records = Object.freeze(Array.from({ length: 25 }, (_, index) => article(index)));

test("archive slices twelve records per page in reverse chronological order without mutation", () => {
  const original = [...records];
  assert.equal(archivePageCount(records), 3);
  const pages = [1, 2, 3].map(page => paginateArticles(records, page));
  assert.deepEqual(pages.map(page => page.length), [12, 12, 1]);
  assert.deepEqual(pages.flat().map(a => a.slug), [...original].reverse().map(a => a.slug));
  assert.deepEqual(records, original);
});

test("empty collections have one empty page; invalid pages are rejected", () => {
  assert.equal(archivePageCount([]), 1);
  assert.deepEqual(paginateArticles([], 1), []);
  for (const page of [0, -1, 1.5, 4, NaN]) assert.equal(paginateArticles(records, page), null);
  assert.equal(paginateArticles([], 2), null);
});

test("pagination boundaries create a new page only after twelve stories", () => {
  assert.equal(archivePageCount(records.slice(0, 12)), 1);
  assert.equal(archivePageCount(records.slice(0, 13)), 2);
  assert.equal(archivePath(1), "/writings/");
  assert.equal(archivePath(2), "/writings/page/2/");
});

test("neighbours mean previous older and next newer, with no wraparound", () => {
  assert.deepEqual(articleNeighbours(records, "story-12"), { previous: records[11], next: records[13] });
  assert.equal(articleNeighbours(records, "story-0").previous, null);
  assert.equal(articleNeighbours(records, "story-24").next, null);
  assert.deepEqual(articleNeighbours(records, "unknown"), { previous: null, next: null });
  assert.deepEqual(articleNeighbours([records[0]], "story-0"), { previous: null, next: null });
});

test("related stories prefer the same category, exclude current and fill with newest", () => {
  const current = article(10, "Parenting");
  const sameCategory = article(0, "Parenting");
  const others = [article(5), article(4), sameCategory, current];
  assert.deepEqual(relatedArticles(others, current).map(a=>a.slug), ["story-0", "story-5", "story-4"]);
  assert.deepEqual(relatedArticles([current], current), []);
});
