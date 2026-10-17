# Images

Every photo on the site is a **slot** in `content/images.ts`. An empty slot (`src: null`) shows a dashed placeholder on the page. The placeholder shows the slot name, the search phrases to use and the size needed.

## Filling a slot

1. Pick a photo (see "Where to find photos" below) and save it in the matching folder, e.g. `public/images/learn/hero.jpg`.
2. In `content/images.ts`:
   - Set `src: "/images/learn/hero.jpg"`.
   - Write an `alt` that says what's in the photo, e.g. "Students wiring a robot kit at a RedeHub workshop".
   - Fill `credit` if the licence requires it (CC-BY does; Unsplash, Pexels and Nappy don't, but it's polite).
3. That's it. Next.js resizes the photo and serves AVIF/WebP automatically.

## Rules

- **Format:** JPG or WebP. Don't use PNG for photos.
- **Size:** at least the `minWidth` listed for the slot (1600px for large slots). Keep files under about 1 MB before upload. Next.js handles the rest.
- **Crop:** match the slot's `ratio` (4:3, or 3:4 for the tall home collage photo). Off-ratio photos get centre-cropped.
- **Subject:** real people doing the thing the section describes (learning, building, giving), facing the camera or the work. No generic handshake or laptop-on-desk shots.
- **Logos** (`clients/`): SVG if possible, otherwise transparent PNG at 2× display size (380×160). They're shown in grayscale on the home page.
- **Social preview:** add `app/opengraph-image.jpg` (1200×630).

## Slots and what to search for

| Slot | Folder / file | Ratio | Search phrases |
|---|---|---|---|
| `homeHeroA` | home/hero-a.jpg | 3:4 | African students coding laptop classroom · Nigerian teenagers technology class |
| `homeHeroB` | home/hero-b.jpg | 4:3 | African software developers team office · Lagos tech hub coworking |
| `homeHeroC` | home/hero-c.jpg | 4:3 | African youth community volunteers · Nigeria community outreach children |
| `homeLearn` | home/learn.jpg | 4:3 | kids robotics STEM workshop Africa · mentor teaching student laptop Black |
| `homeDo` | home/do.jpg | 4:3 | African developer writing code · team whiteboard product design sprint |
| `homeImpact` | home/impact.jpg | 4:3 | volunteers donating school supplies Africa · community event Nigeria smiling |
| `learnHero` | learn/hero.jpg | 4:3 | Nigerian students robotics workshop · African girls in STEM |
| `doHero` | do/hero.jpg | 4:3 | hackathon team Africa laptops · Black software engineers collaborating |
| `impactHero` | impact/hero.jpg | 4:3 | African children classroom donation · community outreach Nigeria youth |

## Where to find photos

**Best:** RedeHub's own photos from workshops, hackathons and outreach days. They beat stock every time, so use stock only to fill gaps. Bring a phone or camera to the next event and shoot landscape, in good light, close to the action.

**Free for commercial use:**

- **Nappy** (https://nappy.co): free photos of Black and African people. This is the closest fit.
- **Pexels** (https://www.pexels.com): search "Nigeria", "Lagos" or "African students". Many Nigerian photographers post here.
- **Unsplash** (https://unsplash.com): combine "Africa" or "Nigeria" with "technology", "classroom" or "hackathon".
- **Pixabay** (https://pixabay.com): a fallback.
- **WOCinTech Chat** (https://www.flickr.com/photos/wocintechchat/): tech-workplace photos. Licensed CC-BY, so **credit is required**.

**Paid** (more choice, consistent quality): Shutterstock or iStock, searching "Nigeria education technology" or "African students STEM".

Check each photo's licence page before use, and never use photos of identifiable children without the rights to do so. For your own event photos, get consent from parents or guardians.
