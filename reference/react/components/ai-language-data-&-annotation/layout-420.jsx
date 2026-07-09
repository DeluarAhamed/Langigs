"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout420() {
  return (
    <section className="pt-24 md:pt-0 scheme-2">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:mr-12 md:ml-[5vw] lg:mr-20">
                <p className="mb-3 font-semibold md:mb-4">Process</p>
                <h2 className="mb-5 text-h2 font-bold md:mb-6">
                  From brief to benchmark dataset in four steps
                </h2>
                <p className="text-medium">
                  A clear process built for machine learning teams. You see
                  every stage. You approve every milestone.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Start" variant="secondary">
                    Start
                  </Button>
                  <Button
                    title="More"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0 flex h-screen flex-col justify-center p-10">
            <div className="max-w-md text-white">
              <h3 className="mb-3 text-h5 font-bold md:mb-4">Define</h3>
              <p>
                You share your model's requirements, target languages, and
                annotation schemas. We build a project plan with clear
                milestones and acceptance criteria.
              </p>
            </div>
            <div className="absolute inset-0 -z-10">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 1"
              />
              <div className="absolute inset-0 bg-neutral-darkest/50" />
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center p-10">
            <div className="max-w-md text-white">
              <h3 className="mb-3 text-h5 font-bold md:mb-4">Define</h3>
              <p>
                You share your model's requirements, target languages, and
                annotation schemas. We build a project plan with clear
                milestones and acceptance criteria.
              </p>
            </div>
            <div className="absolute inset-0 -z-10">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 2"
              />
              <div className="absolute inset-0 bg-neutral-darkest/50" />
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center p-10">
            <div className="max-w-md text-white">
              <h3 className="mb-3 text-h5 font-bold md:mb-4">Define</h3>
              <p>
                You share your model's requirements, target languages, and
                annotation schemas. We build a project plan with clear
                milestones and acceptance criteria.
              </p>
            </div>
            <div className="absolute inset-0 -z-10">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 3"
              />
              <div className="absolute inset-0 bg-neutral-darkest/50" />
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center p-10">
            <div className="max-w-md text-white">
              <h3 className="mb-3 text-h5 font-bold md:mb-4">Define</h3>
              <p>
                You share your model's requirements, target languages, and
                annotation schemas. We build a project plan with clear
                milestones and acceptance criteria.
              </p>
            </div>
            <div className="absolute inset-0 -z-10">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 4"
              />
              <div className="absolute inset-0 bg-neutral-darkest/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
