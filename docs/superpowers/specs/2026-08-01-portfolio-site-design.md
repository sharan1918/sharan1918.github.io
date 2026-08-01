# Portfolio Site — Design Spec

Date: 2026-08-01

## Purpose

Personal portfolio site for Sharan Kumar U (AI Developer), hosted free on GitHub Pages under personal GitHub account `sharan1918`. Design must differ from the reference (rahulgawade.onrender.com) — went with a dark, code-editor-inspired aesthetic instead.

## Repo / Hosting

- Local path: `D:\portfolio`
- GitHub repo: `sharan1918.github.io` (user-page repo — auto-published at root domain, no Pages config needed)
- Branch: `main`
- Deploy: push to `main` → GitHub Pages serves `index.html` from repo root automatically
- URL: `https://sharan1918.github.io`

## Content source

Pulled from `sharan-kumar-resume.html` (Resume maker project): summary, skills, experience (Telic AI Developer + AI Developer Intern), 4 selected projects (Turisqua, David, Mystic Advisor, Optima), education, certifications, contact links.

## Stack

Plain HTML/CSS/JS. No framework, no build step — keeps GitHub Pages deploy trivial (static files served as-is).

```
D:\portfolio\
  index.html
  style.css
  script.js
  assets/
    resume.pdf        (copy of latest resume for download link)
    favicon.ico
```

## Sections (single page, anchor-navigated)

1. **Hero** — name, "AI Developer" title, short tagline, blinking-cursor effect (code-editor feel)
2. **About** — summary paragraph from resume
3. **Skills** — grid grouped by category (Languages, Backend, AI & LLM, Voice/Real-time, Cloud & DevOps, Frontend)
4. **Experience** — Telic Info Services: AI Developer (May 2025–Present) + AI Developer Intern (Dec 2024–Apr 2025), bullet highlights per role
5. **Projects** — 4 cards: Turisqua, David, Mystic Advisor, Optima — each with stack tags and description
6. **Education & Certifications** — VIT B.Tech CSE, AWS Cert, ML/Coursera, Computer Vision/NPTEL, Gen-AI Hackathon finalist
7. **Footer / Contact** — email, LinkedIn, GitHub profile link, resume PDF download button

## Visual design

- Dark background (`#0d1117`-family), near-black
- Monospace font (JetBrains Mono / Fira Code) for headings, nav, tags — body copy in a readable sans-serif
- Syntax-highlight-inspired accent palette (green/blue/purple) for links, tags, section markers
- Fake "editor tab bar" as the nav (tabs styled like open file tabs: `about.js`, `experience.js`, `projects.js`, etc.), clicking scrolls to section
- Subtle scroll-reveal animations on section entry; hover states on project cards
- Responsive: single-column stack on mobile, grid layouts on desktop

## Out of scope

- No backend/CMS — content hardcoded in HTML
- No blog section
- No custom domain (can be added later via GitHub Pages settings)
- No analytics

## Error handling / edge cases

- Missing/broken resume PDF link → button still renders, just 404s if file absent (mitigated: file committed alongside code)
- No JS-dependent critical content — page fully readable with JS disabled (animations are progressive enhancement only)

## Testing

- Manual: open `index.html` locally in browser, check all sections render, nav scroll works, responsive at mobile/tablet/desktop widths
- Post-deploy: verify `https://sharan1918.github.io` loads correctly after GitHub Pages publish
