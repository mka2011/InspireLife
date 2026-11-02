import Link from "next/link";
import { Container } from "@/components/container";
import { SectionDivider } from "@/components/section-divider";
import { SiteNavigation } from "@/components/site-navigation";
import { TreeLogo } from "@/components/tree-logo";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header>
      <Container>
        <div className="site-masthead flex flex-col items-center pt-8 pb-7 text-center sm:pt-10 sm:pb-8">
          <Link href="/" aria-label={`${site.name} — Home`} className="flex flex-col items-center gap-4">
            <TreeLogo className="site-mark size-16 sm:size-20 lg:size-24" />
            <span className="site-title font-heading text-[clamp(2.25rem,7.5vw,5rem)] leading-none font-medium tracking-[-0.045em] text-forest">
              {site.name}
            </span>
          </Link>
          <p className="site-tagline mt-4 max-w-xs font-serif text-base leading-relaxed text-muted italic sm:max-w-none sm:text-lg">
            {site.tagline}
          </p>
        </div>
        <SectionDivider />
        <SiteNavigation />
        <SectionDivider className="border-forest" />
      </Container>
    </header>
  );
}
