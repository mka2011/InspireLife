import Image from "next/image";
import Link from "next/link";
import { ArticleMetadata } from "@/components/article-metadata";
import type { ArticleSummary } from "@/types/article";

export function ArticleCard({ article, headingLevel = 3, showExcerpt = false }: { article: ArticleSummary; headingLevel?: 2 | 3; showExcerpt?: boolean }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="min-w-0 border-t border-divider pt-7" aria-labelledby={`journal-${article.slug}`}>
      {article.image && (
        <Image
          src={article.image.src}
          alt={article.image.alt}
          width={article.image.width}
          height={article.image.height}
          sizes="(min-width: 1280px) 373px, (min-width: 1024px) 30vw, (min-width: 768px) 46vw, 100vw"
          className="mb-5 aspect-8/5 w-full object-cover"
        />
      )}
      <p className="eyebrow">{article.category}</p>
      <Heading id={`journal-${article.slug}`} className="mt-3 mb-4 text-[1.75rem] leading-[1.15] text-forest">
        <Link href={`/writings/${article.slug}/`} className="underline-offset-4 hover:underline">
          {article.title}
        </Link>
      </Heading>
      {showExcerpt && <p className="mb-4 text-base leading-relaxed text-muted">{article.excerpt}</p>}
      <ArticleMetadata publishedAt={article.publishedAt} />
    </article>
  );
}
