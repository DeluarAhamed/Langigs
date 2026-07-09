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
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Their words</h2>
          <p className="text-medium">
            Real stories from our network of language professionals.
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
                "Langigs connected me with an AI annotation project that paid
                more in one month than I used to make in three. The work is
                consistent and I set my own hours."
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
                  <p className="font-semibold">Amara Eze</p>
                  <p>Igbo Linguist, Nigeria</p>
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
                "The vetting was rigorous but fair. Once I was in, the project
                briefs were crystal clear. I have worked on voice recording for
                a major tech firm and a localization project for an NGO."
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
                  <p className="font-semibold">David Mwangi</p>
                  <p>Swahili Transcriber, Kenya</p>
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
                "I was tired of chasing low-paying gigs. Langigs gave me access
                to serious clients who respect my expertise. The mentorship
                resources helped me refine my craft."
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
                  <p className="font-semibold">Fatima Diallo</p>
                  <p>French Translator, Senegal</p>
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
