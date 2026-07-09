"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header36() {
  return (
    <section className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 scheme-2">
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <h1 className="mb-5 text-h1 font-bold md:mb-6">
          High-quality African language data for smarter AI
        </h1>
        <p className="text-medium">
          Native-speaker data collection, annotation, and validation for NLP
          teams that demand precision. We build the datasets that make models
          fluent in Africa.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button title="Book a discovery call">Book a discovery call</Button>
          <Button title="View services" variant="secondary">
            View services
          </Button>
        </div>
      </div>
      <div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          alt="Relume placeholder image"
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
        />
      </div>
    </section>
  );
}
