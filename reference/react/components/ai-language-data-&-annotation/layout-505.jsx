"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout505() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Why Langigs</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Data built on trust
          </h1>
          <p className="text-medium">
            Your models need more than words. They need the cultural truth only
            a native speaker can provide.
          </p>
        </div>
        <Card>
          <Tabs
            defaultValue="tab-1"
            orientation="vertical"
            className="relative grid auto-cols-fr grid-cols-1 md:grid-cols-[1fr_1.5fr]"
          >
            <TabsList className="relative grid h-full auto-cols-fr grid-cols-1 border-b border-scheme-border group-data-[slot=card-flat]:border-0 md:border-r md:border-b-0 md:group-data-[slot=card-flat]:border-0">
              <TabsTrigger
                value="tab-1"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Vetted linguists
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Custom datasets
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Quality control
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Scalable workflows
              </TabsTrigger>
              <TabsTrigger
                value="tab-5"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Ethical sourcing
              </TabsTrigger>
              <TabsTrigger
                value="tab-6"
                className="items-start justify-start rounded-none border-0 border-b p-6 text-h5 font-bold group-data-[slot=card-flat]:border-0 last-of-type:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background group-data-[slot=card-flat]:data-[state=inactive]:border-0 md:px-8"
              >
                Security
              </TabsTrigger>
            </TabsList>
            <div>
              <TabsContent
                value="tab-1"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/language.svg"
                    />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Every annotator is a proven native speaker
                  </h2>
                  <p>
                    We test for fluency and cultural fit. You get data from
                    people who live the language.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Learn</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      More
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-2"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/dataset.svg"
                    />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Datasets designed for your exact specifications
                  </h2>
                  <p>
                    No off-the-shelf answers. We build your corpus from the
                    ground up to match your model's needs.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Learn</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      More
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-3"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/data_check.svg"
                    />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Multi-pass validation catches what machines miss
                  </h2>
                  <p>
                    Human review at every stage. We measure agreement between
                    annotators and correct drift early.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Learn</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      More
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-4"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/scale.svg"
                    />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Scale up or down without losing precision
                  </h2>
                  <p>
                    From a single dialect to a continent-wide collection. Our
                    network flexes to your timeline.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Learn</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      More
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-5"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/csv.svg"
                    />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Fair pay and transparent data practices
                  </h2>
                  <p>
                    We pay living wages. We secure consent. Your data pipeline
                    is clean from source to delivery.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Learn</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      More
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tab-6"
                className="data-[state=active]:animate-tabs"
              >
                <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                  <div className="mb-5 md:mb-6">
                    <img
                      className="size-12 text-scheme-text"
                      src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/security.svg"
                    />
                  </div>
                  <h2 className="mb-5 text-h3 font-bold md:mb-6">
                    Your data stays yours, protected and private
                  </h2>
                  <p>
                    Custom NDAs, on-premise options, and private talent pools
                    keep your IP secure.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Learn</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      More
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
