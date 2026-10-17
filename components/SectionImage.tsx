import Image from "next/image";
import { images, type ImageSlot, type ImageSlotId } from "@/content/images";
import styles from "./SectionImage.module.css";

type Props = {
  slot: ImageSlotId;
  /** Responsive sizes hint for next/image, e.g. "(max-width: 900px) 100vw, 50vw". */
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function SectionImage({ slot, sizes, priority, className }: Props) {
  const img: ImageSlot = images[slot];
  const classes = [styles.frame, styles[img.tone], className].filter(Boolean).join(" ");

  if (!img.src) {
    return (
      <div className={classes} style={{ aspectRatio: img.ratio }} role="img" aria-label="Photo coming soon">
        <div className={styles.placeholder} aria-hidden="true">
          <strong>{slot}</strong>
          <span>
            Search: {img.search.map((s) => `“${s}”`).join(" or ")}
          </span>
          <span>
            {img.ratio.replace(/\s/g, "")}, at least {img.minWidth}px wide
          </span>
        </div>
      </div>
    );
  }

  return (
    <figure className={classes} style={{ aspectRatio: img.ratio }}>
      <Image src={img.src} alt={img.alt} fill sizes={sizes} priority={priority} className={styles.img} />
      {img.credit && <figcaption className={styles.credit}>Photo: {img.credit}</figcaption>}
    </figure>
  );
}
