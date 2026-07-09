"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout573() {
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
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/checklist.svg"
              />
            </div>
            <div>
              <h1 className="mb-3 text-h5 font-bold md:mb-4">What's inside</h1>
              <p>
                A sourcing checklist to audit your current data pipeline for
                hidden risks
              </p>
            </div>
          </div>
          <div className="flex self-start">
            <div className="mr-6 flex-none self-start">
              <img
                className="size-12"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/experiment.svg"
              />
            </div>
            <div>
              <h1 className="mb-3 text-h5 font-bold md:mb-4">Who wrote this</h1>
              <p>
                Two decades of field experience collecting native-speaker data
                across Africa
              </p>
            </div>
          </div>
          <div className="flex self-start">
            <div className="mr-6 flex-none self-start">
              <img
                className="size-12"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/cases.svg"
              />
            </div>
            <div>
              <h1 className="mb-3 text-h5 font-bold md:mb-4">Real results</h1>
              <p>
                Case studies showing how teams cut project waste by forty
                percent
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          <Button title="Download" variant="secondary">
            Download
          </Button>
          <Button
            title="Learn"
            variant="link"
            size="link"
            iconRight={<ChevronRight />}
          >
            Learn
          </Button>
        </div>
      </div>
    </section>
  );
}
