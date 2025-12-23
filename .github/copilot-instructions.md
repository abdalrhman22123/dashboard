<!-- .github/copilot-instructions.md - guidance for AI coding agents working in this repo -->

# Repo Snapshot
- Project: React app bootstrapped with Create React App living in `dash/`.
- Main entry: `dash/src/index.js` mounts `dash/src/routingapp.jsx` (React Router).
- Key patterns: small, per-component CSS files (`*.css` beside `*.jsx`), functional React components, and an `assets/` folder for images/SVGs.

# What to know up-front
- Run and develop from the `dash/` directory: use `cd dash` then `npm start` / `npm run build` / `npm test` (scripts in `dash/package.json`).
- Routing: `dash/src/routingapp.jsx` uses `react-router-dom` v7 (`BrowserRouter`, `Routes`, `Route`). Match that v7 API when changing routes.
- Supabase integration: the client is initialized in `dash/src/pages/supabase.jsx` with a hard-coded URL/key. Any work that touches backend credentials should prefer environment variables (move keys into `.env.local` and use `process.env.REACT_APP_*`).
- Component conventions: components in `dash/src/component/` are simple functional components that import a sibling `*.css`. Follow this pattern for new UI components.

# Files & examples to reference
- Routing example: `dash/src/routingapp.jsx` — add/remove routes here; `index.js` renders this component.
- Supabase client: `dash/src/pages/supabase.jsx` — single exported `supabase` client used by pages/components.
- UI components: `dash/src/component/btn.jsx`, `dash/src/component/nav.jsx` — import SVGs from `dash/src/assets/` and CSS alongside JSX.
- Pages: `dash/src/pages/*.jsx` — self-contained page-level components (Home, login, contact, etc.).

# Coding guidance (project-specific)
- Keep styles colocated: place component CSS next to the JSX and import it (existing pattern). Don't centralize styles unless creating a clear shared pattern.
- Use functional components and default exports (the repo uses `const Comp = () => {}` + `export default Comp`). Mirror existing export/import style to reduce churn.
- When modifying routes, update `routingapp.jsx` only — `index.js` expects a single routing component.
- When using assets, import them from `../assets/*` as shown in `nav.jsx` and `Home.jsx` (CRA handles asset bundling).

# Build / test / debug quick commands
- Start dev server: `cd dash; npm start` (opens at http://localhost:3000).
- Build for production: `cd dash; npm run build` (outputs to `dash/build`).
- Run tests: `cd dash; npm test` (CRA interactive test runner).
- Linting: this repo uses the default CRA ESLint config (see `dash/package.json` -> `eslintConfig`). Run the editor's ESLint or `npm run build` to surface lint errors.

# Security & maintenance notes (discoverable issues)
- Secrets: `dash/src/pages/supabase.jsx` contains a public-looking key and URL. Treat these as sensitive; prefer migrating to `.env.local` and `process.env.REACT_APP_SUPABASE_URL` / `REACT_APP_SUPABASE_KEY`.
- Dependency versions: `react` 19 and `react-router-dom` 7 are used. When upgrading `react-router-dom`, audit all route code for API changes.

# When you modify code
- Small UI changes: add JSX + `component/*.css`, import into corresponding page, and update routes if necessary.
- Adding backend calls: import `supabase` from `dash/src/pages/supabase.jsx`. If you change initialization (env vars), update all imports accordingly.
- Adding tests: follow CRA test conventions; place unit tests alongside components (e.g., `Btn.test.js`) and use `npm test`.

# Helpful hints for automated edits
- Prefer non-breaking, minimal diffs: match existing component/export style and file locations.
- Use explicit relative imports (e.g., `../component/btn`) as the project uses relative paths.
- Preserve asset filenames and relative paths when changing markup — SVG/image imports are referenced directly in JSX.

# Questions to ask the maintainer (if unclear)
- Should sensitive keys in `dash/src/pages/supabase.jsx` be rotated and moved to `.env.local`? (recommended)
- Is there a desired global CSS or design system, or should new components follow the current per-component CSS pattern?

Please review — I can iterate this file to include any additional workflows or CI/CD steps you use locally. 
