# Deployment Guide

## GitHub Pages Setup

This project is configured to automatically deploy the Redux Toolkit version to GitHub Pages.

### Prerequisites

- Repository must be public (or GitHub Pages must be enabled for private repos with GitHub Pro)
- Admin access to repository settings

### Setup Steps

1. **Navigate to Repository Settings**
   - Go to: `https://github.com/DuvvuLakshmiPrasanna/React-State-Management-Comparison-New`
   - Click the **Settings** tab

2. **Enable GitHub Pages**
   - In the left sidebar, scroll down to find **Pages**
   - Under "Build and deployment" section:
     - **Source**: Select `GitHub Actions` from the dropdown (not "Deploy from a branch")
     - Click **Save**

3. **Workflow Deployment**
   - The `.github/workflows/deploy-gh-pages.yml` workflow will automatically trigger on every push to `main`
   - The workflow:
     - Installs dependencies with `npm ci --legacy-peer-deps`
     - Builds the Redux Toolkit app with `npm run build`
     - Uploads the `dist` folder as a GitHub Pages artifact
     - Deploys to `https://<username>.github.io/<repo-name>/`

### Live Site

Once enabled, the site will be available at:

```
https://duvvulakshmiprasanna.github.io/React-State-Management-Comparison-New/
```

### Verify Deployment

1. Push code to `main` branch
2. Check the **Actions** tab to see the workflow run
3. Once successful, visit the live site URL above
4. Verify that the Redux Toolkit shopping cart app loads correctly

### Environment Variables

The build process sets `GITHUB_PAGES=true`, which tells Vite to use the correct base path (`/React-State-Management-Comparison-New/`).

This is configured in `redux-version/vite.config.js`:

```javascript
base: process.env.GITHUB_PAGES === 'true' ? '/react-state-management-comparison/' : '/',
```

### Troubleshooting

**Pages option not visible in Settings:**

- Ensure you have admin access to the repository
- The repository must be public or have GitHub Pages enabled in GitHub Pro settings

**Deployment fails:**

- Check the **Actions** tab for workflow logs
- Common issues:
  - Missing dependencies (run `npm ci --legacy-peer-deps`)
  - Build errors (run `npm run build` locally to debug)
  - Incorrect base path in `vite.config.js`

**Site shows 404:**

- Check that "Source" is set to "GitHub Actions" (not a branch)
- Wait a few minutes for GitHub to process the deployment
- Clear browser cache and refresh

## Local Preview

To preview the site locally with the same base path as GitHub Pages:

```bash
cd redux-version
npm install --legacy-peer-deps
GITHUB_PAGES=true npm run build
npm run preview
```

This will build with the correct base path and start a preview server.
