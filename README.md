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

