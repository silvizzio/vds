# Vizzio Design System

Documentation site scaffold for Vizzio components and foundations. Next.js App
Router, Tailwind, shadcn-style CSS variable theming, MDX content. Guidance IA
follows Carbon (grouped sidebar, anatomy, do/don't). Live example and props
experience follows Atlassian (rendered preview above collapsible source with
copy, plus a props table).

## Run

```
npm install
npm run dev
```

Open http://localhost:3000

## How it fits together

```
app/
  layout.tsx                top bar + persistent sidebar
  page.tsx                  home, component index grid
  components/page.tsx       components index
  components/[slug]/page.tsx  loads MDX, renders header + tab shell
  foundations/[slug]/page.tsx  loads MDX, single scrolling page
  globals.css               the token swap layer, edit brand values here

components/
  ui/                       the real components being documented (button, modal)
  docs/                     the docs system
    tabs.tsx                Overview/Usage/Code/Accessibility shell
    live-example.tsx        preview + collapsible source + copy
    props-table.tsx         props/type/default/description
    do-dont.tsx             paired red/green cards
    anatomy.tsx             numbered callouts
    demos.tsx               live example registry (node + code string)
    mdx-components.tsx      blocks exposed to MDX with no imports

config/navigation.ts        left rail information architecture
content/components/*.mdx     the swappable content layer
content/foundations/*.mdx
```

## The swap layer

Three places hold everything Vizzio-specific, and nothing else needs editing to
rebrand or refill:

1. `app/globals.css` for color, radius, and font tokens.
2. `components/docs/logo.tsx` for the wordmark. Paste the official Vizzio logo
   SVG in place of the placeholder.
3. `content/**/*.mdx` for all copy and guidance.

## Add a component

1. Build or copy the component into `components/ui/<name>.tsx`.
2. Register any live examples in `components/docs/demos.tsx` as
   `{ node, code }`, keyed by name.
3. Create `content/components/<name>.mdx`. Copy `button.mdx` as the template.
   Fill the four tab sections and reference demos with
   `<LiveExample name="..." />`.
4. Add the entry to the right group in `config/navigation.ts`.

`button.mdx` and `modal.mdx` are fully filled references. Everything else is a
stub with the structure in place.

## MDX blocks available with no imports

`Overview`, `Usage`, `Code`, `Accessibility` (tab wrappers), `LiveExample`,
`PropsTable`, `DoDont` with `Do` and `Dont`, `Anatomy`.

## Deploy to Vercel

Push to a Git remote and import the repo in Vercel. Framework preset is Next.js,
no extra configuration needed.
