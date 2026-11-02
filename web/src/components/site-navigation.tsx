"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { primaryNavigation } from "@/lib/site";

export function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="font-sans"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          buttonRef.current?.focus();
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="mx-auto flex min-h-12 items-center gap-3 px-4 text-sm font-semibold tracking-widest uppercase md:hidden"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close menu" : "Menu"}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d={isOpen ? "M4 4l10 10M4 14 14 4" : "M2 5h14M2 9h14M2 13h14"} stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      <ul
        id="primary-navigation"
        className={`${isOpen ? "flex" : "hidden"} flex-col items-stretch pb-3 md:flex md:flex-row md:items-center md:justify-center md:gap-4 md:pb-0 lg:gap-8`}
      >
        {primaryNavigation.map(({ label, href }) => {
          const isCurrent = !href.includes("#") && pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isCurrent ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className="flex min-h-12 items-center justify-center px-3 text-sm tracking-wide text-ink underline-offset-8 hover:text-forest hover:underline aria-[current=page]:text-forest aria-[current=page]:underline"
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
