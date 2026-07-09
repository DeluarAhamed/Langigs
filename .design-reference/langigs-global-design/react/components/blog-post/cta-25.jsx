"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <h2 className="mb-5 text-h2 font-bold md:mb-6">
          Talk to a language expert
        </h2>
        <p className="text-medium">
          Your project deserves more than a machine. Let's find the right native
          voice for the job.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Book a call">Book a call</Button>
          <Button title="Services" variant="secondary">
            Services
          </Button>
        </div>
      </div>
    </section>
  );
}
