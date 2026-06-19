import { Button } from "../button";
import FadeIn from "../effects/fadeIn";
import SplitTextAnimation from "../effects/splitText";
import Image from "next/image";

function ProjectOverview() {
  return (
    <section className="bg-[#151515] px-4 pt-20">
      <div className="min-h-[35vh] xl:min-h-[50vh] xl:p-8">
        <SplitTextAnimation
          text="My Projects"
          tag="h4"
          className="text-[#F5FC7B] text-xl sm:text-xl"
          charClass="inline-block"
          animation={{ y: 100, opacity: 0, duration: 0.8, stagger: 0.03, ease: "power3.out" }}
          scrollTrigger={{ start: "top 75%", markers: false }}
        />
        <br />
        <SplitTextAnimation
          text="Some of my"
          tag="h3"
          className="text-4xl lg:text-8xl font-bold mb-2 text-[#CEC9C9] uppercase"
          charClass="inline-block"
          animation={{ y: 100, opacity: 0, duration: 0.8, stagger: 0.03, ease: "power3.out" }}
          scrollTrigger={{ start: "top 75%", markers: false }}
        />
        <br />
        <SplitTextAnimation
          text="projects i love"
          tag="h3"
          className="text-4xl lg:text-8xl font-bold mb-2 text-[#CEC9C9] uppercase"
          charClass="inline-block"
          animation={{ y: 100, opacity: 0, duration: 0.8, stagger: 0.03, ease: "power3.out" }}
          scrollTrigger={{ start: "top 75%", markers: false }}
        />
        <br />
        <SplitTextAnimation
          text="this"
          tag="h3"
          className="text-4xl lg:text-8xl font-bold mb-2 text-[#CEC9C9] uppercase"
          charClass="inline-block"
          animation={{ y: 100, opacity: 0, duration: 0.8, stagger: 0.03, ease: "power3.out" }}
          scrollTrigger={{ start: "top 75%", markers: false }}
        />
      </div>

      <div className="flex flex-col gap-32 sm:gap-48">
        {/* =========================================== Celeste Home Design =========================================== */}

        {/* Mobile Layout */}
        <FadeIn className="md:hidden flex flex-col gap-2">
          <h2 className="text-2xl uppercase font-bold text-[#CEC9C9] leading-tight">
            Company website for{" "}
            <span
              className="text-transparent stroke-text font-black"
              style={{ WebkitTextStrokeWidth: "1px" }}
            >
              furniture restoration{" "}
            </span>
            and{" "}
            <span
              className="text-transparent stroke-text font-black"
              style={{ WebkitTextStrokeWidth: "1px" }}
            >
              household clearances{" "}
            </span>
          </h2>
          <div className="relative w-full h-[280px]">
            <Image
              src="/image/Celestehomedesign.png"
              alt="Celeste Home Design Website"
              fill
              className="object-contain rounded-xl"
              sizes="100vw"
              quality={90}
              priority
            />
          </div>
          <p className="text-xl text-[#CEC9C9]">
            The site presents the services and products available for sale.
          </p>
          <Button a="https://celestehomedesign.de" text="Visit site" />
        </FadeIn>

        {/* Desktop Layout */}
        <div className="hidden md:grid max-w-6xl w-full grid-cols-2 gap-12 items-center mx-auto">
          <FadeIn className="order-2">
            <div className="relative space-y-6">
              <h2 className="text-2xl xl:text-4xl uppercase font-bold text-[#CEC9C9] leading-tight">
                Company website for{" "}
                <span
                  className="text-transparent stroke-text font-black"
                  style={{ WebkitTextStrokeWidth: "1px" }}
                >
                  furniture restoration{" "}
                </span>
                and{" "}
                <span
                  className="text-transparent stroke-text font-black"
                  style={{ WebkitTextStrokeWidth: "1px" }}
                >
                  household clearances{" "}
                </span>
              </h2>
              <p className="text-xl text-[#CEC9C9] font-bold pb-4">
                The site presents the services and products available for sale.
              </p>
              <Button a="https://celestehomedesign.de" text="Visit site" />
            </div>
          </FadeIn>
          <FadeIn className="order-1">
            <div className="relative w-full h-[500px]">
              <Image
                src="/image/Celestehomedesign.png"
                alt="Celeste Home Design Website"
                fill
                className="object-contain rounded-xl"
                sizes="50vw"
                quality={90}
                priority
              />
            </div>
          </FadeIn>
        </div>

        {/* =========================================== Tunier =========================================== */}

        {/* Mobile Layout */}
        <FadeIn className="md:hidden flex flex-col gap-2">
          <h2 className="text-2xl uppercase font-bold text-[#CEC9C9] leading-tight">
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
          <div className="relative w-full h-[280px]">
            <Image
              src="/image/ForChampions.png"
              alt="For Champions App"
              fill
              className="object-contain rounded-xl"
              sizes="100vw"
              quality={90}
              priority
            />
          </div>
          <p className="text-xl text-[#CEC9C9]">
            they also show you your skills compared to competitors
          </p>
          <Button a="https://champs-front.vercel.app" text="go to the app" />
        </FadeIn>

        {/* Desktop Layout */}
        <div className="hidden md:grid max-w-6xl w-full grid-cols-2 gap-12 items-center mx-auto">
          <FadeIn className="order-1">
            <div className="relative space-y-6">
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
              <p className="text-xl text-[#CEC9C9] font-bold pb-4">
                they also show you your skills compared to competitors
              </p>
              <Button a="https://champs-front.vercel.app" text="go to the app" />
            </div>
          </FadeIn>
          <FadeIn className="order-2">
            <div className="relative w-full h-[500px]">
              <Image
                src="/image/ForChampions.png"
                alt="For Champions App"
                fill
                className="object-contain rounded-xl"
                sizes="50vw"
                quality={90}
                priority
              />
            </div>
          </FadeIn>
        </div>

        {/* =========================================== Moneta =========================================== */}

        {/* Mobile Layout */}
        <FadeIn className="md:hidden flex flex-col gap-2">
          <h2 className="text-2xl uppercase font-bold text-[#CEC9C9] leading-tight">
            Track your{" "}
            <span
              className="text-transparent stroke-text font-black"
              style={{ WebkitTextStrokeWidth: "1px" }}
            >
              expanses{" "}
            </span>
            for full control of your budget
          </h2>
          <div className="relative w-full h-[280px]">
            <Image
              src="/image/Moneta.png"
              alt="Haushaltsbuch App"
              fill
              className="object-contain rounded-xl"
              sizes="100vw"
              quality={90}
              priority
            />
          </div>
          <p className="text-xl text-[#CEC9C9]">Control your spending habits and save more money</p>
          <Button a="https://moneta-frontend.vercel.app" text="Test the app" />
        </FadeIn>

        {/* Desktop Layout */}
        <div className="hidden md:grid max-w-6xl w-full grid-cols-2 gap-12 items-center mx-auto">
          <FadeIn className="order-2">
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
              <p className="text-xl text-[#CEC9C9] font-bold pb-4">
                Control your spending habits and save more money
              </p>
              <Button a="https://moneta-frontend.vercel.app" text="Test the app" />
            </div>
          </FadeIn>
          <FadeIn className="order-1">
            <div className="relative w-full h-[500px]">
              <Image
                src="/image/Moneta.png"
                alt="Haushaltsbuch App"
                fill
                className="object-contain rounded-xl"
                sizes="50vw"
                quality={90}
                priority
              />
            </div>
          </FadeIn>
        </div>
        {/* =========================================== Pokemon =========================================== */}

        {/* Mobile Layout */}
        <FadeIn className="md:hidden flex flex-col gap-2">
          <h2 className="text-2xl uppercase font-bold text-[#CEC9C9] leading-tight">
            I love gaming so i{" "}
            <span
              className="text-transparent stroke-text font-black"
              style={{ WebkitTextStrokeWidth: "1px" }}
            >
              &quot;recreated&quot;{" "}
            </span>
            an old board game
          </h2>
          <div className="relative w-full h-[280px]">
            <Image
              src="/image/pokemon.png"
              alt="Pokemon Boardgame"
              fill
              className="object-contain rounded-xl"
              sizes="100vw"
              quality={90}
              priority
            />
          </div>
          <p className="text-xl text-[#CEC9C9]">and of course i used pokemon for that</p>
          <Button a="https://crzner.github.io/Fast5/" text="Play FastFive" />
        </FadeIn>

        {/* Desktop Layout */}
        <div className="hidden md:grid max-w-6xl w-full grid-cols-2 gap-12 items-center mx-auto">
          <FadeIn className="order-1">
            <div className="relative space-y-4">
              <h2 className="text-2xl xl:text-4xl uppercase font-bold text-[#CEC9C9] leading-tight">
                I love gaming so i{" "}
                <span
                  className="text-transparent stroke-text font-black"
                  style={{ WebkitTextStrokeWidth: "1px" }}
                >
                  &quot;recreated&quot;{" "}
                </span>
                an old board game
              </h2>
              <p className="text-xl text-[#CEC9C9] font-bold pb-4">
                and of course i used pokemon for that
              </p>
              <Button a="https://crzner.github.io/Fast5/" text="Play FastFive" />
            </div>
          </FadeIn>
          <FadeIn className="order-2">
            <div className="relative w-full h-[500px]">
              <Image
                src="/image/pokemon.png"
                alt="Pokemon Boardgame"
                fill
                className="object-contain rounded-xl"
                sizes="50vw"
                quality={90}
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default ProjectOverview;
