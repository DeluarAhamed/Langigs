"use client";

import { Button } from "@/components/ui/button";
import { BackgroundCard } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout526() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Benefits</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              The Langigs advantage
            </h2>
            <p className="text-medium">
              Why the best data comes from a human network, not a script.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            <BackgroundCard className="relative flex flex-col justify-center p-6 md:p-8 lg:min-h-[32rem]">
              <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-neutral-darkest/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder background image"
                />
              </div>
              <div className="relative z-10">
                <div>
                  <p className="mb-2 inline-block text-small font-semibold text-white">
                    Access
                  </p>
                  <h3 className="mb-3 text-h4 font-bold text-white md:mb-4">
                    Reach communities that other networks cannot touch
                  </h3>
                  <p className="text-white">
                    We source participants from over 2,000 African languages and
                    remote regions.
                  </p>
                </div>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    variant="link-alt"
                    size="link"
                    iconRight={<ChevronRight className="text-white" />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </BackgroundCard>
            <BackgroundCard className="relative flex flex-col p-6 md:p-8">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-neutral-darkest/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder background image"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                      className="size-12"
                      alt="Relume logo"
                    />
                  </div>
                  <h3 className="mb-3 text-h4 font-bold text-white md:mb-4">
                    Cultural competence in every interaction and data point
                  </h3>
                  <p className="text-white">
                    Our native linguists ensure questions and responses are
                    culturally sound.
                  </p>
                </div>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    variant="link-alt"
                    size="link"
                    iconRight={<ChevronRight className="text-white" />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </BackgroundCard>
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            <BackgroundCard className="relative flex flex-col p-6 md:p-8">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-neutral-darkest/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder background image"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                      className="size-12"
                      alt="Relume logo"
                    />
                  </div>
                  <h3 className="mb-3 text-h4 font-bold text-white md:mb-4">
                    Scale from a pilot study to a national program
                  </h3>
                  <p className="text-white">
                    We handle logistics, recruitment, and validation so you can
                    scale fast.
                  </p>
                </div>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    variant="link-alt"
                    size="link"
                    iconRight={<ChevronRight className="text-white" />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </BackgroundCard>
            <BackgroundCard className="relative flex flex-col justify-center p-6 md:p-8 lg:min-h-[32rem]">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-neutral-darkest/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder background image"
                />
              </div>
              <div className="relative z-10">
                <p className="mb-2 inline-block text-small font-semibold text-white">
                  Compliance
                </p>
                <h3 className="mb-3 text-h4 font-bold text-white md:mb-4">
                  GDPR-compliant processes with a full chain of custody
                </h3>
                <p className="text-white">
                  Every dataset arrives with documented consent and privacy
                  protection.
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    variant="link-alt"
                    size="link"
                    iconRight={<ChevronRight className="text-white" />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </BackgroundCard>
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            <BackgroundCard className="relative flex flex-col justify-center p-6 md:p-8 lg:min-h-[32rem]">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-neutral-darkest/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder background image"
                />
              </div>
              <div className="relative z-10">
                <p className="mb-2 inline-block text-small font-semibold text-white">
                  Reliability
                </p>
                <h3 className="mb-3 text-h4 font-bold text-white md:mb-4">
                  Clean, validated datasets delivered on a clear timeline
                </h3>
                <p className="text-white">
                  We validate twice so your team does not have to do it once.
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    variant="link-alt"
                    size="link"
                    iconRight={<ChevronRight className="text-white" />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </BackgroundCard>
            <BackgroundCard className="relative flex flex-col p-6 md:p-8">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-neutral-darkest/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder background image"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                      className="size-12"
                      alt="Relume logo"
                    />
                  </div>
                  <h3 className="mb-3 text-h4 font-bold text-white md:mb-4">
                    A single point of contact for complex, multi-country
                    projects
                  </h3>
                  <p className="text-white">
                    Your dedicated project manager handles the chaos so you see
                    only results.
                  </p>
                  <div className="mt-5 flex items-center md:mt-6">
                    <Button
                      variant="link-alt"
                      size="link"
                      iconRight={<ChevronRight className="text-white" />}
                    >
                      Learn
                    </Button>
                  </div>
                </div>
              </div>
            </BackgroundCard>
          </div>
        </div>
      </div>
    </section>
  );
}
