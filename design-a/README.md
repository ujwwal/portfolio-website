Design A - standalone page

This folder contains a standalone copy of the "Design A" page so it can be developed and served from the route `/design/a`.

Files:
- `DesignA.jsx` — page component (copied from `components/designs/DesignA.jsx` with import paths adjusted)
- `DesignSwitcher.jsx` — local copy of the variant switcher used by the page

Notes:
- The page still reuses shared UI components under `src/components/ui` and the shared `src/mock.js` data.
- The app's `src/App.js` has been updated to import this page at `/design/a`.
