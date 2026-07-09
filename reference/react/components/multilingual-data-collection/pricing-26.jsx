"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Check } from "relume-icons";

export function Pricing26() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Pricing</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">Project plans</h1>
          <p className="text-medium">
            Transparent pricing for data collection projects of any scale.
          </p>
        </div>
        <div className="w-full">
          <Tabs defaultValue="monthly">
            <TabsList className="mx-auto mb-12 w-fit items-center justify-center rounded-button border border-scheme-border bg-scheme-foreground p-1 group-data-[slot=card-flat]:border-transparent md:mb-20">
              <TabsTrigger
                value="monthly"
                className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:bg-transparent"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="yearly"
                className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:bg-transparent"
              >
                Yearly
              </TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <div className="sticky top-0 grid grid-cols-3 border-b border-scheme-border bg-scheme-background md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <div className="hidden md:block" />
                <div className="flex h-full flex-col justify-between border-0 border-scheme-border px-2 py-4 sm:px-4 sm:py-6 md:border-l lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-h6 font-bold">Starter</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">Quote</h1>
                      <p className="inline-block font-bold">
                        <span>Per project</span>
                      </p>
                    </div>
                    <p>For small, niche language studies.</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      className="w-full px-3 py-1 whitespace-normal sm:px-4 sm:py-3"
                      title="Get started"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between border-l border-scheme-border px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-h6 font-bold">Professional</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">Quote</h1>
                      <p className="inline-block font-bold">
                        <span>Per project</span>
                      </p>
                    </div>
                    <p>For mid-scale, multi-region data collection.</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      className="w-full px-3 py-1 whitespace-normal sm:px-4 sm:py-3"
                      title="Get started"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between border-l border-scheme-border px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-h6 font-bold">Enterprise</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">Quote</h1>
                      <p className="inline-block font-bold">
                        <span>Per project</span>
                      </p>
                    </div>
                    <p>For large-scale, ongoing data programs.</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      className="w-full px-3 py-1 whitespace-normal sm:px-4 sm:py-3"
                      title="Get started"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border-b border-scheme-border py-5">
                <h3 className="text-h6 font-bold">Data collection</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Native participant recruitment
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  100
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  500
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Custom
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Audio and speech samples
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Text corpus collection
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Survey and field research
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Image and video data
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="border-b border-scheme-border py-5">
                <h3 className="text-h6 font-bold">Quality assurance</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Native linguist validation
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Basic
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Standard
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Premium
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Automated quality checks
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Transcription and annotation
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Consent and compliance management
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Dedicated project manager
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="border-b border-scheme-border py-5">
                <h3 className="text-h6 font-bold">Support</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Email support
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  48h
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  24h
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Priority
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Delivery format
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Structured dataset delivery
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  API access
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Custom reporting dashboard
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="sticky top-0 grid grid-cols-3 border-b border-scheme-border bg-scheme-background md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <div className="hidden md:block" />
                <div className="flex h-full flex-col justify-between border-0 border-scheme-border px-2 py-4 sm:px-4 sm:py-6 md:border-l lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-h6 font-bold">Starter</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">Quote</h1>
                      <p className="inline-block font-bold">
                        <span>Per year (save 20%)</span>
                      </p>
                    </div>
                    <p>For small, niche language studies.</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      className="w-full px-3 py-1 whitespace-normal sm:px-4 sm:py-3"
                      title="Get started"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between border-l border-scheme-border px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-h6 font-bold">Professional</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">Quote</h1>
                      <p className="inline-block font-bold">
                        <span>Per year (save 20%)</span>
                      </p>
                    </div>
                    <p>For mid-scale, multi-region data collection.</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      className="w-full px-3 py-1 whitespace-normal sm:px-4 sm:py-3"
                      title="Get started"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between border-l border-scheme-border px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-h6 font-bold">Enterprise</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">Quote</h1>
                      <p className="inline-block font-bold">
                        <span>Per year (save 20%)</span>
                      </p>
                    </div>
                    <p>For large-scale, ongoing data programs.</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      className="w-full px-3 py-1 whitespace-normal sm:px-4 sm:py-3"
                      title="Get started"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border-b border-scheme-border py-5">
                <h3 className="text-h6 font-bold">Data collection</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Native participant recruitment
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  100
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  500
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Custom
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Audio and speech samples
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Text corpus collection
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Survey and field research
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Image and video data
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="border-b border-scheme-border py-5">
                <h3 className="text-h6 font-bold">Quality assurance</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Native linguist validation
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Basic
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Standard
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Premium
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Automated quality checks
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Transcription and annotation
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Consent and compliance management
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Dedicated project manager
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="border-b border-scheme-border py-5">
                <h3 className="text-h6 font-bold">Support</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Email support
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  48h
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  24h
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Priority
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Delivery format
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Structured dataset delivery
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  API access
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Custom reporting dashboard
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
