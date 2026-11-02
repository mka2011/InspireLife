export type ArticleCategory =
  | "Childhood & Learning"
  | "Parenting"
  | "Life Reflections"
  | "Personal Growth"
  | "Nature"
  | "Mindfulness"
  | "Spirituality";

export interface ArticleImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ArticleSummary {
  slug: string;
  title: string;
  category: ArticleCategory;
  excerpt: string;
  /** ISO 8601 publication date. */
  publishedAt: string;
  readingTimeMinutes: number;
  featured?: boolean;
  image?: ArticleImage;
  isPlaceholder: true;
}

export type InlineContent =
  | { type: "text"; text: string; bold?: boolean; italic?: boolean }
  | { type: "link"; text: string; href: string };

export type ArticleBlock =
  | { type: "paragraph"; content: readonly InlineContent[] }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; ordered?: boolean; items: readonly string[] }
  | { type: "quote"; text: string }
  | { type: "image"; image: ArticleImage; caption: string };

export interface Article extends ArticleSummary {
  subtitle?: string;
  author: string;
  content: readonly ArticleBlock[];
}
