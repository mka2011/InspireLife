import type { Metadata } from "next";
import { Newsreader, Source_Serif_4, Source_Sans_3 } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: "Reflections on life, learning, nature, and personal growth. On life, learning, and the art of growing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${sourceSerif.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a href="#main-content" className="sr-only fixed top-4 left-4 z-50 bg-forest px-5 py-3 font-sans text-sm text-background focus:not-sr-only">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
