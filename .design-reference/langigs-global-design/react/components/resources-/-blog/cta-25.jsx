"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <h2 className="mb-5 text-h2 font-bold md:mb-6">
          Let's discuss your next project
        </h2>
        <p className="text-medium">
          A real conversation beats a long email. Tell us what you need and we
          will build the right team.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Book a call">Book a call</Button>
          <Button title="Join our network" variant="secondary">
            Join our network
          </Button>
        </div>
      </div>
    </section>
  );
}
