## Alfabit Design System

Token‑driven React/Next.js design system built with Atomic Design. Components are documented with Storybook (MDX) and themed via CSS variables + Tailwind utilities. This repository serves as both a component library and a living documentation site.

### Highlights

- **Atomic Design**: Atoms, Molecules, and Organisms with dedicated MDX docs and examples.
- **Modern stack**: Next.js 14, React 18, TypeScript (strict), Tailwind CSS 3.
- **Storybook 9 (Vite)**: MDX docs, Controls, a11y checks, and Vitest integration.
- **Design tokens**: Centralized CSS variables for colors, spacing, typography, shadows, breakpoints; easy theming (e.g., `.theme-violet`).
- **Typed components**: Strongly‑typed props, native HTML attribute passthrough, variant APIs.
- **Accessibility**: a11y addon enabled and focus/contrast guidance in docs.
- **CI‑ready docs**: Static Storybook build and Chromatic integration available.

---

## Tech Stack

- Next.js 14, React 18, TypeScript 5
- Tailwind CSS 3
- Storybook 9 with `@storybook/nextjs-vite`
- Addons: Docs, A11y, Vitest, Chromatic
- Tooling: ESLint (`next/core-web-vitals`), path alias `@/*`

## Quick Start

Prerequisites: Node.js 18+ and npm/yarn/pnpm.

Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Run the documentation (Storybook):

```bash
npm run storybook
# http://localhost:6006
```

Run the Next.js playground app:

```bash
npm run dev
# http://localhost:3000
```

Builds:

```bash
# Production build of Next.js app
npm run build

# Static Storybook build (for hosting/CI)
npm run build-storybook
```

Lint:

```bash
npm run lint
```

## Usage

Import and compose components inside your app or in Storybook stories.

```tsx
import Button from "@/components/Button/Button";
import TextBlock from "@/components/TextBlock/TextBlock";

export default function Example() {
  return (
    <div className="p-6">
      <TextBlock
        title="Welcome"
        description="Build consistent UIs with tokens and components."
      />
      <Button variant="primary">Get started</Button>
    </div>
  );
}
```

Enable a theme variant via a wrapper class (example):

```tsx
export default function Themed() {
  return <div className="theme-violet p-6">{/* children */}</div>;
}
```

## Design Tokens & Theming

Tokens live in `styles/globals.css` and are exposed as CSS variables that Tailwind utilities consume. Example:

```css
:root {
  /* Colors */
  --primary: 45 91 255;
  --secondary: 98 132 253;
  /* Spacing */
  --spacing-md: 24px;
  /* Shadows */
  --shadow-sm: 0px 0px 10px rgba(132, 132, 132, 15%);
  /* Breakpoints */
  --screen-desktop: 1440px;
}

.theme-violet {
  --primary: 175 75 254;
  --secondary: 190 116 249;
}
```

Use `rgba(var(--primary), <alpha>)` with utility classes to keep styles consistent and themeable.

## Documentation

- Storybook organizes docs by **Atoms → Molecules → Organisms** with MDX pages and live stories.
- Props tables and controls are automatically generated from TypeScript.
- Accessibility guidance is embedded alongside examples.

Run locally with `npm run storybook` and open http://localhost:6006.

## Accessibility

- `@storybook/addon-a11y` is enabled to surface contrast, aria, and keyboard issues during development.
- Components aim for clear focus states and semantic HTML. Docs include usage notes (e.g., Button labels, disabled state expectations).

## Testing (ready)

- Vitest, `@storybook/addon-vitest`, and Playwright are configured as dev dependencies so tests can be added alongside stories.
- Recommended pattern: colocate `*.test.ts(x)` near components and surface results in Storybook via the Vitest addon.

## Project Structure

```
components/
  Atoms.mdx, Molecules.mdx, Organisms.mdx
  Button/
    Button.tsx, Button.stories.ts, Button.mdx
  Input/
    Input.tsx, Input.stories.ts, Input.mdx
  Link/
    Link.tsx, Link.stories.ts, Link.mdx
  TextBlock/
    TextBlock.tsx, TextBlock.stories.ts, TextBlock.mdx
.storybook/
  main.ts, preview.ts
pages/
styles/
tailwind.config.js
```

## CI / Deployment

- Build static docs with `npm run build-storybook` and host on any static host (e.g., Vercel, Netlify, GitHub Pages).
- Chromatic is available for visual review and regression testing.
