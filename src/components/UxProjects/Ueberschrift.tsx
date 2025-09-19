import SplitTextAnimation from "../effects/splitText";

function UeberschiftUX() {
  return (
    <section className="bg-[#151515] px-4 pt-20 ">
      <div className="min-h-[35vh] xl:min-h-[50vh] xl:p-8">
        <SplitTextAnimation
          text="Design"
          tag="h4"
          className="text-[#F5FC7B] text-xl sm:text-xl"
          charClass="inline-block"
          animation={{
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: "power3.out",
          }}
          scrollTrigger={{
            start: "top 75%",
            markers: false,
          }}
        />
        <br />
        <SplitTextAnimation
          text="UX/UI Design"
          tag="h3"
          className="text-4xl lg:text-8xl font-bold mb-2 text-[#CEC9C9] uppercase"
          charClass="inline-block"
          animation={{
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: "power3.out",
          }}
          scrollTrigger={{
            start: "top 75%",
            markers: false,
          }}
        />
        <br />
      </div>
    </section>
  );
}

export default UeberschiftUX;
