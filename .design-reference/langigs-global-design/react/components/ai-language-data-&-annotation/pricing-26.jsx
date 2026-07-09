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
          <h1 className="mb-5 text-h2 font-bold md:mb-6">Service tiers</h1>
          <p className="text-medium">
            Choose the right partnership for your data needs
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
                    <h2 className="text-h6 font-bold">Self-serve</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">Custom</h1>
                      <p className="inline-block font-bold">
                        <span>Per project</span>
                      </p>
                    </div>
                    <p>Marketplace access for simple tasks</p>
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
                    <h2 className="text-h6 font-bold">Managed</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">Custom</h1>
                      <p className="inline-block font-bold">
                        <span>Per project</span>
                      </p>
                    </div>
                    <p>Dedicated PM and quality assurance</p>
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
                      <h1 className="text-h1 font-bold">Custom</h1>
                      <p className="inline-block font-bold">
                        <span>Annual retainer</span>
                      </p>
                    </div>
                    <p>Custom SLA and dedicated teams</p>
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
                <h3 className="text-h6 font-bold">Project management</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Access to marketplace
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Dedicated project manager
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
                  Quality assurance reviews
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
                  Custom workflow design
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
                  Priority support channel
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="border-b border-scheme-border py-5">
                <h3 className="text-h6 font-bold">Data security</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Standard NDA
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Custom data handling agreements
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
                  On-premise annotation options
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
                  Private talent pools
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
                  Security audit reports
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="border-b border-scheme-border py-5">
                <h3 className="text-h6 font-bold">Scale and speed</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Maximum annotators per task
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  50
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  200
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Unlimited
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Concurrent project capacity
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
                  Rapid turnaround options
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
                  Dedicated team onboarding
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
                    <h2 className="text-h6 font-bold">Self-serve</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">Custom</h1>
                      <p className="inline-block font-bold">
                        <span>Per project</span>
                      </p>
                    </div>
                    <p>Marketplace access for simple tasks</p>
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
                    <h2 className="text-h6 font-bold">Managed</h2>
                    <div className="my-3 md:my-4">
                      <h1 className="text-h1 font-bold">Custom</h1>
                      <p className="inline-block font-bold">
                        <span>Per project</span>
                      </p>
                    </div>
                    <p>Dedicated PM and quality assurance</p>
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
                      <h1 className="text-h1 font-bold">Custom</h1>
                      <p className="inline-block font-bold">
                        <span>Annual retainer</span>
                      </p>
                    </div>
                    <p>Custom SLA and dedicated teams</p>
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
                <h3 className="text-h6 font-bold">Project management</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Access to marketplace
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Dedicated project manager
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
                  Quality assurance reviews
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
                  Custom workflow design
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
                  Priority support channel
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="border-b border-scheme-border py-5">
                <h3 className="text-h6 font-bold">Data security</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Standard NDA
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Yes
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Custom data handling agreements
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
                  On-premise annotation options
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
                  Private talent pools
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
                  Security audit reports
                </p>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
                  <Check className="size-6 text-scheme-text" />
                </div>
              </div>
              <div className="border-b border-scheme-border py-5">
                <h3 className="text-h6 font-bold">Scale and speed</h3>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Maximum annotators per task
                </p>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  50
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  200
                </div>
                <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Unlimited
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Concurrent project capacity
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
                  Rapid turnaround options
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
                  Dedicated team onboarding
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
