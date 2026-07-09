"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <h2 className="mb-5 text-h2 font-bold md:mb-6">
          Ready to capture authentic voices
        </h2>
        <p className="text-medium">
          Share your project brief and we will match you with the right native
          speakers for your recording requirements.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Book a discovery call">Book a discovery call</Button>
          <Button title="Submit a project brief" variant="secondary">
            Submit a project brief
          </Button>
        </div>
      </div>
    </section>
  );
}
