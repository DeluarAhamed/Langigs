"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout393() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Difference</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">The Langigs edge</h1>
          <p className="text-medium">
            Real human expertise combined with efficient workflows and clear
            pricing
          </p>
        </div>
        <div className="grid auto-cols-fr gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <div className="mb-5 md:mb-6">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/language.svg"
                  />
                </div>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Rare African language expertise
                </h2>
                <p>
                  Access deep linguistic knowledge unavailable through standard
                  machine translation
                </p>
              </div>
              <div className="mt-5 md:mt-6">
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
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <div className="mb-5 md:mb-6">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/language.svg"
                  />
                </div>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Rare African language expertise
                </h2>
                <p>
                  Access deep linguistic knowledge unavailable through standard
                  machine translation
                </p>
              </div>
              <div className="mt-5 md:mt-6">
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
          </Card>
          <Card className="flex auto-cols-fr flex-col sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:col-start-3 lg:row-span-2">
            <div className="flex size-full flex-col items-center justify-center self-start lg:h-auto">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Trust</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Tech-enabled workflows
                </h2>
                <p>
                  A seamless platform that keeps communication clear and
                  deadlines visible
                </p>
              </div>
              <div className="mt-5 md:mt-6">
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
          </Card>
          <Card className="flex auto-cols-fr flex-col last-of-type:row-span-1 last-of-type:grid sm:col-span-2 sm:grid-cols-2 sm:last-of-type:row-start-2 md:last-of-type:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:last-of-type:col-span-2">
            <div className="flex size-full flex-col items-center justify-center self-start lg:h-auto">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 2"
              />
            </div>
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Clarity</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Transparent pricing
                </h2>
                <p>
                  Know the cost upfront with no hidden fees or surprise charges
                </p>
              </div>
              <div className="mt-5 md:mt-6">
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
          </Card>
        </div>
      </div>
    </section>
  );
}
