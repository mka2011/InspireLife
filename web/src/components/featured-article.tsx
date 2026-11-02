import Image from "next/image";
import Link from "next/link";
import { ArticleMetadata } from "@/components/article-metadata";
import type { ArticleSummary } from "@/types/article";

export function FeaturedArticle({ article }: { article: ArticleSummary }) {
  return (
    <article className="min-w-0" aria-labelledby={`featured-${article.slug}`}>
      {article.image && (
        <Image
          src={article.image.src}
          alt={article.image.alt}
          width={article.image.width}
          height={article.image.height}
          preload
          sizes="(min-width: 1280px) 560px, (min-width: 1024px) 46vw, 100vw"
          className="mb-6 aspect-5/4 w-full object-cover"
        />
      )}
      <p className="eyebrow">{article.category}</p>
      <h2 id={`featured-${article.slug}`} className="mt-3 text-[clamp(2rem,3.4vw,3rem)] leading-[1.08] text-forest">
        <Link href={`/writings/${article.slug}/`} className="underline-offset-4 hover:underline">
          {article.title}
        </Link>
      </h2>
      <p className="mt-4 text-lg leading-relaxed">{article.excerpt}</p>
      <div className="mt-5">
        <ArticleMetadata publishedAt={article.publishedAt} readingTimeMinutes={article.readingTimeMinutes} />
      </div>
    </article>
  );
}
