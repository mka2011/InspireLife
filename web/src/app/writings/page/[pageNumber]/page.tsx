import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WritingsArchive } from "@/components/writings-archive";
import { mockArticles } from "@/data/mock-articles";
import { archivePageCount, archivePath, paginateArticles } from "@/lib/articles";
import { canonicalUrl } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: archivePageCount(mockArticles) - 1 }, (_, i) => ({ pageNumber: String(i + 2) }));
}

function getPage(pageNumber: string) {
  const page = Number(pageNumber);
  if (!/^\d+$/.test(pageNumber) || String(page) !== pageNumber || page < 2) notFound();
  const articles = paginateArticles(mockArticles, page);
  if (!articles) notFound();
  return { page, articles };
}

export async function generateMetadata({ params }: PageProps<"/writings/page/[pageNumber]">): Promise<Metadata> {
  const { pageNumber } = await params;
  const { page } = getPage(pageNumber);
  return {
    title: `All Writings · Page ${page}`,
    description: `Page ${page} of the Roots & Reflections journal. Explore older illustrative essays on life, learning, nature, and reflection.`,
    alternates: { canonical: canonicalUrl(archivePath(page)) },
  };
}

export default async function ArchivePage({ params }: PageProps<"/writings/page/[pageNumber]">) {
  const { pageNumber } = await params;
  const { page, articles } = getPage(pageNumber);
  return <WritingsArchive articles={articles} currentPage={page} totalPages={archivePageCount(mockArticles)} />;
}
