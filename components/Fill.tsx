import { display, isTodo } from "@/content/site";

/** Renders a content value; "[REPLACE: …]" values get a dashed outline so they're easy to spot. */
export function Fill({ value }: { value: string }) {
  if (!isTodo(value)) return <>{value}</>;
  return (
    <span className="todo" title="Placeholder: replace in content/site.ts">
      {display(value)}
    </span>
  );
}
