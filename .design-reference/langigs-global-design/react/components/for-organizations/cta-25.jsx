"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <h2 className="mb-5 text-h2 font-bold md:mb-6">
          Ready to scale without compromise
        </h2>
        <p className="text-medium">
          Tell us about your project and we will build a team of native experts
          to deliver precisely what you need
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Book">Book</Button>
          <Button title="Case" variant="secondary">
            Case
          </Button>
        </div>
      </div>
    </section>
  );
}
