"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout145() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container flex flex-col items-center text-center">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <div className="mb-5 inline-block md:mb-6">
              <img
                className="size-20 text-scheme-text"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/language.svg"
              />
            </div>
            <p className="mb-3 font-semibold md:mb-4">Mission</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              A human bridge for Africa's digital economy
            </h2>
            <p className="text-medium">
              Langigs Global was built on a simple conviction. The world needs
              Africa's voices and the continent's language professionals deserve
              dignified, well-paid work. We connect global demand with deep
              local expertise to create value that flows both ways.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="About" variant="secondary">
                About
              </Button>
              <Button
                title="Story"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Story
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://d1p38huyj6upaa.cloudfront.net/default-1.jpg"
            className="aspect-video size-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
