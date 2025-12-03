import { TextGenerateEffect } from "../ui/text-generate-effect";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-start justify-center px-10 md:px-48 py-20 md:py-32">
        {/* Main Heading */}

        <TextGenerateEffect
          as={"h2"}
          className="text-[28px] md:text-[44px] font-medium leading-8 md:leading-12 text-white max-w-[271px] md:max-w-[437px] mb-16 md:mb-24 font-madetommy"
          words="Sylvorn Labs is a software innovation studio crafting intuitive,
        scalable solutions for modern digital ecosystems."
        />
        {/* Description Text - Mobile and Desktop Layout */}
        <div className="flex flex-col gap-20 md:gap-0 md:flex-row md:justify-between w-full">
          {/* Spacer for desktop to push content to right */}
          <div className="hidden md:block md:w-[437px]" />

          {/* Description Content */}
          <div className="flex flex-col gap-8 md:gap-16 max-w-[308px] md:max-w-[434px]">
            <TextGenerateEffect
              as={"p"}
              className="text-sm md:text-xl font-normal leading-[18px] md:leading-7 text-white font-madetommy"
              words="Sylvorn Labs builds intuitive, scalable software for today's
            evolving digital landscape — delivering future-ready solutions
            with clarity, efficiency, and reliable performance."
            />

            <TextGenerateEffect
              as={"p"}
              className="text-sm md:text-xl font-normal leading-[18px] md:leading-7 text-white max-w-[234px] md:max-w-[335px] font-madetommy"
              words="Sylvorn's adaptive architecture ensures best-in-class results
            across every modern software strategy."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
