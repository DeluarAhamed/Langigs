"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

const useRelume = ({ defaultValue, selects }) => {
  const [activeSelect, setActiveSelect] = useState(defaultValue);
  const currentSelect = selects.find(function (select) {
    return select.value === activeSelect;
  });
  return { activeSelect, setActiveSelect, currentSelect };
};

export function Blog31() {
  const useActive = useRelume({
    defaultValue: "all-posts",
    selects: [
      {
        value: "all-posts",
        trigger: "All Posts",
        content: [
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
        ],
      },
      {
        value: "category-one",
        trigger: "Category one",
        content: [
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
        ],
      },
      {
        value: "category-two",
        trigger: "Category two",
        content: [
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
        ],
      },
      {
        value: "category-three",
        trigger: "Category three",
        content: [
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
        ],
      },
      {
        value: "category-four",
        trigger: "Category four",
        content: [
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
          {
            url: "#",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
              alt: "Relume placeholder image",
            },
            category: "Category",
            readTime: "5 min read",
            title: "Blog title heading will go here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
            avatar: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Relume placeholder avatar",
            },
            fullName: "Full name",
            date: "11 Jan 2022",
          },
        ],
      },
    ],
  });
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container flex max-w-lg flex-col">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Field notes</p>
            <h1 className="mb-5 text-h1 font-bold md:mb-6">
              Intelligence from the ground
            </h1>
            <p className="text-medium">
              Straight talk on language, data, and doing business in Africa
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="mb-10">
            <Select
              defaultValue="all-posts"
              value={useActive.activeSelect}
              onValueChange={useActive.setActiveSelect}
            >
              <SelectTrigger className="min-w-[12.5rem] px-4 py-2 md:w-auto">
                All posts
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-posts">All posts</SelectItem>
                <SelectItem value="category-one">AI data</SelectItem>
                <SelectItem value="category-two">Localization</SelectItem>
                <SelectItem value="category-three">Translation</SelectItem>
                <SelectItem value="category-four">Voice</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:gap-y-16">
                <div className="grid gap-x-8 gap-y-6 md:grid-cols-[.5fr_1fr] md:gap-x-10 md:gap-y-4">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-square w-full rounded-image object-cover"
                    />
                  </a>
                  <div className="flex h-full flex-col items-start justify-center">
                    <div className="mb-2">
                      <p className="inline text-small font-semibold">AI data</p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h3 className="text-h5 font-bold">
                        The blind spot in your speech recognition model
                      </h3>
                    </a>
                    <p>
                      African languages are tonal, rich, and complex. Your
                      dataset needs to match that reality.
                    </p>
                    <div className="mt-5 flex items-center md:mt-6">
                      <div className="mr-4 size-12 min-h-12 min-w-12 shrink-0 overflow-hidden rounded-full">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Chidi Okonkwo
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">28 Mar 2025</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">7 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-x-8 gap-y-6 md:grid-cols-[.5fr_1fr] md:gap-x-10 md:gap-y-4">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-square w-full rounded-image object-cover"
                    />
                  </a>
                  <div className="flex h-full flex-col items-start justify-center">
                    <div className="mb-2">
                      <p className="inline text-small font-semibold">
                        Localization
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h3 className="text-h5 font-bold">
                        A market is a conversation, not a translation
                      </h3>
                    </a>
                    <p>
                      You cannot simply swap the words. You have to earn the
                      trust behind them.
                    </p>
                    <div className="mt-5 flex items-center md:mt-6">
                      <div className="mr-4 size-12 min-h-12 min-w-12 shrink-0 overflow-hidden rounded-full">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Amina Diallo
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">21 Mar 2025</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">5 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-x-8 gap-y-6 md:grid-cols-[.5fr_1fr] md:gap-x-10 md:gap-y-4">
                  <a href="#" className="w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-square w-full rounded-image object-cover"
                    />
                  </a>
                  <div className="flex h-full flex-col items-start justify-center">
                    <div className="mb-2">
                      <p className="inline text-small font-semibold">
                        Translation
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h3 className="text-h5 font-bold">
                        The linguists building Africa's digital future
                      </h3>
                    </a>
                    <p>
                      A quiet network of native experts is reshaping how the
                      world connects with the continent.
                    </p>
                    <div className="mt-5 flex items-center md:mt-6">
                      <div className="mr-4 size-12 min-h-12 min-w-12 shrink-0 overflow-hidden rounded-full">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder avatar"
                          className="size-full object-cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-small font-semibold">
                          Kofi Mensah
                        </h6>
                        <div className="flex items-center">
                          <p className="text-small">15 Mar 2025</p>
                          <span className="mx-2">•</span>
                          <p className="text-small">4 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
