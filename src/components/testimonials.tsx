import Image from "next/image";

interface Testimonial {
  text: string;
  name: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "This project blew me away – amazing attention to detail and creativity!",
    name: "Ash Ketchum",
    image: "/image/ash.jpg",
  },
  {
    text: "I never thought a board game remake could be this fun and nostalgic.",
    name: "Misty",
    image: "/image/misty.jpg",
  },
  {
    text: "The perfect mix of design and passion. Highly recommended!",
    name: "Brock",
    image: "/image/brock.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          What people say
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <p className="text-lg text-gray-600 italic">“{t.text}”</p>
              <Image
                src={t.image}
                alt={t.name}
                width={80}
                height={80}
                className="rounded-full border-2 border-purple-500"
              />
              <p className="text-sm font-semibold text-gray-800">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
