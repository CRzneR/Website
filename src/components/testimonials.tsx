import Image from "next/image";

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
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          What people say
        </h2>

        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 max-w-md mx-auto "
          >
            <p className="text-lg text-gray-600 italic">“{t.text}”</p>
            <Image
              src={t.image}
              alt={t.name}
              width={80}
              height={80}
              className="rounded-full border-2 border-purple-500"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">{t.name}</p>
              <p className="text-sm text-gray-500">{t.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
