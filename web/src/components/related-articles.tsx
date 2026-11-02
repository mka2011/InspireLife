import { ArticleCard } from "@/components/article-card";
import { SectionDivider } from "@/components/section-divider";
import type { ArticleSummary } from "@/types/article";

export function RelatedArticles({ articles }: { articles: readonly ArticleSummary[] }) {
  if (articles.length === 0) return null;
  return (
    <section aria-labelledby="related-heading" className="mt-16 pb-16">
      <SectionDivider className="border-forest" />
      <h2 id="related-heading" className="pt-7 pb-6 text-3xl text-forest sm:text-4xl">Related reflections</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
      </div>
    </section>
  );
}
