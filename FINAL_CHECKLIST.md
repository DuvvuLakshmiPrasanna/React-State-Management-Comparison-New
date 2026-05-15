Final Submission Checklist

Follow these steps before submission. Run from the repository root:

1. Verify environment

```powershell
node --version
npm --version
```

2. Install dependencies (use legacy peer flag to avoid ERESOLVE with React 19):

```powershell
cd context-version\naive-context
npm install --legacy-peer-deps

cd ..\optimized-context
npm install --legacy-peer-deps

cd ..\..\zustand-version
npm install --legacy-peer-deps

cd ..\redux-version
npm install --legacy-peer-deps
```

3. Production builds + tests (run for each app):

```powershell
# naive
cd context-version\naive-context
npm run build
npx vitest --run --reporter dot

# optimized
cd ..\optimized-context
npm run build
npx vitest --run --reporter dot

# zustand
cd ..\..\zustand-version
npm run build
npx vitest --run --reporter dot

# redux
cd ..\redux-version
npm run build
npx vitest --run --reporter dot
```

4. Verify profiling and bundle images exist:

```powershell
dir profiling
# expect context-optimized-profile.png, zustand-profile.png, redux-toolkit-profile.png

dir bundle-analysis
# expect zustand-bundle.png, redux-toolkit-bundle.png
```

5. Docker (run locally):

```powershell
# from repo root
docker-compose up --build
# visit http://localhost:80 (or configured port)
# check container health
docker ps
```

If Docker fails to connect, see README.md "Docker troubleshooting".

6. Final manual checks

- Open each app in the browser and verify UI interactions (Add to cart, quantity changes, remove)
- Open DevTools and confirm no console errors/warnings
- Confirm render counters change during interactions
- Take the profiler screenshots and ensure they are in `profiling/`

7. Verify GitHub Pages deployment

```powershell
# Check that the site is deployed at:
# https://duvvulakshmiprasanna.github.io/React-State-Management-Comparison-New/
# The Redux Toolkit app should load correctly with all functionality working
```

8. Commit and push

```powershell
git status
git add -A
git commit -m "Prepare final submission: build/tests verified, docs updated"
git push
```

Good luck — once Docker is confirmed on your machine and GitHub Pages is live, this repository is ready to submit.
