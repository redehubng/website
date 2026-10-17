import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ImageSlotId } from "@/content/images";
import { clients, isTodo, type Pillar } from "@/content/site";
import { Fill } from "./Fill";
import { Icon, type IconName } from "./icons";
import { SectionImage } from "./SectionImage";

const order: Record<Pillar, string> = { learn: "01", do: "02", impact: "03" };
const names: Record<Pillar, string> = { learn: "Learn", do: "Do", impact: "Impact" };

export function Eyebrow({ pillar, children }: { pillar?: Pillar; children?: ReactNode }) {
  return (
    <span className="eyebrow">
      {pillar && <span className="num">{order[pillar]}</span>}
      {children ?? (pillar && names[pillar])}
    </span>
  );
}

export function PageHero({
  pillar,
  title,
  lead,
  image,
  actions,
}: {
  pillar: Pillar;
  title: string;
  lead: string;
  image: ImageSlotId;
  actions: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-inner">
          <div>
            <Eyebrow pillar={pillar} />
            <h1>{title}</h1>
            <p className="lead">{lead}</p>
            <div className="ctas">{actions}</div>
          </div>
          <SectionImage slot={image} sizes="(max-width: 900px) 100vw, 540px" priority />
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, children, id }: { eyebrow: string; title: string; children?: ReactNode; id?: string }) {
  return (
    <div className="section-head">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id}>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export type CardItem = { icon: IconName; title: string; body: string; href: string; cta: string };

export function CardGrid({ pillar, items }: { pillar: Pillar; items: CardItem[] }) {
  return (
    <ul className="grid-4">
      {items.map((item) => (
        <li key={item.title} className={`card c-${pillar}`}>
          <div className="card-icon">
            <Icon name={item.icon} />
          </div>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <Link className="btn-link" href={item.href}>
            {item.cta}
            <Icon name="arrow" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Stats({ items, label }: { items: { value: string; label: string }[]; label: string }) {
  return (
    <dl className="stats" aria-label={label}>
      {items.map((s) => (
        <div key={s.label} className="stat">
          <dt className="lbl">{s.label}</dt>
          <dd className="num">
            <Fill value={s.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function CtaBand({ title, body, children }: { title: string; body: string; children: ReactNode }) {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="cta-band">
          <h2>{title}</h2>
          <p>{body}</p>
          <div className="ctas">{children}</div>
        </div>
      </div>
    </section>
  );
}

/** Do page: client logos only, no project details. */
export function LogoWall() {
  return (
    <ul className="logo-wall">
      {clients.map((c, i) =>
        isTodo(c.src) ? (
          <li key={i} className="logo-tile empty">
            Add a client logo in content/site.ts
          </li>
        ) : (
          <li key={c.src} className="logo-tile">
            <Image src={c.src} alt={c.name} width={190} height={80} />
          </li>
        ),
      )}
    </ul>
  );
}
