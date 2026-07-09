"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export function Cta26() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <div>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Get the signal in the noise
          </h2>
          <p className="text-medium">
            One email a month on the craft of language, the business of data,
            and the future of African voices
          </p>
          <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
            <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Enter your email" />
              <Button
                title="Sign up"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                Sign up
              </Button>
            </form>
            <p className="text-tiny">
              By clicking Sign Up you're confirming that you agree with our
              Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
