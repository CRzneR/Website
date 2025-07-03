import { Button } from "../button";
import FadeIn from "../effects/fadeIn";
import SplitTextAnimation from "../effects/splitText";

function ProjectOverview() {
  return (
    <section className="bg-[#e9e6fb]  px-4 pt-20">
      <div className="min-h-[50vh] p-8">
        <SplitTextAnimation
          text="My Projects"
          tag="h1"
          className="text-[#DDE944] text-2xl"
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
          text="Some of my"
          tag="h1"
          className="text-8xl font-bold mb-2 text-gray-700 uppercase"
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
          text="projects i love"
          tag="h1"
          className="text-8xl font-bold mb-2 text-gray-700 uppercase"
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
          text="this"
          tag="h1"
          className="text-8xl font-bold mb-2 text-gray-700 uppercase"
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
      </div>
      <div className="max-w-6xl w-full min-h-screen grid md:grid-cols-2 gap-12 items-center justify-center mx-auto">
        <FadeIn>
          <div className="relative space-y-6">
            <h2 className="text-4xl uppercase md:text-5xl font-bold text-gray-700 leading-8">
              I love gaming so i{" "}
              <span className="text-transparent stroke-text font-black">
                &quot;recreated&quot;{" "}
              </span>
              an old board game
            </h2>
            <p className="text-xl text-gray-600 font-bold pb-4">
              and of course i used pokemon for that
            </p>
            <Button
              a="https://crzner.github.io/FastFive/"
              text="Play FastFive"
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
                3D-printing{" "}
              </span>
              are part of my life
            </h2>
            <p className="text-xl text-gray-600 font-bold pb-4">
              I love creating my ideas and bring them to reality
            </p>
            <Button
              a="https://rings-2yys7o7o0-crzners-projects.vercel.app"
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
              Competitions are not{" "}
              <span className="text-transparent stroke-text font-black">
                just{" "}
              </span>
              for{" "}
              <span className="text-transparent stroke-text font-black">
                fun
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-bold pb-4">
              they also show you your skills compared to competitors
            </p>
            <Button
              a="https://crzner.github.io/ForChampions/"
              text="go to the app"
              className="mt-6"
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="inline-block border-2 border-white p-2 rounded-xl">
            <div className=" bg-white rounded-lg">
              <img
                src="/image/ForChampions.png"
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
