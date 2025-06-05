import { Button } from "../button";
import FadeIn from "../effects/fadeIn";

function ProjectOverview() {
  return (
    <section className="bg-[#e9e6fb]  px-6 pt-20">
      <div className="max-w-6xl w-full h-[25%] items-center justify-center mx-auto">
        <h4 className="text-[#DDE944] text-2xl">My Projects</h4>
        <h2 className="text-8xl uppercase font-bold text-gray-700">
          some of my <br /> projects{" "}
          <span className="text-transparent stroke-text font-black">
            i love <br />
          </span>
          this
        </h2>
      </div>

      <div className="max-w-6xl w-full min-h-screen grid md:grid-cols-2 gap-12 items-center justify-center mx-auto">
        <FadeIn>
          <div className="relative space-y-6">
            <h2 className="text-4xl uppercase md:text-5xl font-bold text-gray-700 leading-8">
              I love gaming so i{" "}
              <span className="text-transparent stroke-text font-black">
                "recreated"{" "}
              </span>
              an old board game
            </h2>
            <p className="text-xl text-gray-600 font-bold">
              and of course i used pokemon for that
            </p>
            <Button
              a="https://crzner.github.io/FastFive/"
              text="Play FastFive"
              className="mt-6"
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="inline-block border-2 border-white p-2 rounded-xl">
            <div className=" bg-white rounded-lg">
              <img
                src="/image/pokemon.png"
                alt="Abgerundetes Bild"
                className="rounded-xl border-2 border-white relative z-1"
              />
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="max-w-6xl w-full h-[50%] grid md:grid-cols-2 gap-12 items-center justify-center mx-auto">
        <FadeIn>
          <div className="inline-block border-2 border-white p-2 rounded-xl">
            <div className=" bg-white rounded-lg">
              <img
                src="/image/Rings.png"
                alt="Abgerundetes Bild"
                className="rounded-xl border-2 border-white relative z-1"
              />
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="relative space-y-6">
            <h2 className="text-4xl uppercase md:text-5xl font-bold text-gray-700 leading-tight">
              <span className="text-transparent stroke-text font-black">
                CAD{" "}
              </span>
              and{" "}
              <span className="text-transparent stroke-text font-black">
                3D printing{" "}
              </span>
              are part of my life
            </h2>
            <p className="text-xl text-gray-600 font-bold">
              I love creating my ideas and bring them to reality
            </p>
            <Button
              a="https://crzner.github.io/FastFive/"
              text="Visit site"
              className="mt-6"
            />
          </div>
        </FadeIn>
      </div>

      <div className="max-w-6xl w-full min-h-screen grid md:grid-cols-2 gap-12 items-center justify-center mx-auto">
        <FadeIn>
          <div className="relative space-y-6">
            <h2 className="text-4xl uppercase md:text-5xl font-bold text-gray-700 leading-tight">
              <span className="text-transparent stroke-text font-black">
                CAD
              </span>
              and
              <span className="text-transparent stroke-text font-black">
                3D printing
              </span>
              are part of my life
            </h2>
            <p className="text-xl text-gray-600 font-bold">
              I love creating my ideas and bring them to reality
            </p>
            <Button text="play a round" />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="inline-block border-2 border-white p-2 rounded-xl">
            <div className=" bg-white rounded-lg">
              <img
                src="/image/pokemon.png"
                alt="Abgerundetes Bild"
                className="rounded-xl border-2 border-white relative z-1"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default ProjectOverview;
