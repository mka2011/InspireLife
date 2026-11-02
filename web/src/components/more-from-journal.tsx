import { ArticleCard } from "@/components/article-card";
import { SectionDivider } from "@/components/section-divider";
import type { ArticleSummary } from "@/types/article";

export function MoreFromJournal({ articles }: { articles: readonly ArticleSummary[] }) {
  if (articles.length === 0) return null;

  return (
    <section aria-labelledby="journal-heading" className="mt-12 pb-16 sm:mt-16 sm:pb-20">
      <SectionDivider className="border-forest" />
      <h2 id="journal-heading" className="pt-7 pb-6 text-3xl text-forest sm:text-4xl">More from the Journal</h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
      </div>
    </section>
  );
}
