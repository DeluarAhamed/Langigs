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
          <p className="mb-3 font-semibold md:mb-4">Compare</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">The difference</h1>
          <p className="text-medium">
            A clear choice between machine output and human precision
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
                    <h2 className="text-h6 font-bold">Machine</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">$0.00</h1>
                      <p className="inline-block font-bold">
                        <span>Per word</span>
                      </p>
                    </div>
                    <p>Fast but literal and often wrong</p>
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
                    <h2 className="text-h6 font-bold">Generic</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">$0.12</h1>
                      <p className="inline-block font-bold">
                        <span>Per word</span>
                      </p>
                    </div>
                    <p>Human but lacks industry focus</p>
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
                    <h2 className="text-h6 font-bold">Langigs</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">$0.18</h1>
                      <p className="inline-block font-bold">
                        <span>Per word</span>
                      </p>
                    </div>
                    <p>Native expert with subject-matter precision</p>
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
                <h3 className="text-h6 font-bold">Quality</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Cultural context accuracy
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  No
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  No
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Native linguist review
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
                  Subject-matter expertise
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
                  Confidential handling guaranteed
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
                  Revision requests included
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
                  Dedicated project manager
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  No
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  No
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Glossary and style guide
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
                  Scalable team capacity
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
                  Quality assurance reports
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
                  API access
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="border-b border-scheme-border py-5">
                <h3 className="text-h6 font-bold">Security</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Data encryption at rest
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  No
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  No
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  NDA protection
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
                  Secure file transfer
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
                  Compliance documentation
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
                  Data deletion policy
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
                    <h2 className="text-h6 font-bold">Machine</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">$0.00</h1>
                      <p className="inline-block font-bold">
                        <span>Per year (save 0%)</span>
                      </p>
                    </div>
                    <p>Fast but literal and often wrong</p>
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
                    <h2 className="text-h6 font-bold">Generic</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">$120</h1>
                      <p className="inline-block font-bold">
                        <span>Per year (save 0%)</span>
                      </p>
                    </div>
                    <p>Human but lacks industry focus</p>
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
                    <h2 className="text-h6 font-bold">Langigs</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">$180</h1>
                      <p className="inline-block font-bold">
                        <span>Per year (save 10%)</span>
                      </p>
                    </div>
                    <p>Native expert with subject-matter precision</p>
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
                <h3 className="text-h6 font-bold">Quality</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Cultural context accuracy
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  No
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  No
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Native linguist review
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
                  Subject-matter expertise
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
                  Confidential handling guaranteed
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
                  Revision requests included
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
                  Dedicated project manager
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  No
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  No
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Glossary and style guide
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
                  Scalable team capacity
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
                  Quality assurance reports
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
                  API access
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="border-b border-scheme-border py-5">
                <h3 className="text-h6 font-bold">Security</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Data encryption at rest
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  No
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  No
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  NDA protection
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
                  Secure file transfer
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
                  Compliance documentation
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
                  Data deletion policy
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
