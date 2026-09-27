export default function Contact() {
  return (
    <section id="kontakt" className="flex flex-col items-center py-[8vw]">
      <div className="text-left">
        <h3 className="font-display text-[4.4vw] leading-[1.1] text-accent">Work together?</h3>
        <h4 className="font-display text-[4.4vw] leading-[1.1] text-white">
          Let’s build
          <br />
          something
          <br />
          GREAT
        </h4>
      </div>

      <a
        href="mailto:kontakt@christophrenz.de"
        className="group mt-[4vw] inline-flex items-center gap-[0.8vw] rounded-full border border-white/40 px-[2.2vw] py-[0.9vw] text-[1.1vw] uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-[#151515] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        Contact me
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-[0.4vw]"
        >
          →
        </span>
      </a>
    </section>
  );
}
