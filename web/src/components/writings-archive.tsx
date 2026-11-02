import { ArticleCard } from "@/components/article-card";
import { ArchivePagination } from "@/components/archive-pagination";
import { Container } from "@/components/container";
import type { ArticleSummary } from "@/types/article";

const topicCategories = {
  life: ["Parenting", "Nature"],
  learning: ["Childhood & Learning"],
  reflections: ["Life Reflections", "Personal Growth", "Mindfulness", "Spirituality"],
} as const;

export function WritingsArchive({ articles, currentPage, totalPages }: { articles: readonly ArticleSummary[]; currentPage: number; totalPages: number }) {
  return (
    <Container className="py-10 sm:py-14">
      <header className="mb-10 max-w-2xl">
        <p className="eyebrow">The journal · Illustrative placeholder writing</p>
        <h1 className="page-heading mt-4">All Writings{currentPage > 1 ? ` · Page ${currentPage}` : ""}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">On childhood, the natural world, and a life of paying attention. Browse the journal from the newest reflection to the oldest.</p>
        <p className="mt-4 font-sans text-xs leading-relaxed text-muted">All titles, prose, publication dates, and reading times are illustrative. Page {currentPage} of {totalPages}.</p>
      </header>
      <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => {
          // Preserve the masthead's topic links as jumps to the first relevant story.
          const topic = currentPage === 1 ? Object.entries(topicCategories).find(([, categories]) =>
            categories.some((category) => category === article.category) &&
            !articles.slice(0, index).some((earlier) => categories.some((category) => category === earlier.category)),
          )?.[0] : undefined;
          return <div key={article.slug} id={topic} className="min-w-0"><ArticleCard article={article} headingLevel={2} showExcerpt /></div>;
        })}
      </div>
      {articles.length === 0 && <p className="py-12 text-muted">The journal is taking root. New reflections will appear here soon.</p>}
      <ArchivePagination currentPage={currentPage} totalPages={totalPages} />
    </Container>
  );
}
