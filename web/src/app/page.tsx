import { Container } from "@/components/container";

export default function Home() {
  return (
    <Container>
      <section aria-labelledby="welcome-heading" className="mx-auto max-w-3xl py-20 text-center sm:py-24 lg:py-28">
        <p className="eyebrow">A place to pause & grow</p>
        <h1 id="welcome-heading" className="page-heading mt-6">
          Rooted in experience.<br />Open to possibility.
        </h1>
        <div aria-hidden="true" className="mx-auto my-8 h-px w-16 bg-leaf" />
        <p className="mx-auto max-w-xl text-lg leading-relaxed sm:text-xl">
          Welcome to Roots &amp; Reflections. A quiet space for thinking about
          life, learning, and the small, everyday moments that help us grow.
        </p>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted">
          There is always something to notice, something to learn, and room to
          see the familiar a little differently.
        </p>
        <p className="mt-10 font-sans text-xs tracking-widest text-muted uppercase">
          Design preview · Placeholder welcome copy
        </p>
      </section>
    </Container>
  );
}
