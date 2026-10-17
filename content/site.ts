// Every value still to be filled in starts with "[REPLACE". Run `npm run todo` to list them.
// Text after "REPLACE: " is shown on the site (dashed outline) as an example until replaced.

export type Pillar = "learn" | "do" | "impact";

export const site = {
  name: "RedeHub",
  tagline: "learn.do.impact",
  url: "https://redehub.com.ng",
  description:
    "RedeHub teaches STEM and tech skills, builds software and websites for schools, co-ops and businesses, and puts both to work in the community.",

  contact: {
    email: "[REPLACE: hello@redehub.com.ng]",
    phone: "[REPLACE: +234 800 000 0000]",
    location: "[REPLACE: City, State, Nigeria]",
  },

  donateUrl: "[REPLACE: https://donation-page-url]",

  nav: [
    { href: "/learn", label: "Learn" },
    { href: "/do", label: "Do" },
    { href: "/impact", label: "Impact" },
    { href: "/#contact", label: "Contact" },
  ],

  // Socials without a real URL are hidden automatically.
  socials: [
    { id: "facebook", label: "Facebook", href: "https://facebook.com/redehubng" },
    { id: "x", label: "X (Twitter)", href: "https://x.com/redehubng" },
    { id: "instagram", label: "Instagram", href: "https://instagram.com/redehubng" },
    { id: "github", label: "GitHub", href: "https://github.com/redehubng" },
    { id: "linkedin", label: "LinkedIn", href: "[REPLACE: https://linkedin.com/company/...]" },
    { id: "behance", label: "Behance", href: "[REPLACE: https://behance.net/...]" },
  ],
} as const;

export const stats = {
  home: [
    { value: "[REPLACE: 1,200+]", label: "Learners trained" },
    { value: "[REPLACE: 40+]", label: "Products shipped" },
    { value: "[REPLACE: 15]", label: "Communities reached" },
    { value: "[REPLACE: 30+]", label: "Volunteer mentors" },
  ],
  learn: [
    { value: "[REPLACE: 1,200+]", label: "Learners trained" },
    { value: "[REPLACE: 25]", label: "Partner schools" },
    { value: "[REPLACE: 80+]", label: "Workshops run" },
    { value: "[REPLACE: 30+]", label: "Volunteer mentors" },
  ],
  impact: [
    { value: "[REPLACE: 3,000+]", label: "Young people reached" },
    { value: "[REPLACE: 15]", label: "Communities served" },
    { value: "[REPLACE: 50+]", label: "Outreach events" },
    { value: "[REPLACE: 12]", label: "Partner organisations" },
  ],
};

// Logos only, no project details. Add more by dropping a file in public/images/clients/
// and adding a line here. Entries with a "[REPLACE" src render as empty slots.
export const clients = [
  { name: "School Lite", src: "/images/clients/school-lite.png" },
  { name: "DIWA Africa", src: "/images/clients/diwafrica-logo.png" },
  { name: "Just Quilts", src: "/images/clients/justquilts2.png" },
  { name: "Pink Lady", src: "/images/clients/pinklady2.png" },
  { name: "ilmihouse", src: "/images/clients/ilmihouse-logo.png" },
  { name: "Layus", src: "/images/clients/layus2.png" },
  { name: "[REPLACE: client name]", src: "[REPLACE: /images/clients/new-client.svg]" },
  { name: "[REPLACE: client name]", src: "[REPLACE: /images/clients/new-client.svg]" },
];

export const partners = ["YOW", "ilmihouse", "[REPLACE: Partner]", "[REPLACE: Partner]"];

export function isTodo(value: string): boolean {
  return value.startsWith("[REPLACE");
}

/** The example text inside a "[REPLACE: …]" placeholder, or the value itself. */
export function display(value: string): string {
  const m = value.match(/^\[REPLACE:?\s*(.*)\]$/);
  return m ? m[1] || "—" : value;
}
