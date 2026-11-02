import type { ComponentPropsWithoutRef } from "react";

type TreeLogoProps = Omit<ComponentPropsWithoutRef<"svg">, "children">;

// Decorative mark: the adjacent site name supplies its accessible label.
export function TreeLogo({ className = "", ...props }: TreeLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      width="96"
      height="96"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 text-forest ${className}`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M48 8c-8-1-15 5-17 12-9-1-17 6-17 15-8 5-10 16-4 23 4 6 12 8 19 5 5 6 13 7 19 3 7 4 15 3 20-3 8 3 16-1 19-8 3-7 0-15-6-19 0-9-7-16-16-16C63 12 56 7 48 8Z"
      />
      <path
        stroke="var(--background)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M48 65V26m0 23L30 34m18 9 16-15M37 40l-1-13m20 9 12 1M48 58 26 49m33 2 12-7"
      />
      <path
        fill="currentColor"
        d="M45 62h6v12c0 7 7 9 13 11v2c-7 0-12-2-16-6-4 4-9 6-16 6v-2c6-2 13-4 13-11V62Z"
      />
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M25 88h46" />
    </svg>
  );
}
