import Image from "next/image";
import Link from "next/link";
import { Fill } from "@/components/Fill";
import { Icon } from "@/components/icons";
import { PillarArt } from "@/components/PillarArt";
import { SectionImage } from "@/components/SectionImage";
import { Socials } from "@/components/Socials";
import { Stats } from "@/components/blocks";
import type { ImageSlotId } from "@/content/images";
import { clients, display, isTodo, site, stats, type Pillar } from "@/content/site";

type Screen = {
  pillar: Pillar;
  index: string;
  title: string;
  lead: string;
  points: string[];
  image: ImageSlotId;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  next: { href: string; label: string; up?: boolean };
};

const screens: Screen[] = [
  {
    pillar: "learn",
    index: "01",
    title: "Learn",
    lead: "Hands-on STEM training, mentor-led workshops and team programs that build real skills, for students, schools and teams.",
    points: ["STEM consultancy for schools and parents", "Corporate training workshops", "One-to-one mentor network"],
    image: "homeLearn",
    primary: { href: "/learn", label: "Explore Learn" },
    secondary: { href: "#contact", label: "Book a session" },
    next: { href: "#do", label: "Next: Do" },
  },
  {
    pillar: "do",
    index: "02",
    title: "Do",
    lead: "Software, websites and products we design and build, plus the consultancy and hackathons that get them there.",
    points: ["Software development", "Website design and development", "Business and co-op consultancy"],
    image: "homeDo",
    primary: { href: "/do", label: "Explore Do" },
    secondary: { href: "#contact", label: "Start a project" },
    next: { href: "#impact", label: "Next: Impact" },
  },
  {
    pillar: "impact",
    index: "03",
    title: "Impact",
    lead: "Community outreach, partnerships and giving back, because the point of building is who it reaches.",
    points: ["Community outreach and partnerships", "Donation drives", "Fun time out and team culture"],
    image: "homeImpact",
    primary: { href: "/impact", label: "Explore Impact" },
    secondary: { href: "/impact#support", label: "Support our work" },
    next: { href: "#top", label: "Back to top", up: true },
  },
];

export default function Home() {
  const { email, phone, location } = site.contact;

  return (
    <>
      {/* HERO: the name is the idea — three verbs, each closed with a petal from the logo */}
      <section className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <h1 className="hero-title">
              <span>
                Learn<i className="petal petal-learn" aria-hidden="true" />
              </span>
              <span>
                Do<i className="petal petal-do" aria-hidden="true" />
              </span>
              <span>
                Impact<i className="petal petal-impact" aria-hidden="true" />
              </span>
            </h1>
            <p className="hero-lead">{site.description}</p>
            <div className="ctas">
              <Link className="btn btn-orange" href="#contact">
                Start a project
              </Link>
              <Link className="btn btn-outline" href="/learn">
                Bring a program to your school
              </Link>
            </div>
          </div>
          <div className="photo-grid">
            <SectionImage slot="homeHeroA" sizes="(max-width: 900px) 55vw, 300px" priority />
            <SectionImage slot="homeHeroB" sizes="(max-width: 900px) 45vw, 240px" priority />
            <SectionImage slot="homeHeroC" sizes="(max-width: 900px) 45vw, 240px" />
          </div>
        </div>
      </section>

      {/* DECK: stacked pillar screens (from the export) */}
      <div className="deck">
        {screens.map((s) => (
          <section key={s.pillar} id={s.pillar} className={`pillar-screen screen-${s.pillar}`} aria-labelledby={`${s.pillar}-title`}>
            <span className="screen-index" aria-hidden="true">
              {s.index}
            </span>
            <div className="container screen-grid">
              <div>
                <h2 className="screen-title" id={`${s.pillar}-title`}>
                  {s.title}
                </h2>
                <p className="screen-lead">{s.lead}</p>
                <ul className="screen-list">
                  {s.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="ctas screen-ctas">
                  <Link className="btn btn-orange" href={s.primary.href}>
                    {s.primary.label}
                  </Link>
                  <Link className={`btn ${s.pillar === "impact" ? "btn-ghost-light" : "btn-outline"}`} href={s.secondary.href}>
                    {s.secondary.label}
                  </Link>
                </div>
              </div>
              <div className="screen-media">
                <SectionImage slot={s.image} sizes="(max-width: 900px) 100vw, 540px" className="photo" />
                <div className="screen-art">
                  <PillarArt pillar={s.pillar} />
                </div>
              </div>
            </div>
            <a className="scroll-cue" href={s.next.href}>
              {s.next.label}
              <Icon name="chevronDown" style={s.next.up ? { rotate: "180deg" } : undefined} />
            </a>
          </section>
        ))}
      </div>

      {/* PROOF: numbers + who we've worked with */}
      <section className="section" aria-labelledby="proof-title">
        <div className="container">
          <h2 id="proof-title" className="visually-hidden">
            RedeHub in numbers
          </h2>
          <Stats items={stats.home} label="RedeHub in numbers" />

          <div style={{ marginTop: 80 }}>
            <div className="logo-strip-head">
              <h2>Schools, businesses and co-ops we&apos;ve worked with</h2>
              <Link className="btn-link" href="/do#clients">
                See all clients
                <Icon name="arrow" />
              </Link>
            </div>
            <ul className="logo-row">
              {clients
                .filter((c) => !isTodo(c.src))
                .slice(0, 6)
                .map((c) => (
                  <li key={c.src}>
                    <Image src={c.src} alt={c.name} width={190} height={80} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-tight" id="contact" aria-labelledby="contact-title">
        <div className="container">
          <div className="contact">
            <div>
              <h2 id="contact-title">Tell us what you&apos;re working on</h2>
              <p>
                A workshop for your school, a website for your business or a partnership for your community: send us a
                note and we&apos;ll get back to you.
              </p>
              <div className="ctas" style={{ marginTop: 28 }}>
                {isTodo(email) ? (
                  <span className="btn btn-dark">
                    <Fill value={`[REPLACE: Email us]`} />
                  </span>
                ) : (
                  <a className="btn btn-dark" href={`mailto:${email}`}>
                    Email us
                  </a>
                )}
              </div>
            </div>
            <div>
              <ul className="contact-list">
                <li>
                  <Icon name="mail" />
                  <span>
                    <span className="label">Email</span>
                    {isTodo(email) ? <Fill value={email} /> : <a href={`mailto:${email}`}>{email}</a>}
                  </span>
                </li>
                <li>
                  <Icon name="phone" />
                  <span>
                    <span className="label">Phone</span>
                    {isTodo(phone) ? (
                      <Fill value={phone} />
                    ) : (
                      <a href={`tel:${display(phone).replace(/\s/g, "")}`}>{phone}</a>
                    )}
                  </span>
                </li>
                <li>
                  <Icon name="pin" />
                  <span>
                    <span className="label">Location</span>
                    <Fill value={location} />
                  </span>
                </li>
              </ul>
              <div style={{ marginTop: 28 }}>
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
