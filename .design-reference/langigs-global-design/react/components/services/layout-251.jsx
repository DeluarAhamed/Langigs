"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout251() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Services</p>
            <h2 className="text-h2 font-bold">What we do best</h2>
          </div>
          <div>
            <p className="text-medium">
              Six core services, one trusted team of native-language
              professionals.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-h4 font-bold md:mb-6">
              Accurate translation by native subject-matter experts
            </h3>
            <p>
              Document, legal, medical, and technical translation handled by
              professionals who understand the context, not just the words.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-h4 font-bold md:mb-6">
              Clean transcripts fast
            </h3>
            <p>
              Audio and video transcribed with precision across rare and major
              African languages.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-h4 font-bold md:mb-6">AI language data</h3>
            <p>
              Annotation, speech data, and dataset validation for the next
              generation of models.
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="secondary">Translation</Button>
          <Button
            iconRight={<ChevronRight className="text-scheme-text" />}
            variant="link"
            size="link"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
