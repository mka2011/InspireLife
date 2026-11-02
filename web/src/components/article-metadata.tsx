import type { ArticleSummary } from "@/types/article";

type ArticleMetadataProps = Pick<ArticleSummary, "publishedAt"> &
  Partial<Pick<ArticleSummary, "readingTimeMinutes">>;

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function ArticleMetadata({ publishedAt, readingTimeMinutes }: ArticleMetadataProps) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-xs leading-relaxed tracking-wide text-muted">
      <time dateTime={publishedAt}>{dateFormatter.format(new Date(publishedAt))}</time>
      {readingTimeMinutes !== undefined && (
        <>
          <span aria-hidden="true">·</span>
          <span>{readingTimeMinutes} min read</span>
        </>
      )}
    </p>
  );
}
