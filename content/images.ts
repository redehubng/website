// Image manifest: one entry per image slot on the site.
//
// To fill a slot:
//   1. Save the photo to the folder in `src` (JPG or WebP, at least `minWidth` px wide).
//   2. Replace `src: null` with its path, write a real `alt`, and add `credit` if the licence asks for one.
// Until then the slot renders a placeholder showing the search phrases below.
// Where to find photos: see public/images/README.md.

import type { Pillar } from "./site";

export type ImageSlot = {
  /** e.g. "/images/learn/hero.jpg"; null renders the placeholder. */
  src: string | null;
  alt: string;
  /** CSS aspect-ratio, e.g. "4 / 3". */
  ratio: string;
  minWidth: number;
  /** Suggested search phrases for Nappy, Pexels, Unsplash. */
  search: string[];
  /** "Photographer / Source"; shown on the image when set. */
  credit: string | null;
  tone: Pillar | "neutral";
};

export const images = {
  // ---------- Home ----------
  homeHeroA: {
    src: null, // [REPLACE] → "/images/home/hero-a.jpg"
    alt: "[REPLACE: e.g. Students coding on laptops at a RedeHub session]",
    ratio: "3 / 4",
    minWidth: 1200,
    search: ["African students coding laptop classroom", "Nigerian teenagers technology class"],
    credit: null,
    tone: "learn",
  },
  homeHeroB: {
    src: null, // [REPLACE] → "/images/home/hero-b.jpg"
    alt: "[REPLACE: e.g. RedeHub developers planning a build at a whiteboard]",
    ratio: "4 / 3",
    minWidth: 1000,
    search: ["African software developers team office", "Lagos tech hub coworking"],
    credit: null,
    tone: "do",
  },
  homeHeroC: {
    src: null, // [REPLACE] → "/images/home/hero-c.jpg"
    alt: "[REPLACE: e.g. Volunteers handing out school kits at a community visit]",
    ratio: "4 / 3",
    minWidth: 1000,
    search: ["African youth community volunteers", "Nigeria community outreach children"],
    credit: null,
    tone: "impact",
  },
  homeLearn: {
    src: null, // [REPLACE] → "/images/home/learn.jpg"
    alt: "[REPLACE: e.g. A mentor guiding two students through a robotics kit]",
    ratio: "4 / 3",
    minWidth: 1600,
    search: ["kids robotics STEM workshop Africa", "mentor teaching student laptop Black"],
    credit: null,
    tone: "learn",
  },
  homeDo: {
    src: null, // [REPLACE] → "/images/home/do.jpg"
    alt: "[REPLACE: e.g. A developer reviewing code on two screens]",
    ratio: "4 / 3",
    minWidth: 1600,
    search: ["African developer writing code", "team whiteboard product design sprint"],
    credit: null,
    tone: "do",
  },
  homeImpact: {
    src: null, // [REPLACE] → "/images/home/impact.jpg"
    alt: "[REPLACE: e.g. Children receiving donated books at an outreach event]",
    ratio: "4 / 3",
    minWidth: 1600,
    search: ["volunteers donating school supplies Africa", "community event Nigeria smiling"],
    credit: null,
    tone: "impact",
  },

  // ---------- Inner pages ----------
  learnHero: {
    src: null, // [REPLACE] → "/images/learn/hero.jpg"
    alt: "[REPLACE: e.g. Students wiring a robot kit at a RedeHub workshop]",
    ratio: "4 / 3",
    minWidth: 1600,
    search: ["Nigerian students robotics workshop", "African girls in STEM"],
    credit: null,
    tone: "learn",
  },
  doHero: {
    src: null, // [REPLACE] → "/images/do/hero.jpg"
    alt: "[REPLACE: e.g. A RedeHub team shipping a product during a hackathon]",
    ratio: "4 / 3",
    minWidth: 1600,
    search: ["hackathon team Africa laptops", "Black software engineers collaborating"],
    credit: null,
    tone: "do",
  },
  impactHero: {
    src: null, // [REPLACE] → "/images/impact/hero.jpg"
    alt: "[REPLACE: e.g. A RedeHub volunteer reading with children in a classroom]",
    ratio: "4 / 3",
    minWidth: 1600,
    search: ["African children classroom donation", "community outreach Nigeria youth"],
    credit: null,
    tone: "impact",
  },
} satisfies Record<string, ImageSlot>;

export type ImageSlotId = keyof typeof images;
