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
          <p className="mb-3 font-semibold md:mb-4">Capabilities</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            The record is exact
          </h1>
          <p className="text-medium">
            A clean file is a weapon against confusion and delay.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/pause.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                Verbatim transcripts that capture every breath and pause
              </h2>
              <p>Nothing is smoothed over. You get the raw truth.</p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Verbatim"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Verbatim
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/files.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                Time-stamped files for easy navigation and review
              </h2>
              <p>Jump to the exact second you need without hunting.</p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Stamps"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Stamps
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/speaker.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                Speaker diarization that labels who said what
              </h2>
              <p>Know the speaker. It matters in court and in research.</p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Diarization"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Diarization
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
