"use client"

import React from "react";
import { Header64 } from "@/components/translation-services/header-64";
import { Layout504 } from "@/components/translation-services/layout-504";
import { Layout503 } from "@/components/translation-services/layout-503";
import { Layout400 } from "@/components/translation-services/layout-400";
import { Layout353 } from "@/components/translation-services/layout-353";
import { Pricing25 } from "@/components/translation-services/pricing-25";
import { Testimonial22 } from "@/components/translation-services/testimonial-22";
import { Pricing26 } from "@/components/translation-services/pricing-26";
import { Cta25 } from "@/components/translation-services/cta-25";


export default function Page() {
  return (
    <div>
      <Header64 />
      <Layout504 />
      <Layout503 />
      <Layout400 />
      <Layout353 />
      <Pricing25 />
      <Testimonial22 />
      <Pricing26 />
      <Cta25 />
    </div>
  );
}
