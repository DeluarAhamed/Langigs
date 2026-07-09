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
            Client testimonials
          </h2>
          <p className="text-medium">
            Trusted by organizations that cannot afford a single mistranslation
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
                "The legal documents were returned flawless and ahead of
                schedule. Their understanding of Nigerian contract law was
                immediately apparent."
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
                  <p className="font-semibold">Amina Okonkwo</p>
                  <p>Legal Director, Pan-African Trade Group</p>
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
                "We switched after a competitor missed cultural nuances. Langigs
                translators don't just convert words, they carry meaning across
                borders."
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
                  <p className="font-semibold">David Müller</p>
                  <p>Research Lead, Global Health Initiative</p>
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
                "Clear communication, precise medical terminology, and a
                turnaround time that respected our clinical trial deadlines.
                This is the standard."
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
                  <p className="font-semibold">Dr. Fatima Hassan</p>
                  <p>Project Manager, East African Medical Research</p>
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
