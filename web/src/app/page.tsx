import type { Metadata } from "next";
import { Container } from "@/components/container";
import { EditorialHero } from "@/components/editorial-hero";
import { MoreFromJournal } from "@/components/more-from-journal";
import { mockArticles } from "@/data/mock-articles";
import { selectHomepageArticles } from "@/lib/select-homepage-articles";

export const metadata: Metadata = {
  description: "The latest illustrative reflections on childhood, learning, parenting, nature, and the art of growing from Roots & Reflections.",
};

export default function Home() {
  const { featured, sideStories, moreArticles } = selectHomepageArticles(mockArticles);

  return (
    <Container className="pb-6">
      <section aria-labelledby="latest-heading" className="pt-8 sm:pt-10">
        <div className="mb-7 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
          <h1 id="latest-heading" className="text-3xl text-forest sm:text-4xl">The Latest Reflections</h1>
          <p className="max-w-sm font-sans text-xs leading-relaxed text-muted">Design preview · All stories, dates, and reading times are illustrative placeholders.</p>
        </div>
        <EditorialHero featured={featured} sideStories={sideStories} />
      </section>
      <MoreFromJournal articles={moreArticles} />
    </Container>
  );
}
