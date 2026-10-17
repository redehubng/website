import type { Metadata } from "next";
import Link from "next/link";
import { CardGrid, CtaBand, PageHero, SectionHead, Stats, type CardItem } from "@/components/blocks";
import { Fill } from "@/components/Fill";
import { isTodo, partners, site, stats } from "@/content/site";

export const metadata: Metadata = {
  title: "Impact",
  description: "Community outreach, partnerships and donation drives that turn what RedeHub learns and builds into lasting change.",
};

const activities: CardItem[] = [
  {
    icon: "smile",
    title: "Fun time out",
    body: "Team and community bonding days that keep the culture strong and build real relationships.",
    href: "/#contact",
    cta: "Join the next one",
  },
  {
    icon: "heart",
    title: "Donation drives",
    body: "Fundraising campaigns that pay for STEM training, equipment and community programs.",
    href: "#support",
    cta: "Donate",
  },
  {
    icon: "pin",
    title: "Community outreach",
    body: "On-the-ground visits and partnerships with schools, co-ops and local organisations.",
    href: "/#contact",
    cta: "Invite us",
  },
  {
    icon: "handshake",
    title: "Become a partner",
    body: "Organisations and individuals who support our mission with time, resources or funding.",
    href: "/#contact",
    cta: "Partner with us",
  },
];

function DonateButton({ className }: { className: string }) {
  if (isTodo(site.donateUrl)) {
    return (
      <span className={className} title="Placeholder: set donateUrl in content/site.ts">
        <Fill value="[REPLACE: Donate]" />
      </span>
    );
  }
  return (
    <a className={className} href={site.donateUrl} target="_blank" rel="noopener noreferrer">
      Donate
    </a>
  );
}

export default function ImpactPage() {
  return (
    <div className="theme-impact">
      <PageHero
        pillar="impact"
        title="Giving back is the point."
        lead="Community outreach, partnerships and donations that turn what we learn and build into lasting change."
        image="impactHero"
        actions={
          <>
            <Link className="btn btn-orange" href="/#contact">
              Become a partner
            </Link>
            <DonateButton className="btn btn-ghost-light" />
          </>
        }
      />

      <section className="section-tight" style={{ paddingTop: 72 }}>
        <div className="container">
          <Stats items={stats.impact} label="Impact in numbers" />
        </div>
      </section>

      <section className="section" aria-labelledby="activities">
        <div className="container">
          <SectionHead eyebrow="What we do" title="Community, in practice" id="activities">
            Impact isn&apos;t a side project. It&apos;s where everything we learn and build is headed.
          </SectionHead>
          <CardGrid pillar="impact" items={activities} />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="band-dark">
            <h2>Partners who make this possible</h2>
            <ul className="badge-row">
              {partners.map((p, i) => (
                <li key={i} className="badge">
                  <Fill value={p} />
                </li>
              ))}
            </ul>
            <Link className="btn btn-orange" href="/#contact">
              Become a partner
            </Link>
          </div>
        </div>
      </section>

      <div id="support">
        <CtaBand
          title="Want to support our work?"
          body="Every donation helps fund STEM training, software programs for young people and community outreach."
        >
          <DonateButton className="btn btn-dark" />
        </CtaBand>
      </div>
    </div>
  );
}
