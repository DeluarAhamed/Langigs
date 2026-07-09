"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <h2 className="mb-5 text-h2 font-bold md:mb-6">
          Your message deserves a native voice
        </h2>
        <p className="text-medium">
          Start with a discovery call to define your project scope, language
          pairs, and subject-matter requirements with our team directly
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Book">Book</Button>
          <Button title="Request" variant="secondary">
            Request
          </Button>
        </div>
      </div>
    </section>
  );
}
