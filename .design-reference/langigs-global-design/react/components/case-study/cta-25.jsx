"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <h2 className="mb-5 text-h2 font-bold md:mb-6">
          Your project deserves native precision
        </h2>
        <p className="text-medium">
          Tell us about your language challenge and we will build the team to
          solve it.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Book a call">Book a call</Button>
          <Button title="More case studies" variant="secondary">
            More case studies
          </Button>
        </div>
      </div>
    </section>
  );
}
