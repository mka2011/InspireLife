import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionDivider } from "@/components/section-divider";

export const metadata: Metadata = { title: "All Writings" };

export default function Writings() {
  return (
    <Container>
      <div className="mx-auto max-w-2xl py-16 sm:py-20">
        <p className="eyebrow">Design preview · Placeholder</p>
        <h1 className="page-heading mt-5">All Writings</h1>
        <p className="mt-6 text-muted">The writing collection will take shape here. Articles and the archive are planned for a later phase.</p>
        <SectionDivider className="my-10" />
        <div className="space-y-10">
          <section id="life" aria-labelledby="life-heading">
            <h2 id="life-heading" className="text-3xl text-forest">Life</h2>
            <p className="mt-3 text-muted">A future home for writing about everyday life, parenting, and nature.</p>
          </section>
          <section id="learning" aria-labelledby="learning-heading">
            <h2 id="learning-heading" className="text-3xl text-forest">Learning</h2>
            <p className="mt-3 text-muted">A future home for writing about childhood, education, and discovery.</p>
          </section>
          <section id="reflections" aria-labelledby="reflections-heading">
            <h2 id="reflections-heading" className="text-3xl text-forest">Reflections</h2>
            <p className="mt-3 text-muted">A future home for writing about personal growth and the inner life.</p>
          </section>
        </div>
      </div>
    </Container>
  );
}
