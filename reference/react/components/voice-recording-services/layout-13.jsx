"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout13() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Authentic</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Native speech that carries the weight of real life
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              We capture the true cadence of a language. Our vetted
              professionals record in acoustically treated environments,
              delivering studio-grade audio that preserves every tonal
              inflection and cultural subtlety across hundreds of African
              languages. You receive clean, natural speech data that makes your
              technology sound human.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 py-2">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                className="max-h-12"
                alt="Webflow logo 1"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                className="max-h-12"
                alt="Relume logo 1"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                className="max-h-12"
                alt="Webflow logo 2"
              />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
                className="max-h-12"
                alt="Relume logo 2"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Book a discovery call" variant="secondary">
                Book a discovery call
              </Button>
              <Button
                title="View all services"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                View all services
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
