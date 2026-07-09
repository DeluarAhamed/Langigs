"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Add } from "relume-icons";

export function Faq6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Everything you need to know about our multilingual data collection
            process and capabilities.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <div className="grid items-start justify-items-stretch gap-4">
            <Card>
              <AccordionItem
                value="item-0"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  How is data privacy handled?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We treat data privacy as a fundamental right. All participant
                  data is collected with explicit, informed consent and is fully
                  anonymized before delivery. We are compliant with GDPR and
                  African Union data protection frameworks, and we provide a
                  complete chain of custody for every dataset.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-1"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  How do you recruit participants?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We do not use open call centers. Our team vets participants
                  through a multi-stage process including language proficiency
                  tests, dialect verification, and identity confirmation. We
                  source from our pre-qualified talent network and targeted
                  field recruitment to ensure authentic, representative data.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-2"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  What languages do you cover?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Our core strength is Africa, with access to native speakers
                  across over 2,000 languages and dialects. This includes
                  high-resource languages like Swahili and Yoruba, as well as
                  low-resource and endangered languages. We also facilitate data
                  collection globally through our vetted network.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-3"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  What is the minimum project size?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We handle projects of all scopes. A small, niche language
                  study can start with a few hundred data points. Large-scale
                  programs for enterprise AI training can involve millions of
                  utterances. We will design a plan that fits your specific
                  requirements and budget.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-4"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  What data formats are supported?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We deliver data in the format that works for your pipeline.
                  Common outputs include JSON, CSV, XML, WAV, and TXT files. We
                  can also structure the data for direct integration with your
                  annotation platforms or deliver it via a secure API.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
      </div>
    </section>
  );
}
