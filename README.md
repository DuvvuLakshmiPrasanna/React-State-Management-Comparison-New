# React State Management Comparison

This repository contains three runnable versions of the same shopping cart app, each built with a different state management approach:

- React Context API + useReducer
- Zustand
- Redux Toolkit

The goal is to compare render behavior, bundle impact, boilerplate, and debugging ergonomics under the same UI and interaction flow.

## What Is Included

- `context-version/naive-context` for the single-provider Context baseline.
- `context-version/optimized-context` for the split-provider Context optimization.
- `zustand-version` for the selector-based Zustand implementation.
- `redux-version` for the Redux Toolkit implementation.
- `profiling/` for React DevTools Profiler screenshots.
- `bundle-analysis/` for bundle visualizer screenshots.
- `RESULTS.md` for the benchmark table and decision guide.
- `Dockerfile` and `docker-compose.yml` for a production container build of the Redux Toolkit app.
- `.env.example` for documented environment variables.

## Prerequisites

- Node.js 20 or newer
- npm 10 or newer
- Docker and Docker Compose for the production container

## Deployment

### GitHub Pages

This repository is automatically deployed to GitHub Pages via GitHub Actions. The Redux Toolkit version is built and deployed whenever changes are pushed to the `main` branch.

**Live Site:** https://duvvulakshmiprasanna.github.io/React-State-Management-Comparison-New/

The deployment workflow:

1. Detects push to main branch
2. Installs dependencies with `npm ci --legacy-peer-deps`
3. Builds the Redux Toolkit app with `npm run build`
4. Uploads the `dist` folder to GitHub Pages
5. Deploys automatically

## Run Locally

Each implementation is self-contained and can be installed and run independently.

### Context API - Naive

```bash
cd context-version/naive-context
npm install
npm run dev
```

### Context API - Split Providers

```bash
cd context-version/optimized-context
npm install
npm run dev
```

### Zustand

```bash
cd zustand-version
npm install
npm run dev
```

### Redux Toolkit

```bash
cd redux-version
npm install
npm run dev
```

## Docker

The root Docker setup builds the Redux Toolkit app in a multi-stage image and serves the production assets with Nginx.

```bash
docker compose up --build -d
```

The app is exposed on port `8080` and the container includes a healthcheck that verifies the Nginx server is responding.

## GitHub Pages Deployment

This repository includes a GitHub Actions workflow that publishes the Redux Toolkit app to GitHub Pages.

How to use it:

1. Push the repository to GitHub.
2. In the repository settings, enable GitHub Pages and set the source to `GitHub Actions`.
3. Open the Actions tab and run the `Deploy Redux Toolkit app to GitHub Pages` workflow, or push to `main` and let the workflow deploy automatically.

The workflow builds `redux-version` with the correct GitHub Pages base path and publishes the generated `dist/` folder. The live site will be available at `https://<your-username>.github.io/react-state-management-comparison/`.

## Profiling Workflow

Use the same interaction pattern across all implementations when comparing render behavior:

1. Open the app in development mode.
2. Open React DevTools and enable the Profiler option to record why each component rendered.
3. Click Add to Cart on the first product 10 times.
4. Stop profiling and capture the flame graph screenshot.
5. Record the render counters from Header, ProductListPage, ProductCard, CartSidebar, and CartItem.

## Artifacts

Profiler screenshots:

- [Context optimized profile](profiling/context-optimized-profile.png)
- [Zustand profile](profiling/zustand-profile.png)
- [Redux Toolkit profile](profiling/redux-toolkit-profile.png)

Bundle analysis screenshots:

- [Zustand bundle treemap](bundle-analysis/zustand-bundle.png)
- [Redux Toolkit bundle treemap](bundle-analysis/redux-toolkit-bundle.png)

## Results

See [RESULTS.md](RESULTS.md) for the benchmark table and the decision guide.

## Submission Checklist

- All three implementations are present and runnable.
- Required render counters are visible in development builds.
- `profiling/` contains the three required profiler screenshots.
- `bundle-analysis/` contains the required bundle analysis screenshots.
- `RESULTS.md` contains the comparison table and decision guide.
- `.env.example` documents the required environment variables.
- `docker compose up --build -d` starts the production container successfully.

If you need to verify the repository quickly, start with the Docker command above and then open `http://localhost:8080`.
