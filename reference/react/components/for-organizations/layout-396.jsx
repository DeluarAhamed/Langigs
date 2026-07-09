"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout396() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Services</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">Precision at scale</h1>
          <p className="text-medium">
            Outcome-focused language solutions for organizations that demand
            absolute reliability
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/language.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                Translation services
              </h2>
              <p>
                Accurate document and content translation across hundreds of
                language pairs
              </p>
            </div>
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
          </Card>
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/language.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                AI language data and annotation
              </h2>
              <p>
                High-quality training data labeled by native speakers for better
                models
              </p>
            </div>
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
          </Card>
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/local_see.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                Localization services
              </h2>
              <p>
                Adapt your product and message to resonate deeply in local
                markets
              </p>
            </div>
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
          </Card>
        </div>
      </div>
    </section>
  );
}
