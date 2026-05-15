# Repository Guidelines

## Project Structure & Module Organization

This is a Vite + React personal bio site styled with Tailwind and custom CSS.

- `src/main.jsx` mounts the React app.
- `src/App.jsx` composes the page sections.
- `src/sections/` contains page-level sections: `Hero`, `Experience`, `Projects`, `Stack`, and `Contact`.
- `src/components/` contains shared UI such as `Topbar` and `SectionHead`.
- `src/data/profile.js` holds profile, navigation, experience, project, stack, and contact data.
- `src/hooks/` contains browser behavior hooks, currently reveal and active-nav observers.
- `src/styles.css` holds design tokens, responsive rules, animations, pseudo-elements, and component CSS.
- `public/` contains static public assets such as `favicon.svg`.
- `design/` contains the original design handoff and should be treated as reference material.

## Build, Test, and Development Commands

- `npm install` installs dependencies from `package-lock.json`.
- `npm run dev` starts the local Vite dev server at `127.0.0.1`.
- `npm run build` creates the production build and should pass before handoff.
- `npm run preview` serves the production build locally for final checks.

There is no configured `npm test` script yet.

## Coding Style & Naming Conventions

Use React function components and ES modules. Keep section components in `src/sections/` and shared components in `src/components/`. Name components in PascalCase, hooks with `use` prefixes, and data exports in camelCase.

Prefer data-driven rendering for repeated content; update `src/data/profile.js` instead of hardcoding repeated cards or rows. Keep visual class names stable unless deliberately refactoring CSS. Use 2-space indentation and concise JSX.

Tailwind is available, but this project intentionally keeps design-specific styling in `src/styles.css` for tokens, pseudo-elements, media queries, and ARIA/state selectors.

## Testing Guidelines

No automated test framework is currently configured. For changes, run `npm run build` and manually verify key responsive viewports in the browser: mobile around `390x844` and desktop around `1440x900`.

For UI changes, check:
- no horizontal overflow
- hero, navigation, and all five sections render
- experience tabs work by click and keyboard
- external contact links remain correct

## Agent-Specific Instructions

Preserve the exported design language unless the user requests a visual change. Make small, sequential changes and verify in browser for layout work. Do not remove or overwrite design handoff files.
