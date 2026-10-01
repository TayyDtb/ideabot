# IdeaBot

IdeaBot is an MVP landing page that demonstrates what the product would do:
you describe an idea, and it walks through a research animation before showing
a full sample report — market demand, competition, feasibility, pricing
benchmarks, and next steps.

This is a "show, don't tell" MVP in the Lean Startup sense: rather than running
a live (and costly) analysis on every visitor's input, it always displays the
same curated example report so people can see exactly what the real product
would deliver, without any backend or paid API calls.

## Stack

- Vite + React + TypeScript + Tailwind CSS v4

## Running locally

```bash
npm install
npm run dev
```

## Customizing the example report

Edit [src/data/demoReport.ts](src/data/demoReport.ts) to change the sample idea,
scores, market signals, pricing, and recommendations shown to visitors.

## Build

```bash
npm run build   # type-checks and builds to dist/
npm run preview # preview the production build locally
```


---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
