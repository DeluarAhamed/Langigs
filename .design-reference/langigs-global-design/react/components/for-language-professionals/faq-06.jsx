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
            Everything you need to know about joining the Langigs talent network
            and starting your first project.
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
                  What is the vetting process?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  We review your application, verify your credentials, and
                  assess your language proficiency. Shortlisted candidates
                  complete a paid sample project that mirrors real client work.
                  This ensures we only present top-tier talent to our partners.
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
                  How does payment work?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  You set your rate and we add our margin. Clients pay into
                  escrow before work begins. Once the project is approved, we
                  release payment directly to you via bank transfer or mobile
                  money within seven days.
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
                  What types of projects are available?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Projects range from AI data annotation and speech collection
                  to legal document translation and website localization. We
                  match you based on your skills, dialects, and domain
                  expertise. You will never be asked to bid on work outside your
                  specialty.
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
                  Is there a minimum time commitment?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  No. You are an independent professional. You choose which
                  projects to accept. Some assignments take a few hours while
                  others are long-term retainers. You control your schedule
                  completely.
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
                  How do I apply?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Complete the application form on this page with your language
                  pairs and expertise. Our talent team reviews every submission.
                  If there is a fit, you will hear from us within two weeks to
                  schedule a short onboarding call.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
      </div>
    </section>
  );
}
