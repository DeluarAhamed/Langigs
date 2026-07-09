"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Stats17() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white md:mb-4">Numbers</p>
            <h2 className="mb-5 text-h2 font-bold text-white md:mb-6">
              Precision measured in projects delivered on time
            </h2>
            <p className="text-medium text-white">
              We count what counts. Every project sharpens the network and every
              review raises the bar.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary-alt">Start</Button>
              <Button
                variant="link-alt"
                size="link"
                iconRight={<ChevronRight />}
              >
                Services
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-8 py-2 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            <div className="border-l border-white pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold text-white md:text-[4rem] lg:text-[5rem]">
                2,400+
              </p>
              <h3 className="text-h6 font-bold text-white">
                Vetted native professionals
              </h3>
            </div>
            <div className="border-l border-white pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold text-white md:text-[4rem] lg:text-[5rem]">
                180+
              </p>
              <h3 className="text-h6 font-bold text-white">
                Languages and dialects covered
              </h3>
            </div>
            <div className="border-l border-white pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold text-white md:text-[4rem] lg:text-[5rem]">
                99.2%
              </p>
              <h3 className="text-h6 font-bold text-white">
                Client accuracy rating
              </h3>
            </div>
            <div className="border-l border-white pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold text-white md:text-[4rem] lg:text-[5rem]">
                15,000+
              </p>
              <h3 className="text-h6 font-bold text-white">
                Projects delivered on time
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 aspect-video size-full object-cover"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
