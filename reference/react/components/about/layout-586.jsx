"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout586() {
  return (
    <section className="scheme-2">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Origin</p>
              <h2 className="text-h2 font-bold">
                A marketplace built on a missing truth
              </h2>
            </div>
            <div>
              <p className="mb-6 text-medium md:mb-8">
                The global demand for African languages was exploding, but the
                supply chain was broken. We built Langigs to replace guesswork
                with trust, connecting organizations directly to rigorously
                vetted native professionals.
              </p>
              <div className="my-4">
                <ul className="list-disc pl-5">
                  <li className="my-1 self-start pl-2">
                    <p>
                      Vetted native expertise across 2000+ African languages
                    </p>
                  </li>
                  <li className="my-1 self-start pl-2">
                    <p>
                      Enterprise-grade security for sensitive multilingual data
                    </p>
                  </li>
                  <li className="my-1 self-start pl-2">
                    <p>
                      Human-centered technology that scales with your mission
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Our services" variant="secondary">
                  Our services
                </Button>
                <Button
                  title="Learn more"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight />}
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="aspect-video size-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
