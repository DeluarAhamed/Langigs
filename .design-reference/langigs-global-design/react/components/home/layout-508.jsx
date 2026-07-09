"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout508() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Services</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Language services built for impact
          </h1>
          <p className="text-medium">
            Human intelligence and precision for every word that matters.
          </p>
        </div>
        <Card className="relative grid auto-cols-fr grid-cols-1 gap-x-12 lg:gap-x-0">
          <Tabs defaultValue="tab-1" className="grid">
            <TabsList className="order-2 flex-col group-data-[slot=card-flat]:border-0 md:order-1 md:flex-row">
              <TabsTrigger
                value="tab-1"
                className="w-full items-start justify-start gap-4 rounded-none border-0 border-y p-6 text-h6 font-bold whitespace-normal group-data-[slot=card-flat]:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-t-0 md:border-r md:px-8 md:py-6 md:data-[state=active]:border-b-transparent"
              >
                Translation services for clear and accurate communication
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 text-h6 font-bold whitespace-normal group-data-[slot=card-flat]:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:data-[state=active]:border-b-transparent"
              >
                Transcription services
              </TabsTrigger>
              <TabsTrigger
                value="tab-3"
                className="w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 text-h6 font-bold whitespace-normal group-data-[slot=card-flat]:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:data-[state=active]:border-b-transparent"
              >
                AI language data
              </TabsTrigger>
              <TabsTrigger
                value="tab-4"
                className="w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 text-h6 font-bold whitespace-normal group-data-[slot=card-flat]:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:data-[state=active]:border-b-transparent"
              >
                Voice recording
              </TabsTrigger>
              <TabsTrigger
                value="tab-5"
                className="w-full items-start justify-start gap-4 rounded-none border-0 border-b p-6 text-h6 font-bold whitespace-normal group-data-[slot=card-flat]:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:data-[state=active]:border-b-transparent"
              >
                Localization
              </TabsTrigger>
              <TabsTrigger
                value="tab-6"
                className="w-full items-start justify-start gap-4 rounded-none border-0 border-b-0 p-6 text-h6 font-bold whitespace-normal group-data-[slot=card-flat]:border-0 data-[state=active]:bg-scheme-foreground data-[state=inactive]:border-scheme-border data-[state=inactive]:bg-scheme-background md:items-center md:justify-center md:border-b md:px-8 md:py-6 md:data-[state=active]:border-b-transparent"
              >
                Data collection
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="tab-1"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div className="h-full">
                  <img
                    src="https://d1p38huyj6upaa.cloudfront.net/default-27.jpg"
                    className="size-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <div>
                    <p className="mb-3 font-semibold md:mb-4">Services</p>
                    <h2 className="mb-5 text-h3 font-bold md:mb-6">
                      The full spectrum of language work
                    </h2>
                    <p>
                      Native linguists deliver precise translations that respect
                      culture and context for your most critical content.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Services</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Translation
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-2"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div className="h-full">
                  <img
                    src="https://d1p38huyj6upaa.cloudfront.net/default-7.jpg"
                    className="w-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <div>
                    <p className="mb-3 font-semibold md:mb-4">Translation</p>
                    <h2 className="mb-5 text-h3 font-bold md:mb-6">
                      Clear and accurate communication in any language
                    </h2>
                    <p>
                      Fast, accurate audio and video transcription by native
                      speakers.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Services</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Translation
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-3"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div className="h-full">
                  <img
                    src="https://d1p38huyj6upaa.cloudfront.net/default-28.jpg"
                    className="w-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <div>
                    <p className="mb-3 font-semibold md:mb-4">Transcription</p>
                    <h2 className="mb-5 text-h3 font-bold md:mb-6">
                      Audio and video turned into precise text
                    </h2>
                    <p>
                      Annotation, speech data, and validation to train better
                      models.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Services</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Transcription
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-4"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div className="h-full">
                  <img
                    src="https://d1p38huyj6upaa.cloudfront.net/default-14.jpg"
                    className="w-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <div>
                    <p className="mb-3 font-semibold md:mb-4">AI data</p>
                    <h2 className="mb-5 text-h3 font-bold md:mb-6">
                      Annotation and validation for smarter models
                    </h2>
                    <p>
                      Native speakers label, annotate, and validate datasets so
                      your models learn from the real world. We deliver clean
                      data that trains better AI.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Services</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      AI data
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-5"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div className="h-full">
                  <img
                    src="https://d1p38huyj6upaa.cloudfront.net/default-20.jpg"
                    className="w-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <div>
                    <p className="mb-3 font-semibold md:mb-4">Voice</p>
                    <h2 className="mb-5 text-h3 font-bold md:mb-6">
                      Native speech captured for your projects
                    </h2>
                    <p>
                      Studio-quality recordings from native speakers across
                      hundreds of dialects. Your voice projects sound authentic
                      because they are.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Services</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Voice
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tab-6"
              className="order-1 data-[state=active]:animate-tabs md:order-2"
            >
              <div className="grid grid-cols-1 gap-y-12 p-6 md:grid-cols-2 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12">
                <div className="h-full">
                  <img
                    src="https://d1p38huyj6upaa.cloudfront.net/default-12.jpg"
                    className="w-full rounded-image object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div>
                  <div>
                    <p className="mb-3 font-semibold md:mb-4">Localization</p>
                    <h2 className="mb-5 text-h3 font-bold md:mb-6">
                      Adapt your product for every market you enter
                    </h2>
                    <p>
                      We go beyond translation to adapt culture, context, and
                      nuance. Your brand lands with the same force in Lagos as
                      it does in London.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Services</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Localization
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
