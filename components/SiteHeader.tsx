"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";
import { Icon } from "./icons";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <Link className={styles.brand} href="/" onClick={close}>
          <Image src="/images/brand/logo.png" alt="RedeHub, learn.do.impact" width={185} height={67} priority />
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.right}>
          <Link className={`btn btn-orange btn-sm ${styles.cta}`} href="/#contact">
            Start a project
          </Link>
          <button
            ref={buttonRef}
            className={styles.menuBtn}
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
            <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <nav id={menuId} className={styles.mobile} data-open={open} aria-label="Mobile" hidden={!open}>
        {site.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={close}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        <Link className="btn btn-orange" href="/#contact" onClick={close}>
          Start a project
        </Link>
      </nav>
    </header>
  );
}
