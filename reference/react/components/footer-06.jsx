"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer6() {
  const formState = useForm();
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 scheme-2">
      <div className="container">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-medium font-semibold">Join our newsletter</h1>
            <p>Get insights on African language data and market entry.</p>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <form
              className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
              onSubmit={formState.handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formState.email}
                onChange={formState.handleSetEmail}
              />
              <Button title="Subscribe" variant="secondary" size="sm">
                Subscribe
              </Button>
            </form>
            <p className="text-tiny">
              By subscribing you agree to with our Privacy Policy
            </p>
          </div>
        </div>
        <div className="py-12 md:py-18 lg:py-20">
          <div className="h-px w-full bg-scheme-border" />
        </div>
        <div className="mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Services</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Translation
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Transcription
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Localization
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Voice recording
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  AI data
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Company</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  About
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Case studies
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Blog
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Contact
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Book a call
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Audiences</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Organizations
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  AI companies
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  NGOs
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Researchers
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Professionals
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Expertise</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Multilingual data
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Annotation
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Dataset validation
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Speech data
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Quality
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Connect</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  LinkedIn
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Twitter
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Instagram
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Facebook
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 font-semibold">Legal</h2>
            <ul>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Privacy policy
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Terms of service
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Cookie policy
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Accessibility statement
                </a>
              </li>
              <li className="text-small py-2">
                <a href="#" className="flex items-center gap-3">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col items-start pt-6 pb-4 sm:flex-row sm:items-center sm:justify-between md:pt-8 md:pb-0">
          <a href="#" className="mb-6 sm:mb-0">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
            />
          </a>
          <p className="text-small">
            © 2025 Langigs Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
