"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout397() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Benefits</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            The localization advantage
          </h1>
          <p className="text-medium">
            Real outcomes when your product speaks the local language
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/web_asset.svg"
                  />
                </div>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Faster market entry with a launch-ready asset kit
                </h2>
                <p>
                  Parallel workflows cut weeks from your go-to-market timeline
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 font-semibold">Growth</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Higher user engagement and conversion rates locally
                </h2>
                <p>
                  Users stay longer and buy more when the experience feels
                  familiar
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Explore
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
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 font-semibold">Trust</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Reduced cultural friction across all touchpoints
                </h2>
                <p>
                  Avoid costly missteps that damage brand reputation in new
                  markets
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Explore
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/language.svg"
                  />
                </div>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Consistent brand voice in every language and market
                </h2>
                <p>Your tone and values hold steady from Lagos to Nairobi</p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/scale.svg"
                  />
                </div>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Scalable quality with dedicated native expert teams
                </h2>
                <p>
                  Add markets without diluting the quality of your user
                  experience
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <p className="mb-2 font-semibold">Data</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Measurable ROI from localized campaigns and products
                </h2>
                <p>
                  Track adoption, retention, and revenue lift per market clearly
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Explore
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 3"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
