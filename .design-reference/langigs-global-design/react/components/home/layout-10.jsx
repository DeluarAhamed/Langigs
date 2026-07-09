"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout10() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Quality</p>
            <h1 className="mb-5 text-h2 font-bold md:mb-6">
              The work is only as good as the check behind it
            </h1>
            <p className="mb-6 text-medium md:mb-8">
              We do not ship a single file without a second native reviewer
              examining every line. A dedicated project lead keeps the timeline
              tight and the standard absolute.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/network_cell.svg"
                  />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Rigorous vetting
                </h6>
                <p>
                  We test for skill and reliability before a professional joins
                  the network. Only the best get through.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/check.svg"
                  />
                </div>
                <h6 className="mb-3 text-h6 font-bold md:mb-4">
                  Accuracy checks
                </h6>
                <p>
                  Every piece of work passes a native review. A second pair of
                  expert eyes catches what machines miss.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Talent" variant="secondary">
                Talent
              </Button>
              <Button
                title="Quality"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Quality
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d1p38huyj6upaa.cloudfront.net/default-38.jpg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
