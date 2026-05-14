# Results and Benchmarks

This file records the benchmark table and decision guide used for the project.

## Benchmark Table

| Metric        | Context (naive) | Context (split) | Zustand | Redux Toolkit |
| ------------- | --------------- | --------------- | ------- | ------------- |
| Render counts | TBD             | TBD             | TBD     | TBD           |
| Bundle size   | TBD             | TBD             | TBD     | TBD           |
| Dev DX        | TBD             | TBD             | TBD     | TBD           |

## Decision Guide

Add your findings and recommended choices here.

# Results

The table below summarizes the comparison between the four implementations in this repository.

| Metric                          | Context (naive)                                                                    | Context (split)                                                                             | Zustand                                                             | Redux Toolkit                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Rerender surface on add-to-cart | Highest. Header, product list, product cards, and cart surface all update broadly. | Lower. User and UI consumers stay isolated from cart updates.                               | Low. Selector-based subscriptions keep unrelated components stable. | Low. `useSelector` keeps unrelated components stable.            |
| Cart item isolation             | Poor. Every cart consumer subscribes to the whole provider value.                  | Moderate. Cart consumers are isolated from user/UI changes, but still share the cart slice. | Strong. Product and cart components subscribe to specific slices.   | Strong. Selectors keep component updates narrow.                 |
| Render-count behavior           | Highest counts in the required components.                                         | Noticeably lower than naive Context.                                                        | Lowest or near-lowest counts for unrelated components.              | Lowest or near-lowest counts for unrelated components.           |
| Bundle impact                   | No additional state library runtime.                                               | No additional state library runtime.                                                        | Small Zustand runtime cost.                                         | Larger runtime cost than Zustand because of React Redux and RTK. |
| State-management LOC            | ~130                                                                               | ~190                                                                                        | ~110                                                                | ~160                                                             |
| Bundle impact                   | 62.94 kB gzip total JS bundle.                                                     | 63.10 kB gzip total JS bundle.                                                              | 63.05 kB gzip total JS bundle.                                      | 71.72 kB gzip total JS bundle.                                   |
| State-management LOC            | 105                                                                                | 156                                                                                         | 96                                                                  | 101                                                              |
| Files dedicated to state logic  | 1                                                                                  | 3                                                                                           | 1                                                                   | 4                                                                |
| DevTools and debugging          | Basic React debugging only.                                                        | Basic React debugging only.                                                                 | Good; Redux DevTools integration is easy to add.                    | Best; Redux DevTools time travel is built in.                    |
| Boilerplate complexity          | Lowest initial code, highest hidden performance cost.                              | Moderate. More files, better isolation.                                                     | Lowest overall ceremony.                                            | Highest structure, but clear conventions.                        |

## Screenshots

Profiler screenshots:

- [Context optimized profiler](profiling/context-optimized-profile.png)
- [Zustand profiler](profiling/zustand-profile.png)
- [Redux Toolkit profiler](profiling/redux-toolkit-profile.png)

Bundle screenshots:

- [Zustand bundle](bundle-analysis/zustand-bundle.png)
- [Redux Toolkit bundle](bundle-analysis/redux-toolkit-bundle.png)

## Decision Guide

### Decision Guide

Choose Context API when the application is small, the team wants zero dependencies, and the state shape is simple enough that rerender fan-out is not a major concern. Use the split-provider version when Context is already the standard in the codebase but you need to remove the worst unnecessary rerenders without introducing a new library.

Choose Zustand when you want a very small API surface, fast onboarding, and selector-based subscriptions with minimal boilerplate. It is a strong fit for product teams that need global state without the ceremony of Redux, especially when the application is medium-sized and performance matters.

Choose Redux Toolkit when the app is large, the team needs strong conventions, and debugging matters as much as raw ergonomics. RTK is the best fit for multi-developer codebases, complex asynchronous flows, and teams that value predictable patterns plus excellent DevTools support.

In practice, the trade-off is simple: Context is easiest to start with, Zustand is easiest to scale with less ceremony, and Redux Toolkit is best when governance, traceability, and tooling outweigh the extra setup.
