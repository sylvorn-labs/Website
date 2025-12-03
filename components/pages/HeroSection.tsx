import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 md:px-8">
        {/* Hero Content */}
        <div className="flex flex-col items-center gap-10 md:gap-16 max-w-[342px] md:max-w-[645px] w-full">
          {/* Text Content */}
          <div className="flex flex-col items-center gap-16 md:gap-16 w-full">
            {/* Headings */}
            <div className="flex flex-col items-center gap-0 w-full">
              <h1 className="text-[32px] md:text-[64px] font-normal leading-10 md:leading-[76px] text-center text-white font-madetommy">
                Crafting the Future,
              </h1>
              <h1 className="text-[32px] md:text-[64px] font-normal leading-10 md:leading-[76px] text-center text-white font-madetommy">
                One Line at a Time
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xs font-normal leading-4 text-center text-white font-madetommy">
              Crafted today, built for tomorrow&apos;s challenges.
            </p>
          </div>

          {/* Learn More CTA */}
          <Link
            href="#about"
            className="flex items-center gap-2 opacity-60 hover:opacity-80 transition-opacity"
          >
            <span className="text-[10px] md:text-xs font-normal leading-4 text-center text-[rgb(227,236,255)] uppercase tracking-wider font-madetommy">
              Learn More
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4v8m0 0L4.5 9.09M8 12l3.5-2.91"
                stroke="#E3ECFF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
