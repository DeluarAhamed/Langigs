"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout223() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/error.svg"
                  />
                </div>
                <div>
                  <h3 className="mb-3 text-h5 font-bold md:mb-4">
                    Avoid costly errors
                  </h3>
                  <p>
                    Learn how poor data sourcing silently sabotages your models
                    and how to fix it fast
                  </p>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/language_us.svg"
                  />
                </div>
                <div>
                  <h3 className="mb-3 text-h5 font-bold md:mb-4">
                    Navigate cultural nuance
                  </h3>
                  <p>
                    Master the unspoken rules of context and dialect that no
                    machine can guess
                  </p>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/scale.svg"
                  />
                </div>
                <div>
                  <h3 className="mb-3 text-h5 font-bold md:mb-4">
                    Scale without chaos
                  </h3>
                  <p>
                    A clear framework to expand your datasets across 2000
                    languages without losing quality
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button variant="secondary">Download</Button>
              <Button
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Learn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
