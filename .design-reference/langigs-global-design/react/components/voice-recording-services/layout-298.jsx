"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout298() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 max-w-lg md:mb-18 lg:mb-20">
            <div>
              <p className="mb-3 text-center font-semibold md:mb-4">Process</p>
              <h2 className="mb-5 text-center text-h2 font-bold md:mb-6">
                From script to sound file in four steps
              </h2>
              <p className="text-center text-medium">
                A clean workflow that respects the deadline and the craft. No
                noise, just signal.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/speaker.svg"
                />
              </div>
              <h3 className="mb-3 text-center text-h5 font-bold md:mb-4">
                You provide the script and speaker profile
              </h3>
              <p className="text-center">
                Share your technical requirements, tone, and demographic needs.
                We listen.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/speaker.svg"
                />
              </div>
              <h3 className="mb-3 text-center text-h5 font-bold md:mb-4">
                We source and vet native speakers
              </h3>
              <p className="text-center">
                We match your brief to the best voices in our vetted network.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/monitoring.svg"
                />
              </div>
              <h3 className="mb-3 text-center text-h5 font-bold md:mb-4">
                Recording with technical oversight
              </h3>
              <p className="text-center">
                Sessions run in controlled environments with our team monitoring
                for quality.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/files.svg"
                />
              </div>
              <h3 className="mb-3 text-center text-h5 font-bold md:mb-4">
                Validation, cleaning, and delivery
              </h3>
              <p className="text-center">
                Files are checked, cleaned, formatted, and delivered ready for
                your pipeline.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Submit" variant="secondary">
              Submit
            </Button>
            <Button
              title="Learn"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Learn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
