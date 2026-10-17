## Website

RedeHub's site (learn.do.impact), built with Next.js (App Router) from the Claude Design redesign.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run todo     # list every placeholder still to fill
```

### Where things live

| What | Where |
|---|---|
| Contact details, socials, stats, clients, partners, donate link | `content/site.ts` |
| Every photo slot (path, alt text, search phrases) | `content/images.ts` |
| How to add photos and where to find them | `public/images/README.md` |
| Pages | `app/page.tsx`, `app/learn`, `app/do`, `app/impact` |
| Design tokens and shared styles | `app/globals.css` |

Placeholders are written as `[REPLACE: example]`. On the site they show the example text with a dashed outline until you replace them.
