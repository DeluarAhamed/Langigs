"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout548() {
  return (
    <section className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 scheme-2">
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
          <div>
            <div className="mb-3 md:mb-4">
              <img
                className="size-12"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/map.svg"
              />
            </div>
            <h1 className="mb-3 text-h5 font-bold md:mb-4">The agenda</h1>
            <p>We map your project scope and the outcomes you need to see.</p>
            <div className="mt-5 flex items-center gap-4 md:mt-6">
              <Button
                title="Scope"
                variant="link"
                size="link"
                iconRight={<ChevronRight />}
              >
                Scope
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-3 md:mb-4">
              <img
                className="size-12"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/high_quality.svg"
              />
            </div>
            <h1 className="mb-3 text-h5 font-bold md:mb-4">Quality fit</h1>
            <p>
              We define the accuracy level and cultural nuance your project
              demands.
            </p>
            <div className="mt-5 flex items-center gap-4 md:mt-6">
              <Button
                title="Standards"
                variant="link"
                size="link"
                iconRight={<ChevronRight />}
              >
                Standards
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-3 md:mb-4">
              <img
                className="size-12"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/language.svg"
              />
            </div>
            <h1 className="mb-3 text-h5 font-bold md:mb-4">Language pairing</h1>
            <p>
              We pinpoint the exact African languages and dialects you need.
            </p>
            <div className="mt-5 flex items-center gap-4 md:mt-6">
              <Button
                title="Languages"
                variant="link"
                size="link"
                iconRight={<ChevronRight />}
              >
                Languages
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-3 md:mb-4">
              <img
                className="size-12"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/timeline.svg"
              />
            </div>
            <h1 className="mb-3 text-h5 font-bold md:mb-4">Your timeline</h1>
            <p>
              We align on milestones that respect the work and your deadline.
            </p>
            <div className="mt-5 flex items-center gap-4 md:mt-6">
              <Button
                title="Timeline"
                variant="link"
                size="link"
                iconRight={<ChevronRight />}
              >
                Timeline
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative size-full overflow-hidden lg:min-h-[80vh]">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          alt="Relume placeholder image"
          className="static size-full object-cover lg:absolute lg:inset-0"
        />
      </div>
    </section>
  );
}
