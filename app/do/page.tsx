import type { Metadata } from "next";
import Link from "next/link";
import { CardGrid, CtaBand, LogoWall, PageHero, SectionHead, type CardItem } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Do",
  description: "Software, websites and consultancy for schools, co-ops and businesses, designed and built by RedeHub.",
};

const services: CardItem[] = [
  {
    icon: "code",
    title: "Software development",
    body: "Custom software built around how your team actually works, from internal tools to full products.",
    href: "/#contact",
    cta: "Discuss your software",
  },
  {
    icon: "browser",
    title: "Website design and development",
    body: "Modern, fast websites and web apps designed to represent your brand and turn visitors into customers.",
    href: "/#contact",
    cta: "Plan a website",
  },
  {
    icon: "briefcase",
    title: "Business and co-op consultancy",
    body: "Strategic and technical consultancy for co-operatives and small businesses looking to grow.",
    href: "/#contact",
    cta: "Book a consultation",
  },
  {
    icon: "bolt",
    title: "Hackathons and product sprints",
    body: "Time-boxed sprints where our youth teams design, build and ship a working product.",
    href: "/learn",
    cta: "Meet the teams",
  },
];

export default function DoPage() {
  return (
    <div className="theme-do">
      <PageHero
        pillar="do"
        title="Ideas, built and shipped."
        lead="Software, websites and products we design and build for schools, co-ops and partners, plus the consultancy and hackathons that get them there."
        image="doHero"
        actions={
          <>
            <Link className="btn btn-orange" href="/#contact">
              Start a project
            </Link>
            <Link className="btn btn-outline" href="#clients">
              See who we work with
            </Link>
          </>
        }
      />

      <section className="section" aria-labelledby="services">
        <div className="container">
          <SectionHead eyebrow="Services" title="What we build" id="services">
            From a first prototype to a product people rely on: software, web and strategy under one roof.
          </SectionHead>
          <CardGrid pillar="do" items={services} />
        </div>
      </section>

      <section className="section-tight" aria-labelledby="clients">
        <div className="container">
          <SectionHead eyebrow="Clients" title="Who we've worked with" id="clients" />
          <LogoWall />
        </div>
      </section>

      <CtaBand title="Have a project in mind?" body="Tell us what you're building and we'll put together a team.">
        <Link className="btn btn-dark" href="/#contact">
          Start a project
        </Link>
      </CtaBand>
    </div>
  );
}
