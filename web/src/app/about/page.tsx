import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <Container>
      <section aria-labelledby="about-heading" className="mx-auto max-w-2xl py-20 sm:py-24">
        <p className="eyebrow">Design preview · Placeholder</p>
        <h1 id="about-heading" className="page-heading mt-5">About the author</h1>
        <p className="mt-6 text-muted">This space is reserved for the author’s introduction. A biography will be added once the author’s own words are ready.</p>
      </section>
    </Container>
  );
}
