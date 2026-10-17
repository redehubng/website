// Line icons ported from the Claude Design export (24×24, stroke = currentColor).
import type { SVGProps } from "react";

const paths = {
  check: <path d="M5 12l4 4 10-10" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevronDown: <path d="M6 9l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  pin: (
    <>
      <path d="M12 21s-6-4.5-6-10a6 6 0 0 1 12 0c0 5.5-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),

  // Learn
  cap: (
    <>
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M7 10v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" />
      <circle cx="17" cy="9" r="2.2" />
      <path d="M15.5 14.2c2.3.4 3.7 1.9 3.7 3.8" />
    </>
  ),
  mentor: (
    <>
      <path d="M12 3l1.8 3.7L18 7.3l-3 2.9.7 4.1L12 12.4 8.3 14.3 9 10.2l-3-2.9 4.2-.6z" />
      <path d="M5 21c0-2.8 3.1-5 7-5s7 2.2 7 5" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="5" width="18" height="13" rx="2" />
      <path d="M8 20h8M7 9l3 2.5L7 14M13 14h4" />
    </>
  ),

  // Do
  code: <path d="M8 9l-5 5 5 5M16 9l5 5-5 5M14 4l-4 18" />,
  browser: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,

  // Impact
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14c1 1.2 2.1 1.8 3.5 1.8s2.5-.6 3.5-1.8M9 10h.01M15 10h.01" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.3-9.5-8.7C.8 7.8 2.6 4.5 6 4.1c2-.2 3.6.9 4.5 2.3C11.4 5 13 3.9 15 4.1c3.4.4 5.2 3.7 3.5 7.2C16 15.7 12 20 12 20z" />
  ),
  handshake: (
    <>
      <path d="M7 13l3 3 7-7" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),

  // Socials
  facebook: <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H7v3h2v9h3v-9h2.5l.5-3h-3V6.8c0-.5.3-.8.8-.8H15z" />,
  x: <path d="M4 4l11 16h5L9 4zM4 20l6.5-6.8M20 4l-6.5 6.8" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.3 6.7h.01" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C6.6 2.8 5.6 3.1 5.6 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10v7M7.5 6.8h.01M11.5 17v-4.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5V17" />
    </>
  ),
  behance: (
    <>
      <path d="M2 7h7M2 17h6a3 3 0 0 0 0-6H2v6zm0-10h6a2.5 2.5 0 0 1 0 5H2V7z" />
      <path d="M14 13.5c0-2 1.3-3.5 3.5-3.5S21 11.5 21 13.5a1 1 0 0 1-1 1h-6M14 13.8c0 2 1.4 3.5 3.6 3.5 1.5 0 2.6-.6 3.1-1.7" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
