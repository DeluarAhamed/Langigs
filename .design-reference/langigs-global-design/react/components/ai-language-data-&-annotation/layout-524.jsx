"use client";

import { Button } from "@/components/ui/button";
import { BackgroundCard } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout524() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Services</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Core data services
            </h2>
            <p className="text-medium">
              Precision datasets built by native speakers for AI that
              understands Africa
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          <BackgroundCard className="relative flex flex-col justify-center p-6 md:p-8 lg:p-12">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-neutral-darkest/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder background image"
              />
            </div>
            <div className="relative z-10">
              <p className="mb-2 inline-block text-small font-semibold text-white">
                Collect
              </p>
              <h3 className="mb-5 text-h3 font-bold text-white md:mb-6">
                Speech data collection
              </h3>
              <p className="text-white">
                High-fidelity audio captured in real environments. Your models
                learn the true sound of every dialect.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button variant="secondary-alt">Learn</Button>
                <Button
                  iconRight={<ChevronRight className="text-white" />}
                  variant="link-alt"
                  size="link"
                >
                  More
                </Button>
              </div>
            </div>
          </BackgroundCard>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <BackgroundCard className="relative flex flex-col p-6 md:p-8 lg:p-6">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-neutral-darkest/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder background image"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-2 text-h5 font-bold text-white">
                  Text corpus creation
                </h3>
                <p className="text-white">
                  Large-scale written datasets for NLP training and model
                  fine-tuning.
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    iconRight={<ChevronRight className="text-white" />}
                    variant="link-alt"
                    size="link"
                  >
                    More
                  </Button>
                </div>
              </div>
            </BackgroundCard>
            <BackgroundCard className="relative flex flex-col p-6 md:p-8 lg:p-6">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-neutral-darkest/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder background image"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-2 text-h5 font-bold text-white">
                  Image and video annotation
                </h3>
                <p className="text-white">
                  Pixel-perfect labeling for computer vision projects across
                  diverse contexts.
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    iconRight={<ChevronRight className="text-white" />}
                    variant="link-alt"
                    size="link"
                  >
                    More
                  </Button>
                </div>
              </div>
            </BackgroundCard>
            <BackgroundCard className="relative flex flex-col p-6 md:p-8 lg:p-6">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-neutral-darkest/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder background image"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-2 text-h5 font-bold text-white">
                  Sentiment analysis
                </h3>
                <p className="text-white">
                  Context-rich emotional labeling that captures nuance and
                  cultural subtext.
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    iconRight={<ChevronRight className="text-white" />}
                    variant="link-alt"
                    size="link"
                  >
                    More
                  </Button>
                </div>
              </div>
            </BackgroundCard>
            <BackgroundCard className="relative flex flex-col p-6 md:p-8 lg:p-6">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-neutral-darkest/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder background image"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-2 text-h5 font-bold text-white">
                  Entity extraction
                </h3>
                <p className="text-white">
                  Structured data parsed from unstructured African language
                  sources.
                </p>
                <div className="mt-5 flex items-center md:mt-6">
                  <Button
                    iconRight={<ChevronRight className="text-white" />}
                    variant="link-alt"
                    size="link"
                  >
                    More
                  </Button>
                </div>
              </div>
            </BackgroundCard>
          </div>
        </div>
      </div>
    </section>
  );
}
