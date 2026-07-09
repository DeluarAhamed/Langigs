"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout530() {
  return (
    <section className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 scheme-2">
      <div className="py-16 md:py-24 lg:py-28">
        <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
          <p className="mb-3 font-semibold md:mb-4">Coverage</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            The languages of a continent at your command
          </h1>
          <p className="mb-6 text-medium md:mb-8">
            Access over 2000 native languages and dialects through a single
            trusted partner. From Swahili to Wolof, Yoruba to Amharic, we
            connect your models to the voices that matter.
          </p>
          <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
            <div>
              <h6 className="mb-3 text-h6 font-bold md:mb-4">Depth</h6>
              <p>
                We go beyond the major languages into dialects and variants
                other providers ignore.
              </p>
            </div>
            <div>
              <h6 className="mb-3 text-h6 font-bold md:mb-4">Authenticity</h6>
              <p>
                Every annotator is a native speaker vetted for linguistic
                accuracy and cultural fluency.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button title="Explore" variant="secondary">
              Explore
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
