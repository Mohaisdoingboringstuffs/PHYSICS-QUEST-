# PhysicsQuest — Olympiad Physics Practice App

A Khan Academy-style interactive quiz app with **463 real questions** from BdPhO Regional
(2018–2026), BdPhO National and USAPhO, filtered to the **Category C syllabus (Classes 9–10)**
and ordered easy → hard inside 13 topics.

- 13 topics, each with a full mini-lesson (formulas + derivations + common traps)
- 350 MCQ + 113 numeric questions (numeric answers checked with tolerance, default ±2%)
- Wrong answers show a complete step-by-step solution
- XP, streaks, levels and per-question mastery saved in the browser (localStorage)

## Run locally

```bash
npm install        # or: bun install
npm run dev        # http://localhost:3000
```

## Deploy to Netlify (recommended)

This project builds to a **fully static site** (`next.config.ts` uses `output: "export"`),
so it hosts perfectly on Netlify's free plan — no server functions needed.

### 1. Push to GitHub

```bash
cd physicsquest
git init
git add .
git commit -m "PhysicsQuest initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

`.gitignore` already excludes `node_modules/`, `.next/` and `out/` — push only the source.

### 2. Connect Netlify

1. Go to https://app.netlify.com → **Add new site → Import an existing project**
2. Choose **GitHub** and pick your repo
3. Netlify reads `netlify.toml` and pre-fills everything:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Click **Deploy site**

Every future `git push` to `main` triggers an automatic redeploy.

> **Even faster, no GitHub:** run `npm run build` locally, then drag the generated
> `out/` folder onto https://app.netlify.com/drop — done.

## Deploy anywhere else

- **Vercel**: import the repo at https://vercel.com/new — auto-detected, zero config.
- **GitHub Pages / Cloudflare Pages / S3 / any web server**: upload the contents of
  `out/` after `npm run build`. (For GitHub Pages you must also set `basePath` in
  `next.config.ts` to your repo name.)
- **Local preview of the production build**: `npm run build && npm run preview`.

## Project layout

```
src/app/page.tsx            the whole app (home, lessons, practice, results)
src/data/questions.json     463-question bank (topic, answer, solution, difficulty…)
src/data/lessons-1..4.ts    13 topic mini-lessons
src/components/math-text.tsx  LaTeX math rendering
netlify.toml                Netlify build settings (auto-detected)
```
