"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout399() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Audiences</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Built for your mission
            </h2>
            <p className="text-medium">
              Data collection that adapts to the work you need to do.
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">AI</p>
                <h3 className="mb-2 text-h5 font-bold">
                  Training data for models that understand the real world
                </h3>
                <p>
                  Speech utterances, text corpora, and image data validated by
                  native linguists.
                </p>
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
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">NGOs</p>
                <h3 className="mb-2 text-h5 font-bold">
                  Multilingual research that reaches the last mile
                </h3>
                <p>
                  Field studies and interviews conducted with cultural
                  intelligence and deep respect.
                </p>
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
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">Business</p>
                <h3 className="mb-2 text-h5 font-bold">
                  Consumer insights for market entry across Africa
                </h3>
                <p>
                  Surveys and focus groups that capture nuance lost in
                  translation.
                </p>
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
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">Research</p>
                <h3 className="mb-2 text-h5 font-bold">
                  Primary language data for academic and field work
                </h3>
                <p>
                  Ethnographic data collection managed with academic rigor and
                  local expertise.
                </p>
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
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
