# Copilot / AI Agent Instructions for decision-lab-portfolio

Quick context
- This is a Next.js (app router) portfolio using `app/` (server components by default) and a small set of client components under `components/`.
- Next version: 16.1.1, React 19, TypeScript 5, Tailwind CSS v4.

Key places to look
- App routes/pages: `app/<route>/page.tsx` (e.g. `app/projects/page.tsx`).
- API routes: `app/api/*/route.ts` (examples: `app/api/upload/route.ts` — uses `multer` to store files under `public/uploads`).
- Shared helpers: `lib/utils.ts` (exports `cn()` wrapper used across components).
- UI primitives: `components/ui/*` (Button, Card use `class-variance-authority`, `@radix-ui/react-slot`, and `cn()` for class composition).
- App layout and globals: `app/layout.tsx` and `app/globals.css` (fonts loaded via `next/font`).

Project-specific conventions (do not invent alternatives)
- Import style: code uses absolute imports with the `@/` alias (e.g. `@/lib/utils`). Follow the same style.
- Component classification: files are server components by default. Add "use client" at the top for client components that use state/hooks (see `components/Navbar.tsx`, `components/ProjectCard.tsx`).
- UI primitives: prefer `components/ui/*` primitives (Button, Card, etc.). They export named helpers (e.g. `Button`, `buttonVariants`, `Card`, `CardHeader`, etc.).
- Styling: Tailwind classes + `cn()` wrapper via `lib/utils.ts`. When composing classes, use `cn(...)` to preserve merge behavior.
- Variant system: Buttons and other primitives use `class-variance-authority` (`cva`) and expose `VariantProps` — follow this pattern for new primitives.
- API route pattern: API handlers are Next.js Route Handlers exporting HTTP methods (e.g. `export const POST = async (req: NextRequest) => { ... }`). Use `NextRequest` / `NextResponse` conventions.

Build / dev / lint commands
- Development: `npm run dev` (runs `next dev`).
- Build: `npm run build` then `npm run start` to serve production.
- Lint: `npm run lint` (project `package.json` maps this to `eslint`).

Notable integrations & gotchas
- File uploads: `app/api/upload/route.ts` uses `multer` and writes to `public/uploads`. Ensure `public/uploads` exists (the route already creates it), and take care when changing storage — this is a filesystem-backed flow (not a cloud store).
- Fonts: `app/layout.tsx` uses `next/font` (Geist). Avoid refactoring fonts into client-only code.
- Generated `.next` output and Turbopack artifacts are present during dev; avoid editing `.next` or build cache files.

Examples (do this when adding something similar)
- New page: create `app/new-route/page.tsx` exporting a default React component.
- New API: add `app/api/thing/route.ts` and export `GET` / `POST` using `NextRequest` / `NextResponse`.
- New UI primitive: add `components/ui/mycomponent.tsx`, export named components and use `cn()` + `cva` to align with existing patterns.

When you make suggestions or produce code
- Use absolute imports with `@/` for project-local modules.
- Preserve server/client boundary: prefer server components unless UI interactivity requires `use client`.
- Keep Tailwind classes merged via `cn()`; use `buttonVariants` style pattern for variant props.

If unsure, look at these files first:
- [app/layout.tsx](app/layout.tsx)
- [app/api/upload/route.ts](app/api/upload/route.ts)
- [lib/utils.ts](lib/utils.ts)
- [components/ui/button.tsx](components/ui/button.tsx)
- [components/ProjectCard.tsx](components/ProjectCard.tsx)

If anything here is unclear or you need a different scope (tests, CI, or release automation), ask and I'll refine this file.
