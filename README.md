# Black and White Apps

A collection of app homepages with privacy policies, built with [Eleventy](https://www.11ty.dev/).

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run serve
```

The site will be available at `http://localhost:8080/`

## Building

To build the static site:

```bash
npm run build
```

The output will be in the `_site` directory.

## Project Structure

```
.
├── src/
│   ├── _includes/
│   │   └── layouts/
│   │       └── base.njk          # Base layout template
│   ├── css/
│   │   └── style.css              # Main stylesheet
│   ├── level-black-and-white/
│   │   ├── index.md               # App homepage
│   │   └── privacy.md             # Privacy policy
│   └── index.md                   # Main homepage
├── eleventy.config.js             # Eleventy configuration
└── package.json
```

## Adding New Apps

To add a new app:

1. Create a new directory under `src/` (e.g., `src/my-new-app/`)
2. Create an `index.md` file for the app homepage
3. Create a `privacy.md` file for the privacy policy
4. Update the main `src/index.md` to include a link to the new app

## Current Apps

- **level: black and white** - A minimalist app that collects no data at all

## Deployment to Cloudflare Pages

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Push your code to Git** (GitHub, GitLab, or Bitbucket)

2. **Go to Cloudflare Dashboard**:
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Create a project**
   - Click **Connect to Git**

3. **Select your repository** and authorize Cloudflare

4. **Configure build settings**:
   - **Framework preset**: None (or leave as auto-detect)
   - **Build command**: `npm run build`
   - **Build output directory**: `_site`
   - **Root directory**: `/` (leave as default)

5. **Click "Save and Deploy"**

Cloudflare will automatically build and deploy your site. Future commits to your main branch will trigger automatic deployments.

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler CLI**:
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Build and deploy**:
   ```bash
   npm run build
   wrangler pages deploy _site --project-name=black-and-white-apps
   ```

### Build Settings Summary

- **Build command**: `npm run build`
- **Build output directory**: `_site`
- **Node version**: 18 or newer (Cloudflare Pages uses Node 18 by default)

### Custom Domain

After deployment, you can add a custom domain:
1. Go to your project in Cloudflare Pages
2. Navigate to **Custom domains**
3. Click **Set up a custom domain**
4. Follow the instructions to configure DNS

### Security Headers

The `_headers` file in the output directory includes security headers that Cloudflare Pages will automatically apply to all responses.

