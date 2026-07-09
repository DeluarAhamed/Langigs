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
            The answers you need before you send us your audio.
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
                  How fast is turnaround?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Standard delivery is 48 hours. For longer files or complex
                  audio, we will give you a clear timeline upfront. Rush
                  delivery is available when the deadline is tight and the
                  stakes are high.
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
                  What file formats work?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We accept all major audio and video formats including MP3,
                  WAV, MP4, and MOV. If you have a rare format, send it over. We
                  will find a way to work with it.
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
                  Which languages do you cover?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We cover over 200 African languages and dialects. From Swahili
                  and Yoruba to Amharic and Zulu. We also handle code-switching
                  and mixed-language recordings with native fluency.
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
                  Is my data confidential?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Yes. We sign non-disclosure agreements as standard practice.
                  All files are encrypted in transit and at rest. Your research,
                  legal proceedings, and patient data stay protected.
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
                  What if I need revisions?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We stand behind the work. If a transcript does not meet the
                  agreed accuracy standard, we revise it at no cost. Your
                  satisfaction is the only acceptable outcome.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
      </div>
    </section>
  );
}
