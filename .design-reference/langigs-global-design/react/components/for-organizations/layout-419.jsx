"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout419() {
  return (
    <section className="pt-24 md:pt-0 scheme-2">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:mr-12 md:ml-[5vw] lg:mr-20">
                <p className="mb-3 font-semibold md:mb-4">Trust</p>
                <h2 className="mb-5 text-h2 font-bold md:mb-6">
                  Quality you can build a mission on
                </h2>
                <p className="text-medium">
                  Every professional passes a rigorous vetting process. Your
                  data stays confidential and your deadlines are met with
                  absolute precision.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Book" variant="secondary">
                    Book
                  </Button>
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
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-scheme-border bg-scheme-foreground px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">Expert vetting</h3>
              <p>
                We test for skill, dialect mastery, and subject matter
                knowledge. Only the top fraction of applicants join the Langigs
                network.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-scheme-border bg-scheme-foreground px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                  className="size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Confidentiality protocols
              </h3>
              <p>
                Strict NDAs and secure data handling protect your intellectual
                property. Your project never leaves trusted hands.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-scheme-border bg-scheme-foreground px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 3"
                  className="size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Accuracy guarantees
              </h3>
              <p>
                Every deliverable passes a multi-layered human review. We stand
                behind the work with a commitment to get it right.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-scheme-border bg-scheme-foreground px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 4"
                  className="size-full rounded-image object-cover"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                ISO-aligned workflows
              </h3>
              <p>
                Our processes follow internationally recognized quality
                standards. Consistency is built into every step of the project
                lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
