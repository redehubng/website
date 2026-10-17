import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Socials } from "./Socials";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <Link href="/" className={styles.brand}>
            <Image src="/images/brand/logo.png" alt="RedeHub, learn.do.impact" width={185} height={67} />
          </Link>
          <nav className={styles.links} aria-label="Footer">
            <Link href="/">Home</Link>
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Socials />
        </div>
        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} {site.name}. {site.tagline}
          </span>
        </div>
      </div>
    </footer>
  );
}
