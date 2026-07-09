"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Stats43() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Impact</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              The numbers do not lie
            </h2>
            <p className="text-medium">
              We measure our success by the trust our clients place in us and
              the livelihoods we help sustain. Every figure represents a promise
              kept.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Our services" variant="secondary">
                Our services
              </Button>
              <Button
                title="Learn more"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Learn more
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2">
            <Card className="p-8">
              <h3 className="mb-8 text-h6 font-bold md:mb-10 lg:mb-12">
                Vetted professionals
              </h3>
              <p className="text-right text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                3,500+
              </p>
              <div className="my-4 h-px w-full bg-scheme-border" />
              <p className="text-right">
                Native experts rigorously screened and ready for your project
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="mb-8 text-h6 font-bold md:mb-10 lg:mb-12">
                Languages covered
              </h3>
              <p className="text-right text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                2,000+
              </p>
              <div className="my-4 h-px w-full bg-scheme-border" />
              <p className="text-right">
                African dialects and languages under one trusted roof
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="mb-8 text-h6 font-bold md:mb-10 lg:mb-12">
                Projects delivered
              </h3>
              <p className="text-right text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                12,000+
              </p>
              <div className="my-4 h-px w-full bg-scheme-border" />
              <p className="text-right">
                Missions completed with zero-defect quality for global clients
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="mb-8 text-h6 font-bold md:mb-10 lg:mb-12">
                Client satisfaction
              </h3>
              <p className="text-right text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                98%
              </p>
              <div className="my-4 h-px w-full bg-scheme-border" />
              <p className="text-right">
                Retention rate built on precision and cultural authenticity
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
