import type { ComponentPropsWithoutRef } from "react";

export function SectionDivider({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"hr">) {
  return <hr className={`border-0 border-t border-divider ${className}`} {...props} />;
}
