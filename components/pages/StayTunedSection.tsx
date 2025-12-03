"use client";

import { useIsAlreadySignedUp, useIsError } from "@/store/zustand";
import { WaitListForm } from "./WaitList";
import Link from "next/link";

export function StayTunedSection() {
  const isError = useIsError((state) => state.isError);
  const isAlreadySignedUp = useIsAlreadySignedUp((state) => state.isSignedUp);

  return (
    <section
      id="stay-tuned"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-10 md:px-48 py-20">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-16 md:gap-24 max-w-[310px] md:max-w-[645px] w-full">
          {isAlreadySignedUp || isError ? (
            /* Success/Error Message */
            <div className="flex flex-col items-center gap-4 max-w-[465px] w-full">
              <h2 className="text-[28px] md:text-[44px] font-medium leading-12 text-white text-center font-madetommy">
                {isError ? "Oops!" : "Thank You"}
              </h2>
              <p className="text-[28px] md:text-[44px] font-medium leading-12 text-white/60 text-center font-madetommy">
                {isError
                  ? "Something went wrong."
                  : "Your submission has been successfully sent."}
              </p>
            </div>
          ) : (
            <>
              {/* Heading */}
              <h2 className="text-[28px] md:text-[44px] font-medium leading-8 md:leading-12 text-white text-center font-madetommy">
                Sylvorn Labs is coming
              </h2>

              {/* Email Input Section */}
              <div className="flex flex-col items-center gap-4 w-full">
                {/* Input Field */}
                {/*<div className="w-full md:w-auto">*/}
                <WaitListForm />
                {/*</div>*/}

                {/* Privacy Text */}
                <p className="text-sm font-normal leading-[18px] text-center text-white/60 max-w-[243px] font-madetommy">
                  By submitting your email you agree to the{" "}
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    className="underline"
                  >
                    <span className="underline">privacy policy</span>
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
