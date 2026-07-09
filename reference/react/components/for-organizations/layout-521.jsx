"use client";

import { Button } from "@/components/ui/button";
import { BackgroundCard } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout521() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">How we deliver</h2>
            <p className="text-medium">
              A clear path from your initial brief to the final flawless file
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <BackgroundCard className="relative p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-neutral-darkest/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder background image"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-h5 font-bold text-white">
                Discovery and briefing
              </h3>
              <p className="text-white">
                We listen hard to understand your goals, audience, and deadline
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Start
                </Button>
              </div>
            </div>
          </BackgroundCard>
          <BackgroundCard className="relative p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-neutral-darkest/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder background image"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-h5 font-bold text-white">
                Expert matching
              </h3>
              <p className="text-white">
                We handpick a team of native professionals for your specific
                project
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Learn
                </Button>
              </div>
            </div>
          </BackgroundCard>
          <BackgroundCard className="relative p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-neutral-darkest/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder background image"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-h5 font-bold text-white">
                Quality assurance
              </h3>
              <p className="text-white">
                A dedicated manager reviews every piece of work against your
                brief
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Connect
                </Button>
              </div>
            </div>
          </BackgroundCard>
          <BackgroundCard className="relative p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-neutral-darkest/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder background image"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-h5 font-bold text-white">
                Delivery and iteration
              </h3>
              <p className="text-white">
                You receive the work, give feedback, and we refine until perfect
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Connect
                </Button>
              </div>
            </div>
          </BackgroundCard>
        </div>
      </div>
    </section>
  );
}
