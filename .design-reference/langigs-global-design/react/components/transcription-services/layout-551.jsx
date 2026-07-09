"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout551() {
  return (
    <section className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 scheme-2">
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
          <div className="flex self-start">
            <div className="mr-6 flex-none self-start">
              <img
                className="size-12"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/verified.svg"
              />
            </div>
            <div>
              <h1 className="mb-3 text-h5 font-bold md:mb-4">
                Human ears first
              </h1>
              <p>
                Every file is verified by a native speaker who knows the dialect
                and the context.
              </p>
              <div className="mt-5 flex items-center gap-4 md:mt-6">
                <Button
                  title="Accuracy"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight />}
                >
                  Accuracy
                </Button>
              </div>
            </div>
          </div>
          <div className="flex self-start">
            <div className="mr-6 flex-none self-start">
              <img
                className="size-12"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/speaker.svg"
              />
            </div>
            <div>
              <h1 className="mb-3 text-h5 font-bold md:mb-4">
                Many voices clear
              </h1>
              <p>
                We separate speakers in a crowded room so you can follow every
                thread.
              </p>
              <div className="mt-5 flex items-center gap-4 md:mt-6">
                <Button
                  title="Speakers"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight />}
                >
                  Speakers
                </Button>
              </div>
            </div>
          </div>
          <div className="flex self-start">
            <div className="mr-6 flex-none self-start">
              <img
                className="size-12"
                src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/language.svg"
              />
            </div>
            <div>
              <h1 className="mb-3 text-h5 font-bold md:mb-4">
                Rare languages heard
              </h1>
              <p>
                We work in languages that machines forget. Your research does
                not stop there.
              </p>
              <div className="mt-5 flex items-center gap-4 md:mt-6">
                <Button
                  title="Languages"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight />}
                >
                  Languages
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative size-full overflow-hidden lg:min-h-[80vh]">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          alt="Relume placeholder image"
          className="static size-full object-cover lg:absolute lg:inset-0"
        />
      </div>
    </section>
  );
}
