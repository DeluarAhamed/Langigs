"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout353() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-[30%]">
            <p className="mb-3 font-semibold md:mb-4">Benefits</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Why organizations choose Langigs for translation
            </h2>
            <p className="text-medium">
              We do more than convert words. We carry meaning across borders so
              your message lands with the same force it had at home.
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
          <div>
            <Card className="mb-8border-none sticky p-8" style={{ top: "30%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/lan.svg"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Cultural nuance
              </h3>
              <p>
                A direct translation can miss the point. Our linguists capture
                local context, humor, and sensitivity so your communication
                feels native, not foreign.
              </p>
            </Card>
            <Card className="mb-8border-none sticky p-8" style={{ top: "32%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/lan.svg"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Consistent terminology
              </h3>
              <p>
                We build a glossary for your project. Key terms stay uniform
                across every document, protecting your brand and technical
                precision.
              </p>
            </Card>
            <Card className="mb-8border-none sticky p-8" style={{ top: "34%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/lan.svg"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Scalable capacity
              </h3>
              <p>
                A single page or a thousand. Our network across Africa and
                beyond scales to meet your deadline without sacrificing quality.
              </p>
            </Card>
            <Card className="mb-8border-none sticky p-8" style={{ top: "36%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/lan.svg"
                />
              </div>
              <h3 className="mb-3 text-h5 font-bold md:mb-4">
                Dedicated management
              </h3>
              <p>
                You get one point of contact. A project manager guards the
                schedule, the budget, and the standard of every word delivered.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
