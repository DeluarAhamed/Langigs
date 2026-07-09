"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header114() {
  return (
    <section className="relative px-[5%] scheme-1">
      <div className="container flex max-h-[60rem] min-h-svh">
        <div className="py-16 md:py-24 lg:py-28">
          <div className="relative z-10 grid h-full auto-cols-fr grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <div className="flex flex-col justify-start md:justify-center">
              <h1 className="text-h1 font-bold text-white">
                Native-language experts for the world's most ambitious work
              </h1>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Book a discovery call" variant="alternate">
                  Book a discovery call
                </Button>
                <Button title="Join talent network" variant="secondary-alt">
                  Join talent network
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-medium text-white">
                Langigs Global connects your organization with vetted language
                professionals across Africa and beyond. Precision, trust, and
                human intelligence at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d1p38huyj6upaa.cloudfront.net/background-10.jpg"
          className="size-full object-cover"
          alt="Relume placeholder background image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
