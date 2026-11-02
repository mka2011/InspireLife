export const site = {
  name: "Roots & Reflections",
  tagline: "On life, learning, and the art of growing",
};

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "All Writings", href: "/writings/" },
  { label: "Life", href: "/writings/#life" },
  { label: "Learning", href: "/writings/#learning" },
  { label: "Reflections", href: "/writings/#reflections" },
  { label: "About", href: "/about/" },
] as const;

export const footerNavigation = primaryNavigation.filter(({ label }) =>
  ["Home", "All Writings", "About"].includes(label),
);
