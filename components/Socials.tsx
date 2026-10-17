import { isTodo, site } from "@/content/site";
import { Icon } from "./icons";

export function Socials() {
  return (
    <ul className="social-row">
      {site.socials
        .filter((s) => !isTodo(s.href))
        .map((s) => (
          <li key={s.id}>
            <a className="social-btn" href={s.href} target="_blank" rel="noopener noreferrer">
              <Icon name={s.id} />
              <span className="visually-hidden">RedeHub on {s.label}</span>
            </a>
          </li>
        ))}
    </ul>
  );
}
