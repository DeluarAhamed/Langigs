"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Testimonial22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Customer testimonials
          </h2>
          <p className="text-medium">
            Trust is earned in the work, not in the pitch.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 md:mb-6">
              <div className="mb-8 inline-block md:mb-10 lg:mb-12">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo"
                  className="max-h-12"
                />
              </div>
              <h5 className="text-medium">
                "Langigs didn't just translate our research instruments. They
                understood the cultural nuance required to get honest answers.
                The data quality was a revelation."
              </h5>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar"
                    className="size-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Dr. Sarah</p>
                  <p>Lead Researcher, Global Health Initiative</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Read case study
              </Button>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 md:mb-6">
              <div className="mb-8 inline-block md:mb-10 lg:mb-12">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo"
                  className="max-h-12"
                />
              </div>
              <h5 className="text-medium">
                "Working with Langigs gave me a seat at the global table. The
                projects are challenging, the pay is fair, and I am treated as a
                partner, not a commodity."
              </h5>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar"
                    className="size-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Kofi Mensah</p>
                  <p>Twi & Ga Linguist</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Read case study
              </Button>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 md:mb-6">
              <div className="mb-8 inline-block md:mb-10 lg:mb-12">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo"
                  className="max-h-12"
                />
              </div>
              <h5 className="text-medium">
                "We needed voice data across five distinct dialects in six
                weeks. Langigs delivered clean, annotated datasets that
                accelerated our model training by months."
              </h5>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div className="size-12 min-h-12 min-w-12 overflow-hidden rounded-full">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar"
                    className="size-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Alex Petrov</p>
                  <p>CTO, Nova AI Labs</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Read case study
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
