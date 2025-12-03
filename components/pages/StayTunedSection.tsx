import { WaitListForm } from "./WaitList";

export function StayTunedSection() {
  return (
    <section
      id="stay-tuned"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-10 md:px-48 py-20">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-16 md:gap-24 max-w-[310px] md:max-w-[645px] w-full">
          {/* Heading */}
          <h2 className="text-[28px] md:text-[44px] font-medium leading-8 md:leading-12 text-white text-left md:text-center font-madetommy">
            Sylvorn Labs is coming
          </h2>

          {/* Email Input Section */}
          <div className="flex flex-col items-center gap-4 w-full">
            {/* Input Field */}
            <div className="relative w-full md:w-auto">
              <WaitListForm />
            </div>

            {/* Privacy Text */}
            <p className="text-sm font-normal leading-[18px] text-center text-white/60 max-w-[243px] font-madetommy">
              By submitting your email you agree to the privacy policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
