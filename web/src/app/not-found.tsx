import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="page-heading mt-5">A path yet to be written.</h1>
      <p className="mt-6 text-muted">This page may have moved, or the address may be incomplete.</p>
      <Link href="/writings/" className="mt-7 inline-block py-3 font-sans text-sm text-forest underline underline-offset-4">Explore the journal</Link>
    </Container>
  );
}
