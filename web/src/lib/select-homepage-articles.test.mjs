import assert from "node:assert/strict";
import test from "node:test";
import { selectHomepageArticles } from "./select-homepage-articles.ts";

const article = (slug, publishedAt, featured = false) => Object.freeze({
  slug, publishedAt, featured,
  title: slug,
  category: "Nature",
  excerpt: "Illustrative placeholder.",
  readingTimeMinutes: 4,
  isPlaceholder: true,
});

const ids = (articles) => articles.map(({ slug }) => slug);

test("empty collections have no featured story or secondary stories", () => {
  assert.deepEqual(selectHomepageArticles([]), { featured: null, sideStories: [], moreArticles: [] });
});

test("a single story becomes the feature without being repeated", () => {
  const only = article("only", "2026-10-01");
  assert.deepEqual(selectHomepageArticles([only]), { featured: only, sideStories: [], moreArticles: [] });
});

test("the newest explicit feature wins over newer ordinary stories and older features", () => {
  const records = Object.freeze([
    article("old-feature", "2026-09-01", true),
    article("newest", "2026-11-01"),
    article("selected-feature", "2026-10-01", true),
    article("second", "2026-10-28"),
    article("third", "2026-10-20"),
    article("fourth", "2026-10-10"),
    article("older", "2026-09-10"),
  ]);
  const before = [...records];
  const result = selectHomepageArticles(records);
  assert.equal(result.featured.slug, "selected-feature");
  assert.deepEqual(ids(result.sideStories), ["newest", "second", "third", "fourth"]);
  assert.deepEqual(ids(result.moreArticles), ["older", "old-feature"]);
  assert.deepEqual(records, before);
  assert.equal(new Set([result.featured, ...result.sideStories, ...result.moreArticles].map(a => a.slug)).size, records.length);
});

test("without an explicit feature the newest story wins, independent of input order", () => {
  const records = [article("older", "2026-10-01"), article("newest", "2026-11-01"), article("middle", "2026-10-20")];
  const result = selectHomepageArticles(records);
  assert.equal(result.featured.slug, "newest");
  assert.deepEqual(ids(result.sideStories), ["middle", "older"]);
  assert.deepEqual(result.moreArticles, []);
});

test("few-article collections put only available stories into the rails", () => {
  for (let count = 2; count <= 5; count++) {
    const records = Array.from({ length: count }, (_, index) => article(`story-${index}`, `2026-10-0${index + 1}`));
    const result = selectHomepageArticles(records);
    assert.equal(result.sideStories.length, count - 1);
    assert.equal(result.moreArticles.length, 0);
  }
});

test("duplicate slugs cannot repeat a feature or another story", () => {
  const selected = article("feature", "2026-10-01", true);
  const secondary = article("secondary", "2026-09-01");
  const result = selectHomepageArticles([selected, selected, secondary, secondary]);
  assert.equal(result.featured.slug, "feature");
  assert.deepEqual(ids(result.sideStories), ["secondary"]);
});

test("equal dates use deterministic slug ordering", () => {
  assert.equal(selectHomepageArticles([article("b", "2026-10-01"), article("a", "2026-10-01")]).featured.slug, "a");
});
