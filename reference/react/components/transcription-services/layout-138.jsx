"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout138() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Use cases</p>
        <h2 className="mb-5 text-h2 font-bold md:mb-6">
          Where the record matters most
        </h2>
        <p className="mb-5 text-medium md:mb-6">
          A bad transcript is a liability. A good one is an asset. Our work
          serves the fields where precision is not negotiable.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 1"
            className="max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
            alt="Relume logo 1"
            className="max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
            alt="Webflow logo 2"
            className="max-h-14"
          />
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg"
            alt="Relume logo 2"
            className="max-h-14"
          />
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Book" variant="secondary">
            Book
          </Button>
          <Button
            title="Services"
            variant="link"
            size="link"
            iconRight={<ChevronRight className="text-scheme-text" />}
          >
            Services
          </Button>
        </div>
      </div>
    </section>
  );
}
