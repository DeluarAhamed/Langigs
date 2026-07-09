"use client"

import React from "react";
import { Header64 } from "@/components/multilingual-data-collection/header-64";
import { Layout503 } from "@/components/multilingual-data-collection/layout-503";
import { Layout374 } from "@/components/multilingual-data-collection/layout-374";
import { Layout373 } from "@/components/multilingual-data-collection/layout-373";
import { Layout492 } from "@/components/multilingual-data-collection/layout-492";
import { Layout399 } from "@/components/multilingual-data-collection/layout-399";
import { Layout526 } from "@/components/multilingual-data-collection/layout-526";
import { Testimonial22 } from "@/components/multilingual-data-collection/testimonial-22";
import { Pricing26 } from "@/components/multilingual-data-collection/pricing-26";
import { Faq6 } from "@/components/multilingual-data-collection/faq-06";
import { Cta25 } from "@/components/multilingual-data-collection/cta-25";


export default function Page() {
  return (
    <div>
      <Header64 />
      <Layout503 />
      <Layout374 />
      <Layout373 />
      <Layout492 />
      <Layout399 />
      <Layout526 />
      <Testimonial22 />
      <Pricing26 />
      <Faq6 />
      <Cta25 />
    </div>
  );
}
