import type { Metadata } from "next";
import Link from "next/link";
import { CardGrid, CtaBand, PageHero, SectionHead, Stats, type CardItem } from "@/components/blocks";
import { stats } from "@/content/site";

export const metadata: Metadata = {
  title: "Learn",
  description: "STEM consultancy, corporate workshops and mentor-led programs for students, schools and teams.",
};

const programs: CardItem[] = [
  {
    icon: "cap",
    title: "STEM consultancy for schools and parents",
    body: "Curriculum support and hands-on STEM sessions designed with schools and parents to get young learners building early.",
    href: "/#contact",
    cta: "Ask about STEM",
  },
  {
    // [REPLACE] Confirm wording: the export said "Cooperate training". Use "Co-op training" if co-operatives were meant.
    icon: "people",
    title: "Corporate training",
    body: "Workshops that help teams and co-operatives plan, communicate and deliver work more effectively.",
    href: "/#contact",
    cta: "Plan a workshop",
  },
  {
    icon: "mentor",
    title: "Mentor network",
    body: "Pairing learners with mentors from the tech and business community for ongoing, one-to-one guidance.",
    href: "/#contact",
    cta: "Find a mentor",
  },
  {
    icon: "terminal",
    title: "Hackathon bootcamps",
    body: "Short, intensive sprints where learners apply new skills to ship a working project in days, not months.",
    href: "/do",
    cta: "See what gets built",
  },
];

const steps = [
  { title: "Tell us your goals", body: "Who is learning, what they already know and what you want them to be able to do." },
  { title: "We design the sessions", body: "A program shaped around your learners, with a mentor assigned from our network." },
  { title: "Learners build", body: "Every session ends with something made: a circuit, a page, a working prototype." },
];

export default function LearnPage() {
  return (
    <div className="theme-learn">
      <PageHero
        pillar="learn"
        title="Real skills, built hands-on."
        lead="STEM consultancy, corporate workshops and mentor-led programs that get students, schools and teams building from day one."
        image="learnHero"
        actions={
          <>
            <Link className="btn btn-orange" href="/#contact">
              Bring this to your school
            </Link>
            <Link className="btn btn-outline" href="#programs">
              See programs
            </Link>
          </>
        }
      />

      <section className="section" aria-labelledby="programs">
        <div className="container">
          <SectionHead eyebrow="Programs" title="What we teach" id="programs">
            Every program pairs practical skills with a real mentor, so learning turns into something built.
          </SectionHead>
          <CardGrid pillar="learn" items={programs} />
        </div>
      </section>

      <section className="section-tight" aria-labelledby="how">
        <div className="container">
          <SectionHead eyebrow="How it works" title="How a program runs" id="how" />
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Stats items={stats.learn} label="Learn in numbers" />
        </div>
      </section>

      <CtaBand title="Bring Learn to your school or team" body="Tell us what you're working on and we'll design a session around it.">
        <Link className="btn btn-dark" href="/#contact">
          Get in touch
        </Link>
      </CtaBand>
    </div>
  );
}
