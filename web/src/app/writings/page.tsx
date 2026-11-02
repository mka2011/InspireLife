import type { Metadata } from "next";
import { WritingsArchive } from "@/components/writings-archive";
import { mockArticles } from "@/data/mock-articles";
import { archivePageCount, paginateArticles } from "@/lib/articles";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "All Writings",
  description: "Browse the Roots & Reflections journal: illustrative writing on childhood, learning, parenting, nature, and personal growth, newest first.",
  alternates: { canonical: canonicalUrl("/writings/") },
};

export default function Writings() {
  return <WritingsArchive articles={paginateArticles(mockArticles, 1) ?? []} currentPage={1} totalPages={archivePageCount(mockArticles)} />;
}
