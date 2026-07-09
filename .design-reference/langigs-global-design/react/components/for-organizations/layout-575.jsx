"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout575() {
  return (
    <section className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 scheme-2">
      <div className="relative order-last size-full overflow-hidden lg:order-first lg:min-h-[80vh]">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          alt="Relume placeholder image"
          className="static size-full object-cover lg:absolute lg:inset-0"
        />
      </div>
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:mr-[5vw] lg:ml-20">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
          <div className="flex self-start">
            <div className="mr-6 flex-none self-start">
              <img
                className="size-12"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/subtitles.svg"
              />
            </div>
            <div>
              <h1 className="mb-3 text-h5 font-bold md:mb-4">Submit a brief</h1>
              <p>
                Describe your project goals, target languages, and timeline and
                we will match you with the right experts
              </p>
              <Button
                className="mt-5 md:mt-6"
                title="Start"
                variant="link"
                size="link"
                iconRight={<ChevronRight />}
              >
                Start
              </Button>
            </div>
          </div>
          <div className="flex self-start">
            <div className="mr-6 flex-none self-start">
              <img
                className="size-12"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/preview.svg"
              />
            </div>
            <div>
              <h1 className="mb-3 text-h5 font-bold md:mb-4">
                Review the proposal
              </h1>
              <p>
                Receive a tailored team and pricing proposal within 24 to 48
                hours with no obligation to proceed
              </p>
              <Button
                className="mt-5 md:mt-6"
                title="Learn"
                variant="link"
                size="link"
                iconRight={<ChevronRight />}
              >
                Learn
              </Button>
            </div>
          </div>
          <div className="flex self-start">
            <div className="mr-6 flex-none self-start">
              <img
                className="size-12"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/call_quality.svg"
              />
            </div>
            <div>
              <h1 className="mb-3 text-h5 font-bold md:mb-4">
                Launch with confidence
              </h1>
              <p>
                Your dedicated project manager handles quality assurance and
                delivery while you focus on the mission
              </p>
              <Button
                className="mt-5 md:mt-6"
                title="Connect"
                variant="link"
                size="link"
                iconRight={<ChevronRight />}
              >
                Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
