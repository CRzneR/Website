import { Button } from "../button";
import FadeIn from "../effects/fadeIn";
import SplitTextAnimation from "../effects/splitText";
import Image from "next/image";

function ProjectOverview() {
  return (
    <section className="bg-[#151515] px-4 pt-20 ">
      <div className="min-h-[35vh] xl:min-h-[50vh] xl:p-8">
        <SplitTextAnimation
          text="My Projects"
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
          text="Some of my"
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
        <SplitTextAnimation
          text="projects i love"
          tag="h3"
          className="text-4xl  lg:text-8xl  font-bold mb-2 text-[#CEC9C9] uppercase"
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
          tag="h3"
          className="text-4xl  lg:text-8xl font-bold mb-2 text-[#CEC9C9] uppercase"
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
      <div className="max-w-6xl w-full  grid md:grid-cols-2 gap-8 items-center justify-center mx-auto">
        <FadeIn>
          <div className="relative space-y-4">
            <h2 className=" text-2xl xl:text-4xl uppercase md:text-5xl font-bold text-[#CEC9C9] leading-8">
              I love gaming so i{" "}
              <span
                className="text-transparent stroke-text font-black"
                style={{ WebkitTextStrokeWidth: "1px" }}
              >
                &quot;recreated&quot;{" "}
              </span>
              an old board game
            </h2>
            <p className="text-xl text-[#CEC9C9] md:font-bold pb-4">
              and of course i used pokemon for that
            </p>
            <Button a="https://crzner.github.io/Fast5/" text="Play FastFive" />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="relative w-full h-[200px] xl:h-[500px]">
            <Image
              src="/image/pokemon.png"
              alt="3D Printed Rings"
              fill
              className="object-contain rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              priority
            />
          </div>
        </FadeIn>
      </div>

      <div className="max-w-6xl w-full h-[50%] grid md:grid-cols-2 gap-12 items-center justify-center mx-auto">
        <FadeIn>
          <div className="hidden lg:block relative h-[200px] xl:h-[500px]">
            <Image
              src="/image/Rings.png"
              alt="3D Printed Rings"
              fill
              className="object-contain rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              priority
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="relative space-y-6">
            <h2 className="text-2xl xl:text-4xl uppercase font-bold text-[#CEC9C9] leading-tight">
              <span
                className="text-transparent stroke-text font-black"
                style={{ WebkitTextStrokeWidth: "1px" }}
              >
                CAD{" "}
              </span>
              and{" "}
              <span
                className="text-transparent stroke-text font-black"
                style={{ WebkitTextStrokeWidth: "1px" }}
              >
                3D-printing{" "}
              </span>
              are part of my life
            </h2>
            <p className="text-xl text-[#CEC9C9] md:font-bold pb-4">
              I love creating my ideas and bring them to reality
            </p>
            <Button a="https://rings-nu.vercel.app" text="Visit site" className="mt-6" />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="block lg:hidden relative h-[200px] xl:h-[500px]">
            <Image
              src="/image/Rings.png"
              alt="3D Printed Rings"
              fill
              className="object-contain rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              priority
            />
          </div>
        </FadeIn>
      </div>

      <div className="max-w-6xl w-full h-[50%] grid md:grid-cols-2 gap-12 items-center justify-center mx-auto">
        <FadeIn>
          <div className="relative space-y-6 pt-8 xl:pt-0">
            <h2 className="text-2xl xl:text-4xl uppercase font-bold text-[#CEC9C9] leading-tight">
              Competitions are{" "}
              <span
                className="text-transparent stroke-text font-black"
                style={{ WebkitTextStrokeWidth: "1px" }}
              >
                not{" "}
              </span>
              just for{" "}
              <span
                className="text-transparent stroke-text font-black"
                style={{ WebkitTextStrokeWidth: "1px" }}
              >
                fun{" "}
              </span>
            </h2>
            <p className="text-xl text-[#CEC9C9] md:font-bold pb-4">
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
          <div className="relative w-full h-[200px] xl:h-[500px]">
            <Image
              src="/image/ForChampions.png"
              alt="3D Printed Rings"
              fill
              className="object-contain rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              priority
            />
          </div>
        </FadeIn>
      </div>

      <div className="max-w-6xl w-full h-[50%] grid md:grid-cols-2 gap-12 items-center justify-center mx-auto">
        <FadeIn>
          <div className="hidden lg:block relative h-[200px] xl:h-[500px]">
            <Image
              src="/image/Moneta.png"
              alt="Haushaltsbuch App"
              fill
              className="object-contain rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              priority
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="relative space-y-6">
            <h2 className="text-2xl xl:text-4xl uppercase font-bold text-[#CEC9C9] leading-tight">
              Track your{" "}
              <span
                className="text-transparent stroke-text font-black"
                style={{ WebkitTextStrokeWidth: "1px" }}
              >
                expanses{" "}
              </span>
              for full control of your budget
            </h2>
            <p className="text-xl text-[#CEC9C9] md:font-bold pb-4">
              Control your spending habits and save more money
            </p>
            <Button a="https://moneta-frontend.vercel.app/" text="Test the app" className="mt-6" />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="block lg:hidden relative h-[200px] xl:h-[500px]">
            <Image
              src="/image/Moneta.png"
              alt="3D Printed Rings"
              fill
              className="object-contain rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default ProjectOverview;
