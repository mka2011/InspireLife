import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the spirit behind Roots & Reflections: a placeholder introduction for a former teacher drawn to life, learning, compassion, nature, and reflection.",
  alternates: { canonical: canonicalUrl("/about/") },
};

export default function About() {
  return (
    <Container>
      <article className="mx-auto max-w-[700px] py-14 sm:py-20">
        <p className="eyebrow">About the author</p>
        <h1 className="page-heading mt-5">A life of learning.<br />A little room to reflect.</h1>
        <p className="mt-6 border-y border-divider py-4 font-sans text-sm leading-relaxed text-muted">Placeholder biography: the first-person text below is illustrative copy for design review, awaiting the author’s own introduction.</p>
        <div className="reading-prose mt-8">
          <p>I am a former teacher with an enduring interest in how we learn, how we care for one another, and how we keep growing through the ordinary seasons of life.</p>
          <p>Roots &amp; Reflections is a place to think gently about those questions. Childhood and education belong here, alongside parenting, compassion, the natural world, and the quiet work of understanding ourselves.</p>
          <h2>Learning to pay attention</h2>
          <p>I am drawn to the things that invite us to slow down: a thoughtful conversation, a child’s question, a tree changing with the season. Reflection offers a way of noticing what might otherwise pass us by.</p>
          <p>This journal makes room for curiosity rather than certainty. My hope for it is a warm and welcoming space where a small observation can become the beginning of a larger conversation.</p>
          <h2>A place to begin</h2>
          <p>If these questions feel familiar, you are welcome to explore <Link href="/writings/">the writings</Link> and take a quiet moment with whatever catches your attention.</p>
        </div>
      </article>
    </Container>
  );
}
