import Image from "next/image";
import SplitTextAnimation from "./effects/splitText";

interface Testimonial {
  text: string;
  name: string;
  position: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Working with Christoph was absolutely great. Not only did he handle his tasks with excellent professionalism, but he also went beyond his actual competencies to support me, which had a significant impact on the success of my project.",
    name: "Nikolaos Dirbanis",
    position: "Founder Conscious Finance",
    image: "/image/Niko.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className=" bg-[#151515] py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <SplitTextAnimation
          text="Testimonials"
          tag="h3"
          className="text-[#F5FC7B] text-md sm:text-xl"
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
          text="What people say"
          tag="h3"
          className="text-3xl  lg:text-8xl font-bold mb-2 text-[#CEC9C9] uppercase"
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

        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 max-w-md mx-auto pt-20 "
          >
            <p className="text-lg text-white italic">“{t.text}”</p>
            <Image
              src={t.image}
              alt={t.name}
              width={80}
              height={80}
              className="rounded-full border-2 border-purple-500"
            />
            <div>
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-sm text-gray-300">{t.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
