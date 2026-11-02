import { FeaturedArticle } from "@/components/featured-article";
import { SideStory } from "@/components/side-story";
import { SectionDivider } from "@/components/section-divider";
import type { HomepageArticles } from "@/lib/select-homepage-articles";

export function EditorialHero({ featured, sideStories }: Pick<HomepageArticles, "featured" | "sideStories">) {
  if (!featured) {
    return <p className="py-12 text-muted">The journal is taking root. New reflections will appear here soon.</p>;
  }

  const rails = [sideStories.slice(0, 2), sideStories.slice(2, 4)];
  const hasSideStories = sideStories.length > 0;

  return (
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-7">
      {/* First in the DOM and on small screens; centered by CSS on desktop. */}
      <div className={hasSideStories ? "min-w-0 lg:col-span-6 lg:col-start-4 lg:row-start-1" : "min-w-0 lg:col-span-8 lg:col-start-3"}>
        <FeaturedArticle article={featured} />
      </div>
      {rails.map((stories, index) => stories.length > 0 && (
        <div
          key={index}
          className={`grid min-w-0 content-start grid-cols-1 gap-8 border-t border-divider pt-8 md:grid-cols-2 lg:col-span-3 lg:row-start-1 lg:grid-cols-1 lg:border-t-0 lg:pt-0 ${index === 0 ? "lg:col-start-1 lg:border-r lg:pr-7" : "lg:col-start-10 lg:border-l lg:pl-7"}`}
        >
          {stories.map((article, storyIndex) => (
            <div key={article.slug} className="min-w-0">
              {storyIndex > 0 && <SectionDivider className="mb-8 md:hidden lg:block" />}
              <SideStory article={article} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
