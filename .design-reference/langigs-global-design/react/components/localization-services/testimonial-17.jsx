"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import { StarFull } from "relume-icons";

export function Testimonial17() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Client results</h2>
          <p className="text-medium">
            Hear from teams who launched in Africa with us
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 flex gap-1 md:mb-6">
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
            </div>
            <h5 className="text-medium">
              "Our app adoption in Nigeria tripled after Langigs adapted the
              entire UX for local nuance. It felt native, not translated."
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div className="mb-4 size-12 min-h-12 min-w-12 overflow-hidden rounded-full md:mr-4 md:mb-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar"
                  className="size-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Amara Eze</p>
                <p>Head of Product, Finclusive</p>
              </div>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 flex gap-1 md:mb-6">
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
            </div>
            <h5 className="text-medium">
              "The cultural consulting alone saved us from a costly misstep.
              Langigs didn't just translate words, they translated trust."
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div className="mb-4 size-12 min-h-12 min-w-12 overflow-hidden rounded-full md:mr-4 md:mb-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar"
                  className="size-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">David Okonkwo</p>
                <p>Marketing Director, Jumba</p>
              </div>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 flex gap-1 md:mb-6">
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
            </div>
            <h5 className="text-medium">
              "We cut our time-to-market by weeks. Their dedicated team moved
              with our sprint cycles. True partners."
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div className="mb-4 size-12 min-h-12 min-w-12 overflow-hidden rounded-full md:mr-4 md:mb-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar"
                  className="size-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Sarah Mbeki</p>
                <p>VP Localization, AfriTech</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
