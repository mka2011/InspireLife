import Link from "next/link";
import type { ArticleSummary } from "@/types/article";

export function ArticleNavigation({ previous, next }: { previous: ArticleSummary | null; next: ArticleSummary | null }) {
  if (!previous && !next) return null;
  return (
    <nav aria-label="Adjacent articles" className="mx-auto mt-12 grid max-w-[700px] gap-8 border-t border-divider pt-8 sm:grid-cols-2">
      {previous && (
        <Link href={`/writings/${previous.slug}/`} rel="prev" className="min-w-0 underline-offset-4 hover:underline">
          <span className="eyebrow block">Previous · Older</span>
          <span className="mt-3 block font-heading text-2xl leading-tight text-forest">{previous.title}</span>
        </Link>
      )}
      {next && (
        <Link href={`/writings/${next.slug}/`} rel="next" className="min-w-0 underline-offset-4 hover:underline sm:col-start-2 sm:text-right">
          <span className="eyebrow block">Next · Newer</span>
          <span className="mt-3 block font-heading text-2xl leading-tight text-forest">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}
