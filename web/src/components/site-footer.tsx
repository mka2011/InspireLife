import Link from "next/link";
import { Container } from "@/components/container";
import { SectionDivider } from "@/components/section-divider";
import { TreeLogo } from "@/components/tree-logo";
import { footerNavigation, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer>
      <Container>
        <SectionDivider />
        <div className="flex flex-col gap-7 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <TreeLogo className="size-8" />
            <div>
              <p className="font-heading text-2xl leading-tight text-forest">{site.name}</p>
              <p className="mt-1 font-sans text-sm leading-relaxed text-muted">{site.tagline}</p>
            </div>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-1 font-sans text-sm">
              {footerNavigation.map(({ label, href }) => (
                <li key={href}>
                  <Link className="inline-flex min-h-11 items-center underline-offset-4 hover:underline" href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="pb-6 font-sans text-xs leading-relaxed tracking-wide text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
