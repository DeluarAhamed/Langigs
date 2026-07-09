"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout457() {
  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Why Langigs</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Human intelligence you can trust every time
          </h2>
          <p className="text-medium">
            We built a network where skill meets accountability. Every
            professional is tested, every deliverable is reviewed, and our
            platform keeps the work moving fast without losing the human touch.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div className="w-full">
            <div className="mb-6 w-full md:mb-8">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-13.jpg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] w-full rounded-image object-cover"
              />
            </div>
            <h2 className="mb-3 text-h4 font-bold md:mb-4">
              Vetted native experts
            </h2>
            <p>
              We test for skill and cultural fluency. Only proven professionals
              join the Langigs Global network.
            </p>
          </div>
          <div className="w-full md:mt-[25%]">
            <div className="mb-6 w-full md:mb-8">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-13.jpg"
                alt="Relume placeholder image 2"
                className="aspect-[3/2] w-full rounded-image object-cover"
              />
            </div>
            <h2 className="mb-3 text-h4 font-bold md:mb-4">
              Vetted native experts
            </h2>
            <p>
              We test for skill and cultural fluency. Only proven professionals
              join the Langigs Global network.
            </p>
          </div>
          <div className="w-full md:mt-[50%]">
            <div className="mb-6 w-full md:mb-8">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-13.jpg"
                alt="Relume placeholder image 3"
                className="aspect-[3/2] w-full rounded-image object-cover"
              />
            </div>
            <h2 className="mb-3 text-h4 font-bold md:mb-4">
              Vetted native experts
            </h2>
            <p>
              We test for skill and cultural fluency. Only proven professionals
              join the Langigs Global network.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button title="Learn" variant="secondary">
            Learn
          </Button>
          <Button
            title="Process"
            variant="link"
            size="link"
            iconRight={<ChevronRight className="text-scheme-text" />}
          >
            Process
          </Button>
        </div>
      </div>
    </section>
  );
}
