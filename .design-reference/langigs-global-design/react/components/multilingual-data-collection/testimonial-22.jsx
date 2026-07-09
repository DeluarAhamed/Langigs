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
            Trusted by organizations building the future of language technology.
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
                "The authenticity of the participants Langigs sourced was
                unmatched. The data captured the true vernacular of the region,
                which was critical for our NLP model."
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
                  <p className="font-semibold">Amara Diop</p>
                  <p>Lead Researcher, AfriSpeech AI</p>
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
                "Project management was seamless. We had a complex,
                multi-country data collection brief and the Langigs team
                delivered a clean, validated dataset ahead of schedule."
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
                  <p className="font-semibold">David Chen</p>
                  <p>Data Director, GlobalReach NGO</p>
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
                "The quality control was rigorous. Every single data point was
                verified by a native linguist, which saved our internal team
                hundreds of hours of validation work."
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
                  <p className="font-semibold">Sarah Mbeki</p>
                  <p>VP Product, LinguaTech</p>
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
