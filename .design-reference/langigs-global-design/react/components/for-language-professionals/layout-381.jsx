"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout381() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Perks</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">The full package</h1>
          <p className="text-medium">
            Everything you need to do your best work.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col sm:col-span-2 sm:row-span-2">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold">Support</p>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Dedicated project support
                  </h2>
                  <p>
                    A real human on your side from brief to final payment. No
                    bots, no runaround.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Apply" variant="secondary">
                    Apply
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
            </Card>
            <Card className="flex flex-col sm:col-span-2 sm:grid sm:auto-cols-fr sm:grid-cols-2">
              <div className="flex size-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-bento-portrait2.svg"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div className="block flex-col justify-center p-6 sm:flex">
                <div>
                  <p className="mb-2 font-semibold">Pay</p>
                  <h2 className="mb-2 text-h5 font-bold">
                    Transparent payment terms
                  </h2>
                  <p>You see the full rate. You get paid within seven days.</p>
                </div>
                <div className="mt-5 md:mt-6">
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
            </Card>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/train.svg"
                    />
                  </div>
                  <h3 className="mb-2 text-h5 font-bold">
                    Training resources and certification opportunities
                  </h3>
                  <p>
                    Build credentials that open doors to higher-paying work.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
            </Card>
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/train.svg"
                    />
                  </div>
                  <h3 className="mb-2 text-h5 font-bold">
                    Training resources and certification opportunities
                  </h3>
                  <p>
                    Build credentials that open doors to higher-paying work.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
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
            </Card>
            <Card className="flex flex-col sm:col-span-2 sm:row-span-2">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold">Tools</p>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Skills training resources
                  </h2>
                  <p>
                    Workshops and guides to sharpen your annotation,
                    transcription, and localization craft.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Apply" variant="secondary">
                    Apply
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
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
