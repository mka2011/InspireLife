import Link from "next/link";
import { primaryNavigation } from "@/lib/site";

function NavigationLinks() {
  return primaryNavigation.map(({ label, href }) => (
    <li key={href}>
      <Link href={href} className="flex min-h-12 items-center justify-center px-3 text-sm tracking-wide text-ink underline-offset-8 hover:text-forest hover:underline">
        {label}
      </Link>
    </li>
  ));
}

export function SiteNavigation() {
  return (
    <nav aria-label="Primary" className="font-sans">
      <details className="group md:hidden">
        <summary className="mx-auto flex min-h-12 w-fit cursor-pointer list-none items-center gap-3 px-4 text-sm font-semibold tracking-widest uppercase [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">Menu</span>
          <span className="hidden group-open:inline">Close menu</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path className="group-open:hidden" d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" />
            <path className="hidden group-open:block" d="M4 4l10 10M4 14 14 4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </summary>
        <ul className="flex flex-col pb-3"><NavigationLinks /></ul>
      </details>
      <ul className="hidden items-center justify-center gap-4 md:flex lg:gap-8"><NavigationLinks /></ul>
    </nav>
  );
}
