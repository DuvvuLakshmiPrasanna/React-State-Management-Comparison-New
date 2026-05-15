# GitHub Pages Quick Setup (Step-by-Step)

## 1. Go to Repository Settings

Visit your repository:

```
https://github.com/DuvvuLakshmiPrasanna/React-State-Management-Comparison-New
```

Click the **Settings** tab at the top right.

## 2. Find Pages in Left Sidebar

In the left sidebar, scroll down until you see **Pages** (it's usually near the bottom, under "Security").

Click on **Pages**.

## 3. Change Source to GitHub Actions

You should see:

- **Build and deployment**
  - **Source** dropdown (currently set to "Deploy from a branch")

Click the dropdown and select: **GitHub Actions**

## 4. Save

Once you select "GitHub Actions", the page may auto-save or show a **Save** button. Click it if needed.

## 5. Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow named "Deploy Redux Toolkit app to GitHub Pages"
3. Wait for it to complete (green checkmark = success)
4. Once done, your site is live at:

```
https://duvvulakshmiprasanna.github.io/React-State-Management-Comparison-New/
```

## That's It!

Your repository is now configured to auto-deploy to GitHub Pages whenever you push to the `main` branch.

---

### Verify It Works

1. Make a small change to your code
2. Push to main
3. Check the Actions tab to see the workflow run
4. Visit your GitHub Pages URL to confirm the new changes are live

### If Pages Option Not Visible

You may not have admin access. Make sure you're logged in as the repository owner.
