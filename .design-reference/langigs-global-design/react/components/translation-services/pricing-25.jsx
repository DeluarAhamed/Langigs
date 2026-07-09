"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Check } from "relume-icons";

export function Pricing25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Pricing</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">Translation plans</h1>
          <p className="text-medium">
            Transparent pricing built around your volume and subject-matter
            needs
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit items-center justify-center rounded-button border border-scheme-border bg-scheme-foreground p-1 group-data-[slot=card-flat]:border-transparent">
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
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <Card className="flex h-full flex-col justify-start px-6 py-8 md:p-8">
              <h2 className="mb-1 text-h6 font-bold">Starter plan</h2>
              <p>For small projects and occasional needs</p>
              <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
              <h3 className="my-2 text-h1 font-bold">$0.18</h3>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Per word pricing</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Native human translator</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Standard turnaround</p>
                </div>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-start px-6 py-8 md:p-8">
              <h2 className="mb-1 text-h6 font-bold">Professional plan</h2>
              <p>For growing teams with regular volume</p>
              <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
              <h3 className="my-2 text-h1 font-bold">$0.15</h3>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Per word pricing</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Industry-specialist translator</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Dedicated project manager</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Priority turnaround</p>
                </div>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-start px-6 py-8 md:p-8">
              <h2 className="mb-1 text-h6 font-bold">Enterprise plan</h2>
              <p>For large-scale and retainer engagements</p>
              <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
              <h3 className="my-2 text-h1 font-bold">Custom</h3>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Custom volume pricing</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Glossary and style guide</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>API access available</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Dedicated account director</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Quality assurance reports</p>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <Card className="flex h-full flex-col justify-start px-6 py-8 md:p-8">
              <h2 className="mb-1 text-h6 font-bold">Starter plan</h2>
              <p>For small projects and occasional needs</p>
              <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
              <h3 className="my-2 text-h1 font-bold">$0.16</h3>
              <p className="font-medium">Save 10%</p>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Per word pricing</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Native human translator</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Standard turnaround</p>
                </div>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-start px-6 py-8 md:p-8">
              <h2 className="mb-1 text-h6 font-bold">Professional plan</h2>
              <p>For growing teams with regular volume</p>
              <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
              <h3 className="my-2 text-h1 font-bold">$0.13</h3>
              <p className="font-medium">Save 10%</p>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Per word pricing</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Industry-specialist translator</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Dedicated project manager</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Priority turnaround</p>
                </div>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-start px-6 py-8 md:p-8">
              <h2 className="mb-1 text-h6 font-bold">Enterprise plan</h2>
              <p>For large-scale and retainer engagements</p>
              <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
              <h3 className="my-2 text-h1 font-bold">Custom</h3>
              <p className="font-medium">Save 10%</p>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-6 h-px w-full shrink-0 bg-scheme-border md:my-8" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Custom volume pricing</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Glossary and style guide</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>API access available</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Dedicated account director</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-scheme-text" />
                  </div>
                  <p>Quality assurance reports</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
