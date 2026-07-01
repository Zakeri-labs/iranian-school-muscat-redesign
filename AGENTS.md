# Repository Guidelines

## Project Structure & Module Organization

This is a React 19 + TanStack Start application built with Vite. Source code lives in `src/`. File-based routes are in `src/routes/`, with `src/routes/__root.tsx` as the app shell. Shared UI lives in `src/components/`, with primitives under `src/components/ui/` and site components under `src/components/site/`. Utilities and app metadata are in `src/lib/`, hooks in `src/hooks/`, imported media in `src/assets/`, and browser-served files in `public/`. `src/routeTree.gen.ts` is generated; do not edit it manually.

## Build, Test, and Development Commands

- `npm run dev`: start the local Vite development server.
- `npm run build`: create a production build.
- `npm run build:dev`: build with development mode settings.
- `npm run preview`: preview the built app locally.
- `npm run lint`: run ESLint across the repository.
- `npm run format`: format files with Prettier.

Use `npm install` to sync dependencies from `package-lock.json`. A `bun.lock` is present, but the documented scripts are npm-based.

## Coding Style & Naming Conventions

Write TypeScript and TSX using strict compiler settings. Prefer the `@/*` path alias for imports from `src/`. Components use PascalCase filenames and exports, for example `Header.tsx`; hooks use `use-` or `useX` naming, for example `use-mobile.tsx`. Keep route filenames aligned with `src/routes/README.md`. Styling is Tailwind CSS-based; use `cn`/`tailwind-merge` patterns from `src/lib/utils.ts`. Formatting is enforced by Prettier through ESLint.

## Testing Guidelines

No dedicated test framework or `npm test` script is currently configured. Before submitting changes, run `npm run lint` and `npm run build`. For UI changes, manually verify affected routes in `npm run dev`, including desktop and mobile widths. If tests are added later, place them near covered code with names like `Component.test.tsx`.

## Commit & Pull Request Guidelines

Recent history is informal, with messages such as `Changes` and one descriptive entry, `Built all routes & homepage`. Prefer short, imperative, descriptive commit subjects such as `Add admissions tuition route` or `Fix mobile header menu`. Pull requests should include a concise summary, affected routes/components, verification commands, and screenshots for visible UI changes. Link related issues when available and note any generated files.

## Agent-Specific Instructions

Do not create Next.js or Remix structures such as `src/pages/`, `app/layout.tsx`, or `src/routes/_app/index.tsx`. Preserve the TanStack Start setup in `vite.config.ts`, especially the Lovable config wrapper and custom `src/server.ts` entry. This project syncs with Lovable; avoid force-pushing or rewriting published history, and keep pushed branches buildable.
