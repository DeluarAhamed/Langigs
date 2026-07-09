"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout544() {
  return (
    <section className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 scheme-2">
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <p className="mb-3 font-semibold md:mb-4">Quality</p>
        <h1 className="mb-5 text-h2 font-bold md:mb-6">
          Precision is not a promise. It is a metric.
        </h1>
        <p className="mb-6 text-medium md:mb-8">
          We measure everything. Inter-annotator agreement, task completion
          accuracy, and cultural fidelity. You get the reports.
        </p>
        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 text-h2 font-bold">98%</h3>
            <p>Average inter-annotator agreement across all active projects</p>
          </div>
          <div>
            <h3 className="mb-2 text-h2 font-bold">3</h3>
            <p>Validation passes on every data point before delivery</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          <Button title="Learn" variant="secondary">
            Learn
          </Button>
          <Button
            title="More"
            variant="link"
            size="link"
            iconRight={<ChevronRight />}
          >
            More
          </Button>
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
