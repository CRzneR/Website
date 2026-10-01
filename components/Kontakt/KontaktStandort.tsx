import Reveal from "@/components/Effects/Reveal";

export default function KontaktStandort() {
  return (
    <section className="relative overflow-hidden px-5 pt-12 md:px-[6.5vw] md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.5fr_1fr]">
        {/* ---------- Globus ---------- */}

        {/* ---------- Claim ---------- */}
        <Reveal delay={0.2} className="pb-16 md:pb-24">
          <span aria-hidden="true" className="block h-px w-10 bg-accent" />
          <p className="my-8 font-display text-4xl leading-[1.1] text-white lg:text-5xl">
            Good ideas
            <br />
            deserve
            <br />
            <span className="text-accent">real results.</span>
          </p>
          <span aria-hidden="true" className="block h-px w-10 bg-accent" />
        </Reveal>
      </div>
    </section>
  );
}
