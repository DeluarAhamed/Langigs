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
          <p className="mb-3 font-semibold md:mb-4">Benefits</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            One team, zero friction
          </h1>
          <p className="text-medium">
            Complex multilingual projects managed through a single point of
            contact.
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
                A single brief for every language and service you need
              </h2>
              <p>
                Stop managing five vendors. One brief covers translation, voice,
                and data.
              </p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Learn more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Learn more
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
                Consistent quality across rare and major language pairs
              </h2>
              <p>
                Our linguists are vetted, native, and reviewed. Quality does not
                waver.
              </p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Learn more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Learn more
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
                Access to hard-to-find native experts across Africa
              </h2>
              <p>
                We source and manage talent for languages others cannot reach.
              </p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Learn more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Learn more
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
