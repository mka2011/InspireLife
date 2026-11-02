import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/article-content";
import { ArticleMetadata } from "@/components/article-metadata";
import { ArticleNavigation } from "@/components/article-navigation";
import { RelatedArticles } from "@/components/related-articles";
import { Container } from "@/components/container";
import { mockArticleDetails } from "@/data/mock-article-content";
import { mockArticles } from "@/data/mock-articles";
import { articleNeighbours, relatedArticles } from "@/lib/articles";
import { canonicalUrl } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return mockArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/writings/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = mockArticleDetails.find((article) => article.slug === slug);
  if (!article) notFound();
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: canonicalUrl(`/writings/${article.slug}/`) },
    robots: { index: false, follow: true },
  };
}

export default async function ArticlePage({ params }: PageProps<"/writings/[slug]">) {
  const { slug } = await params;
  const article = mockArticleDetails.find((article) => article.slug === slug);
  if (!article) notFound();
  const neighbours = articleNeighbours(mockArticles, article.slug);

  return (
    <Container className="article-page">
      <article className="pt-10 sm:pt-14">
        <header className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">{article.category}</p>
          <h1 className="page-heading mt-5">{article.title}</h1>
          {article.subtitle && <p className="mx-auto mt-5 max-w-[700px] text-xl leading-relaxed text-muted sm:text-2xl">{article.subtitle}</p>}
          <p className="mt-7 font-sans text-sm text-ink">By {article.author}</p>
          <div className="mt-2 flex justify-center">
            <ArticleMetadata publishedAt={article.publishedAt} readingTimeMinutes={article.readingTimeMinutes} />
          </div>
          <p className="mt-5 font-sans text-xs leading-relaxed text-muted">Illustrative placeholder article. Dates and reading times are mock editorial data.</p>
        </header>
        {article.image && (
          <figure className="mx-auto mt-9 max-w-4xl">
            <Image src={article.image.src} alt={article.image.alt} width={article.image.width} height={article.image.height} preload sizes="(min-width: 1024px) 896px, 100vw" className="max-h-[560px] w-full object-cover" />
            <figcaption className="mt-3 font-sans text-xs leading-relaxed text-muted">Illustrative photograph from Unsplash. {article.image.alt}</figcaption>
          </figure>
        )}
        <div className="mt-10 sm:mt-12">
          <ArticleContent blocks={article.content} />
        </div>
      </article>
      <ArticleNavigation {...neighbours} />
      <RelatedArticles articles={relatedArticles(mockArticles, article)} />
    </Container>
  );
}
