import Link from "next/link";
import type { ArticleSummary } from "@/types/article";

export function SideStory({ article }: { article: ArticleSummary }) {
  return (
    <article className="min-w-0" aria-labelledby={`side-${article.slug}`}>
      <p className="eyebrow">{article.category}</p>
      <h2 id={`side-${article.slug}`} className="mt-3 text-[1.75rem] leading-[1.15] text-forest">
        <Link href={`/writings/${article.slug}/`} className="underline-offset-4 hover:underline">
          {article.title}
        </Link>
      </h2>
      <p className="mt-3 text-base leading-relaxed text-muted">{article.excerpt}</p>
    </article>
  );
}
