"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout298() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 max-w-lg md:mb-18 lg:mb-20">
            <div>
              <p className="mb-3 text-center font-semibold md:mb-4">Process</p>
              <h2 className="mb-5 text-center text-h2 font-bold md:mb-6">
                How your words become a clean record
              </h2>
              <p className="text-center text-medium">
                The work is simple. You send the audio. We send back the truth.
                Here is how it happens.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/upload.svg"
                />
              </div>
              <h3 className="mb-3 text-center text-h5 font-bold md:mb-4">
                Upload your audio or video files securely
              </h3>
              <p className="text-center">
                Drag and drop your files into our encrypted portal. Any format
                works. The upload is the only heavy lifting you do.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/language.svg"
                />
              </div>
              <h3 className="mb-3 text-center text-h5 font-bold md:mb-4">
                A native-language team takes over
              </h3>
              <p className="text-center">
                We match your project to a professional who speaks the exact
                dialect in your recording. Not a generalist. A specialist.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/check.svg"
                />
              </div>
              <h3 className="mb-3 text-center text-h5 font-bold md:mb-4">
                Rigorous quality review and verification
              </h3>
              <p className="text-center">
                A second native speaker checks the work. We verify against the
                audio. We fix the small errors before you ever see them.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 flex justify-center md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/files.svg"
                />
              </div>
              <h3 className="mb-3 text-center text-h5 font-bold md:mb-4">
                Delivery in your preferred format
              </h3>
              <p className="text-center">
                Receive a clean, formatted file. Word, PDF, JSON, or SRT. It
                arrives on time and ready for immediate use.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Start" variant="secondary">
              Start
            </Button>
            <Button
              title="Contact"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
