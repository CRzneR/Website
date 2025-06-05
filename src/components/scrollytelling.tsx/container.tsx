import Image from "next/image";
import ToolList from "./toolLost";

export function Container() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 max-w-6xl mx-auto">
        {/* Text */}
        <div className="max-w-xl">
          <p className="text-gray-600 text-lg mb-2">This is my story</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Vertania City ist eine fiktive Stadt, die sich selbst als grüne und
            moderne Stadt sieht.
          </h2>
        </div>

        {/* Image */}
        <div className="w-full md:w-auto max-w-sm">
          <Image
            src="/my-story.png" // Pfad anpassen
            alt="Portrait"
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </div>
      </section>
      <ToolList />
    </>
  );
}
