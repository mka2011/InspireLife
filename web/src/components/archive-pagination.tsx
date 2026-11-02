import Link from "next/link";
import { archivePath } from "@/lib/articles";

export function ArchivePagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  if (totalPages <= 1) return null;
  return (
    <nav aria-label="Archive pagination" className="mt-12 flex flex-wrap items-center justify-center gap-3 border-t border-divider pt-7 font-sans text-sm">
      {currentPage > 1 && <Link rel="prev" className="px-3 py-3 underline underline-offset-4" href={archivePath(currentPage - 1)}>Newer writings</Link>}
      <ol className="flex flex-wrap gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <Link href={archivePath(page)} aria-label={`Archive page ${page}`} aria-current={page === currentPage ? "page" : undefined} className="inline-flex min-h-11 min-w-11 items-center justify-center text-forest underline-offset-4 hover:underline aria-[current=page]:bg-forest aria-[current=page]:text-background">{page}</Link>
          </li>
        ))}
      </ol>
      {currentPage < totalPages && <Link rel="next" className="px-3 py-3 underline underline-offset-4" href={archivePath(currentPage + 1)}>Older writings</Link>}
    </nav>
  );
}
