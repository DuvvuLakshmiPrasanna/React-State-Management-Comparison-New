# Results and Benchmarks

This file summarizes the benchmark data collected across the four implementations.

## Comparison Table

| Metric                         | Context (naive)                                                                   | Context (split)                                                           | Zustand                                                 | Redux Toolkit                                           |
| ------------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| Render-count behavior          | Highest rerender fan-out because the entire app subscribes to one provider value. | Lower rerender fan-out because cart, user, and UI concerns are separated. | Low rerender fan-out with selector-based subscriptions. | Low rerender fan-out with selector-based subscriptions. |
| Bundle size                    | 62.94 kB gzip total JS bundle.                                                    | 63.10 kB gzip total JS bundle.                                            | 63.05 kB gzip total JS bundle.                          | 71.72 kB gzip total JS bundle.                          |
| State-management LOC           | 105                                                                               | 156                                                                       | 96                                                      | 101                                                     |
| Files dedicated to state logic | 1                                                                                 | 3                                                                         | 1                                                       | 4                                                       |
| DevTools and debugging         | Basic React debugging only.                                                       | Basic React debugging only.                                               | Good; Redux DevTools integration can be added easily.   | Best; Redux DevTools time travel is built in.           |
| Boilerplate complexity         | Lowest initial code, highest hidden performance cost.                             | Moderate. More files, better isolation.                                   | Lowest overall ceremony.                                | Highest structure, but strong conventions.              |

## Screenshots

Profiler screenshots:

- [Context optimized profile](profiling/context-optimized-profile.png)
- [Zustand profile](profiling/zustand-profile.png)
- [Redux Toolkit profile](profiling/redux-toolkit-profile.png)

Bundle screenshots:

- [Zustand bundle](bundle-analysis/zustand-bundle.png)
- [Redux Toolkit bundle](bundle-analysis/redux-toolkit-bundle.png)

### Decision Guide

Choose Context API when the application is small, the team wants zero dependencies, and the state shape is simple enough that rerender fan-out is not a major concern. Use the split-provider version when Context is already the standard in the codebase but you need to remove the worst unnecessary rerenders without introducing a new library.

Choose Zustand when you want a very small API surface, fast onboarding, and selector-based subscriptions with minimal boilerplate. It is a strong fit for product teams that need global state without the ceremony of Redux, especially when the application is medium-sized and performance matters.

Choose Redux Toolkit when the app is large, the team needs strong conventions, and debugging matters as much as raw ergonomics. RTK is the best fit for multi-developer codebases, complex async flows, and teams that value predictable patterns plus excellent DevTools support.

In practice, the trade-off is simple: Context is easiest to start with, Zustand is easiest to scale with less ceremony, and Redux Toolkit is best when governance, traceability, and tooling outweigh the extra setup.
