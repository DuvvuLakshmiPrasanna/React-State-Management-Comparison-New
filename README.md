# React State Management Comparison

This repository contains three runnable React applications that implement the same shopping cart UI with different state management approaches:

- React Context API + useReducer
- Zustand
- Redux Toolkit

The goal is to compare render behavior, bundle impact, developer experience, and debugging ergonomics.

## Repository Layout

- `context-version/naive-context` - single Context provider baseline
- `context-version/optimized-context` - split Context providers
- `zustand-version` - single Zustand store with selectors
- `redux-version` - Redux Toolkit slices with React-Redux hooks
- `profiling/` - React DevTools Profiler screenshots
- `bundle-analysis/` - bundle visualizer screenshots
- `RESULTS.md` - benchmark summary and decision guide
- `Dockerfile` and `docker-compose.yml` - containerized production build for the Redux Toolkit app
- `.env.example` - documented environment variables

## Requirements

- Node.js 20+ recommended
- npm 10+
- Docker and Docker Compose if you want the containerized build

## Install and Run

Each implementation is self-contained and can be installed independently.

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

## Benchmark Flow

The applications expose render counters on the required components in development mode using `data-testid="render-count"`.

Recommended test flow:

1. Open the app in development mode.
2. Start React DevTools Profiler and enable "Record why each component rendered".
3. Click "Add to cart" on the first product 10 times.
4. Stop profiling and capture a screenshot.
5. Record the render counters for Header, ProductListPage, ProductCard, CartSidebar, and CartItem.

## Screenshots

Profiler:

- [Context optimized profile](profiling/context-optimized-profile.png)
- [Zustand profile](profiling/zustand-profile.png)
- [Redux Toolkit profile](profiling/redux-toolkit-profile.png)

Bundle analysis:

- [Zustand bundle treemap](bundle-analysis/zustand-bundle.png)
- [Redux Toolkit bundle treemap](bundle-analysis/redux-toolkit-bundle.png)

## Docker

Build and serve the Redux Toolkit version with Docker Compose:

```bash
docker compose up --build -d
```

The app will be available on the exposed port defined in `docker-compose.yml`.

### Docker troubleshooting

If `docker compose up --build` fails with a pipe/daemon error (for example on Windows: "failed to connect to the docker API at npipe:////./pipe/dockerDesktopLinuxEngine"), follow these steps:

1. Open Docker Desktop and wait until the status shows the engine is running ("Docker is running" / "Engine running").
2. If Docker Desktop does not start, restart the application or the host machine.
3. From an elevated PowerShell prompt run `docker version` or `docker info` to verify the CLI can connect to the daemon.
4. If using WSL2 backend on Windows, ensure WSL2 and the selected distro are running and Docker Desktop has WSL integration enabled.
5. After the daemon is running, re-run:

```powershell
docker-compose up --build
```

If you still see failures, run `docker ps` to inspect running containers and their STATUS; review Docker Desktop's logs for errors. For CI, ensure your runner provides a Docker daemon (self-hosted or service) or use an alternative container-build step.

## Findings Summary

- Naive Context is the easiest to start with, but it produces the widest rerender surface.
- Split Context reduces unrelated rerenders by separating cart, user, and UI state.
- Zustand keeps the code compact while offering selector-driven subscriptions.
- Redux Toolkit gives the most structured setup and the strongest debugging story for larger teams.

See `RESULTS.md` for the comparison table and decision guide.

## Submission Checklist

Before final submission, verify the following items are present and complete:

- `README.md` contains project overview, folder structure, setup steps, Docker instructions, and a brief findings summary.
- `RESULTS.md` contains the benchmark table and decision guide.
- `profiling/` contains profiler screenshots for each implementation (context-optimized, zustand, redux-toolkit).
- `bundle-analysis/` contains bundle treemaps for Zustand and Redux Toolkit.
- `.env.example` exists and documents required environment variables.
- The Docker build completes locally: `docker compose up --build -d` and the site is reachable at the exposed port.
- Quick manual UI checks: add-to-cart, theme switcher, and no console errors in production build.

If you want, I can run these checks and produce a short verification report.
