"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout239() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Process</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                From brief to delivery in three clear steps
              </h2>
              <p className="text-medium">
                We strip away the complexity. You get a dedicated project lead
                and a transparent workflow from the first message to the final
                file.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://d1p38huyj6upaa.cloudfront.net/default-45.jpg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                Submit your brief
              </h3>
              <p>Tell us what you need and we listen hard.</p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://d1p38huyj6upaa.cloudfront.net/default-44.jpg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                We match the talent
              </h3>
              <p>Your project goes to the right vetted native expert.</p>
            </div>
            <div className="flex w-full flex-col flex-nowrap justify-start text-center">
              <div className="mx-auto mb-6 w-full md:mb-8">
                <img
                  src="https://d1p38huyj6upaa.cloudfront.net/default-17.jpg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-5 text-h4 font-bold md:mb-6">
                You receive the work
              </h3>
              <p>Reviewed, polished, and delivered on your deadline.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button variant="secondary">Start</Button>
            <Button
              iconRight={<ChevronRight className="text-scheme-text" />}
              variant="link"
              size="link"
            >
              Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
