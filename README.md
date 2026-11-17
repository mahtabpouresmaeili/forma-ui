# Forma UI — Design System Showcase

**A React component library case study and interactive consumer demo.** This project presents Forma UI's component API, design tokens, accessibility implementation, and developer setup in a responsive portfolio page.

> **Release status:** The [public npm listing](https://www.npmjs.com/package/@mahtab7/forma-ui) currently shows a temporary `0.0.0-stage` placeholder and says the operational release is awaiting review. This showcase uses a pinned local snapshot of `0.1.0` so its demo can build independently; customers should wait for the approved public release before installing the package from npm.

## What you'll find

- **Component showcase:** interactive `Button` variants, sizes, loading and disabled states, plus `TextField` label, hint, error, and disabled states.
- **Design token samples:** selected real color, spacing, typography, radius, and shadow tokens from the installed package stylesheet.
- **Developer guide:** package installation, imports, and React usage examples with copy controls.
- **Accessibility review:** code and browser accessibility-tree checks for keyboard behavior, focus styles, labels, and error associations. Screen reader testing is still pending.
- **Responsive case study:** project overview, architecture, technical implementation, distribution status, and interactive component preview.

The demo form is local only. It does not transmit or store the entered email address.

## Technology

React · TypeScript · Vite · Forma UI · CSS

## Run the showcase

Requires Node.js and npm. The Forma UI snapshot is included under `vendor/`; the remaining app dependencies install from npm as usual.

```sh
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

## Use Forma UI after release

Once the operational package is available on npm, install it in a React project:

```sh
npm install @mahtab7/forma-ui
```

Import the components and stylesheet:

```tsx
import { Button, TextField } from '@mahtab7/forma-ui';
import '@mahtab7/forma-ui/style.css';
```

```tsx
function Example() {
  return (
    <>
      <Button variant="primary" size="md">Submit</Button>
      <TextField id="email" label="Email" type="email" />
    </>
  );
}
```

## Project scope

This repository is the **consumer showcase**, not the source repository for the component library. Its preview uses the pinned package artifact in `vendor/` while the public npm release is under review. The demo can be deployed independently; installing the library from npm remains pending the operational release.

```text
src/
├── App.tsx       Case study content and interactive examples
├── App.css       Page layout, responsive styles, and typography
├── index.css     Global app styles
└── main.tsx      React entry point and package stylesheet import
```

## Checks

```sh
npm run build
npm run lint
```

Both checks pass in the current workspace. A full screen reader pass and formal WCAG audit have not been performed.
