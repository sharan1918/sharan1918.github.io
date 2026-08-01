# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a single-page, dark code-editor-themed portfolio site for Sharan Kumar U, hosted free on GitHub Pages under the personal account `sharan1918`.

**Architecture:** Static site, three files (`index.html`, `style.css`, `script.js`), no build step, no framework. Content is hardcoded from the existing resume. GitHub Pages serves the repo root directly on push to `main`.

**Tech Stack:** Plain HTML5, CSS3 (custom properties, grid/flexbox), vanilla JS (`IntersectionObserver` for scroll-reveal and active-nav-tab highlighting). Google Fonts (JetBrains Mono, Inter) via CDN link.

---

## Reference spec

`docs/superpowers/specs/2026-08-01-portfolio-site-design.md`

## File Structure

```
D:\portfolio\
  .gitignore
  index.html
  style.css
  script.js
  assets/
    resume.pdf
  docs/superpowers/specs/2026-08-01-portfolio-site-design.md   (already committed)
  docs/superpowers/plans/2026-08-01-portfolio-site.md           (this file)
```

---

### Task 1: Scaffold + `.gitignore`

**Files:**
- Create: `D:\portfolio\.gitignore`

- [ ] **Step 1: Write `.gitignore`**

```gitignore
.DS_Store
Thumbs.db
*.log
```

- [ ] **Step 2: Commit**

```bash
cd /d/portfolio
git add .gitignore
git commit -m "chore: add gitignore"
```

---

### Task 2: `index.html`

**Files:**
- Create: `D:\portfolio\index.html`

- [ ] **Step 1: Write the full file**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sharan Kumar U — AI Developer</title>
<meta name="description" content="Portfolio of Sharan Kumar U, AI Developer building production LLM systems, agentic backends and real-time voice pipelines.">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%230d1117'/%3E%3Ctext x='50' y='68' font-size='48' fill='%237ee787' font-family='monospace' text-anchor='middle'%3E%3C/%3E%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
<nav class="tabbar" id="tabbar">
  <div class="tabbar-inner">
    <button class="tab active" data-target="hero">home.js</button>
    <button class="tab" data-target="about">about.js</button>
    <button class="tab" data-target="skills">skills.js</button>
    <button class="tab" data-target="experience">experience.js</button>
    <button class="tab" data-target="projects">projects.js</button>
    <button class="tab" data-target="education">education.js</button>
    <button class="tab" data-target="contact">contact.js</button>
  </div>
</nav>

<main>
  <section id="hero" class="hero">
    <div class="hero-content">
      <p class="prompt-line"><span class="prompt">$</span> whoami</p>
      <h1 class="hero-name">SHARAN KUMAR U</h1>
      <p class="hero-title">&gt; AI Developer<span class="cursor">_</span></p>
      <p class="hero-tagline">Building production LLM systems, agentic backends &amp; real-time voice pipelines.</p>
      <div class="hero-links">
        <a href="assets/resume.pdf" class="btn btn-primary" download>Download Resume</a>
        <a href="#contact" class="btn btn-ghost">Get in touch</a>
      </div>
    </div>
  </section>

  <section id="about" class="section">
    <h2 class="section-title"><span class="line-no">01</span> about</h2>
    <p class="about-text">
      AI Backend engineer with 1.5+ years building production LLM systems, agentic tool-calling backends,
      multi-provider model orchestration and real-time voice pipelines on FastAPI and PostgreSQL, deployed on
      GCP. Six production systems shipped across travel, ed-tech and sales-intelligence.
    </p>
  </section>

  <section id="skills" class="section">
    <h2 class="section-title"><span class="line-no">02</span> skills</h2>
    <div class="skills-grid">
      <div class="skill-group">
        <h3>Languages</h3>
        <div class="tags"><span class="tag">Python</span><span class="tag">TypeScript</span><span class="tag">SQL</span><span class="tag">JavaScript</span></div>
      </div>
      <div class="skill-group">
        <h3>Backend</h3>
        <div class="tags"><span class="tag">FastAPI</span><span class="tag">async SQLAlchemy</span><span class="tag">Pydantic</span><span class="tag">PostgreSQL / PostGIS</span><span class="tag">Redis</span><span class="tag">Alembic</span><span class="tag">SSE &amp; WebSocket</span><span class="tag">pytest</span></div>
      </div>
      <div class="skill-group">
        <h3>AI &amp; LLM</h3>
        <div class="tags"><span class="tag">OpenAI</span><span class="tag">Anthropic Claude</span><span class="tag">Gemini</span><span class="tag">Grok</span><span class="tag">Function calling</span><span class="tag">Multi-agent pipelines</span><span class="tag">Prompt caching</span><span class="tag">RAG (ChromaDB)</span></div>
      </div>
      <div class="skill-group">
        <h3>Voice / Real-time</h3>
        <div class="tags"><span class="tag">LiveKit Agents</span><span class="tag">Deepgram STT</span><span class="tag">ElevenLabs TTS</span><span class="tag">OpenAI TTS/STT</span><span class="tag">Twilio WhatsApp</span><span class="tag">Telegram Bot API</span></div>
      </div>
      <div class="skill-group">
        <h3>Cloud &amp; DevOps</h3>
        <div class="tags"><span class="tag">GCP Cloud Run</span><span class="tag">Cloudflare</span><span class="tag">Docker &amp; Compose</span><span class="tag">GitHub Actions</span><span class="tag">Nginx</span><span class="tag">uv</span><span class="tag">Git</span></div>
      </div>
      <div class="skill-group">
        <h3>Frontend</h3>
        <div class="tags"><span class="tag">SvelteKit</span><span class="tag">Next.js</span><span class="tag">React</span><span class="tag">Tailwind CSS</span><span class="tag">Playwright</span></div>
      </div>
    </div>
  </section>

  <section id="experience" class="section">
    <h2 class="section-title"><span class="line-no">03</span> experience</h2>

    <div class="exp-item">
      <div class="exp-head">
        <span class="exp-role">AI Developer</span>
        <span class="exp-dates">May 2025 – Present</span>
      </div>
      <div class="exp-org">Telic Info Services Pvt Ltd · Chennai, IN</div>
      <ul class="exp-list">
        <li>Architected the <strong>AI concierge</strong> for a multi-country travel PWA built by a 5-engineer team — an 11-tool function-calling agent over FastAPI and PostgreSQL/PostGIS backing 226 REST endpoints, with SSE streaming surviving client disconnect and 2,100+ backend tests.</li>
        <li>Built an <strong>OpenAI → Gemini provider router</strong> with automatic failover and migrated both providers to the /v1/responses API, adding reasoning-effort controls and truncation detection.</li>
        <li>Cut LLM spend through <strong>cross-provider prompt caching</strong> (Anthropic cache_control, Gemini explicit caching, OpenAI cached-token discounting) with per-turn token accounting and quota billing persisted to PostgreSQL.</li>
        <li>Delivered <strong>real-time voice</strong> across web, Telegram and WhatsApp using LiveKit Agents with Deepgram STT and ElevenLabs TTS — live transcript streaming, speaker attribution and per-speaker audio lanes.</li>
        <li>Owned <strong>three security-audit remediations</strong> end to end (30+ findings): JWT algorithm enforcement, IDOR ownership checks, CSRF, user-level rate limiting, encrypted secret storage and log sanitisation.</li>
        <li>Deployed to <strong>GCP Cloud Run behind Cloudflare</strong> with Docker Compose, Alembic migrations and GitHub Actions CI; drove Redis write-through caching and N+1 query and index fixes across hot read paths.</li>
        <li>Shipped through <strong>peer code review</strong> across four repositories; reviewed teammates' PRs on shared feature branches.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-head">
        <span class="exp-role">AI Developer Intern</span>
        <span class="exp-dates">Dec 2024 – Apr 2025</span>
      </div>
      <div class="exp-org">Telic Info Services Pvt Ltd · Chennai, IN</div>
      <ul class="exp-list">
        <li>Built 5+ AI applications on the <strong>Phidata agentic framework</strong> — a video-to-SOP generator converting tutorial videos into structured Word/PDF procedures, a museum <strong>RAG chatbot</strong> with camera and audio input, and a PRD generator producing architecture and Mermaid diagrams.</li>
      </ul>
    </div>
  </section>

  <section id="projects" class="section">
    <h2 class="section-title"><span class="line-no">04</span> projects</h2>
    <div class="projects-grid">
      <article class="project-card">
        <h3 class="project-title">Turisqua <span class="project-sub">— AI Travel Concierge</span></h3>
        <div class="tags"><span class="tag">FastAPI</span><span class="tag">PostGIS</span><span class="tag">Redis</span><span class="tag">OpenAI/Gemini</span><span class="tag">LiveKit</span><span class="tag">SvelteKit</span></div>
        <p>Built the agent tool layer (place, venue, route and meetup search, price benchmarks, weather, itinerary sequencing), the personalised daily-brief generator, Redis write-through caching, Trust &amp; Safety, and offline road-mode with turn-by-turn navigation.</p>
      </article>
      <article class="project-card">
        <h3 class="project-title">David <span class="project-sub">— Live-Call Co-Pilot</span></h3>
        <div class="tags"><span class="tag">Python</span><span class="tag">LiveKit</span><span class="tag">Deepgram</span><span class="tag">Next.js</span><span class="tag">Electron</span></div>
        <p>Real-time coaching agent built on Vexa (Apache-2.0 self-hosted meeting-bot platform), a 3,300-commit codebase — one grounded note per speaker turn. Deterministic intent router, three kind-native agents, a boundary gate blocking pricing and closing advice, and a confidential/speakable brief split comparing digits to prevent numeric leaks. 341 tests; 8 feature PRs merged through peer review.</p>
      </article>
      <article class="project-card">
        <h3 class="project-title">Mystic Advisor <span class="project-sub">— Multi-LLM Conversational Backend</span></h3>
        <div class="tags"><span class="tag">FastAPI</span><span class="tag">asyncpg</span><span class="tag">Redis</span><span class="tag">OpenAI/Claude/Gemini</span></div>
        <p>Sole backend owner. Multi-agent pipeline (archetype detection, intent classification, session summarisation), a versioned prompt system, Redis-backed real-time session timers, SSE streaming and token-based billing with race-safe deduction. 526 tests.</p>
      </article>
      <article class="project-card">
        <h3 class="project-title">Optima <span class="project-sub">— SEO/AEO Audit Platform</span></h3>
        <div class="tags"><span class="tag">FastAPI</span><span class="tag">Playwright</span><span class="tag">PostgreSQL</span><span class="tag">SvelteKit</span></div>
        <p>Full-stack. Crawls up to 50 pages concurrently and runs 38 checks — 33 SEO plus 5 AEO tuned for ChatGPT, Google SGE and Perplexity — with SSRF protection and LLM-generated fixes. Built the SvelteKit dashboard: score gauge, issue heatmap, page-level remediation.</p>
      </article>
    </div>
  </section>

  <section id="education" class="section">
    <h2 class="section-title"><span class="line-no">05</span> education</h2>
    <div class="edu-item">
      <div class="exp-head">
        <span class="exp-role">B.Tech, Computer Science and Engineering</span>
        <span class="exp-dates">2021 – 2025</span>
      </div>
      <div class="exp-org">Vellore Institute of Technology, Chennai</div>
    </div>

    <h3 class="subheading">Achievements &amp; Certifications</h3>
    <ul class="exp-list">
      <li><strong>Finalist, Gen-AI Hackathon</strong> — top 8 of 98 teams; built a Gen-AI stock advisor on Google and Meta LLMs.</li>
      <li>AWS Certified Cloud Practitioner</li>
      <li>Machine Learning: Advanced Learning Algorithms (Coursera)</li>
      <li>Computer Vision (NPTEL)</li>
    </ul>
  </section>
</main>

<footer id="contact" class="footer">
  <h2 class="section-title"><span class="line-no">06</span> contact</h2>
  <div class="contact-links">
    <a href="mailto:sharankumar200319@gmail.com">sharankumar200319@gmail.com</a>
    <a href="https://www.linkedin.com/in/sharankumar19/" target="_blank" rel="noopener">linkedin.com/in/sharankumar19</a>
    <a href="https://github.com/sharan1918" target="_blank" rel="noopener">github.com/sharan1918</a>
  </div>
  <p class="footer-note">Chennai, India · Built with vanilla HTML/CSS/JS, deployed on GitHub Pages.</p>
</footer>

<script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify structural markers are present**

Run: `grep -c 'class="tab"' index.html && grep -c 'class="project-card"' index.html && grep -c 'class="exp-item"' index.html`
Expected: `6` tabs total (`class="tab active"` + 6x `class="tab"` — command counts the 6 plain ones), `4` project cards, `2` exp items.

- [ ] **Step 3: Commit**

```bash
cd /d/portfolio
git add index.html
git commit -m "feat: add portfolio HTML structure and content"
```

---

### Task 3: `style.css`

**Files:**
- Create: `D:\portfolio\style.css`

- [ ] **Step 1: Write the full file**

```css
:root {
  --bg: #0d1117;
  --bg-elevated: #161b22;
  --border: #30363d;
  --text: #c9d1d9;
  --text-dim: #8b949e;
  --accent-green: #7ee787;
  --accent-blue: #79c0ff;
  --accent-purple: #d2a8ff;
  --accent-orange: #ffa657;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --font-sans: 'Inter', -apple-system, sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  line-height: 1.6;
  padding-top: 48px;
}

a { color: var(--accent-blue); text-decoration: none; }
a:hover { text-decoration: underline; }

/* nav */
.tabbar {
  position: fixed; top: 0; left: 0; right: 0; height: 48px;
  background: var(--bg-elevated); border-bottom: 1px solid var(--border);
  z-index: 100; overflow-x: auto;
}
.tabbar-inner { display: flex; height: 100%; }
.tab {
  font-family: var(--font-mono); font-size: 13px; color: var(--text-dim);
  background: transparent; border: none; border-right: 1px solid var(--border);
  padding: 0 16px; cursor: pointer; white-space: nowrap;
}
.tab:hover { color: var(--text); background: rgba(255,255,255,0.03); }
.tab.active { color: var(--accent-green); border-bottom: 2px solid var(--accent-green); background: var(--bg); }

/* hero */
.hero { min-height: calc(100vh - 48px); display: flex; align-items: center; padding: 0 24px; }
.hero-content { max-width: 720px; margin: 0 auto; }
.prompt-line { font-family: var(--font-mono); color: var(--text-dim); font-size: 14px; }
.prompt { color: var(--accent-green); }
.hero-name { font-family: var(--font-mono); font-size: clamp(28px, 6vw, 52px); font-weight: 700; letter-spacing: 0.02em; margin: 8px 0; color: var(--text); }
.hero-title { font-family: var(--font-mono); font-size: clamp(16px, 3vw, 22px); color: var(--accent-blue); margin-bottom: 16px; }
.cursor { display: inline-block; background: var(--accent-blue); width: 10px; margin-left: 2px; animation: blink 1s steps(1) infinite; }
@keyframes blink { 50% { opacity: 0; } }
.hero-tagline { color: var(--text-dim); max-width: 560px; margin-bottom: 32px; }
.hero-links { display: flex; gap: 16px; flex-wrap: wrap; }
.btn { font-family: var(--font-mono); font-size: 14px; padding: 10px 20px; border-radius: 6px; border: 1px solid var(--border); }
.btn-primary { background: var(--accent-green); color: #0d1117; font-weight: 600; }
.btn-primary:hover { opacity: 0.85; text-decoration: none; }
.btn-ghost { color: var(--text); }
.btn-ghost:hover { border-color: var(--accent-blue); text-decoration: none; }

/* sections */
.section { max-width: 960px; margin: 0 auto; padding: 96px 24px; opacity: 0; transform: translateY(16px); transition: opacity 0.5s ease, transform 0.5s ease; }
.section.visible { opacity: 1; transform: translateY(0); }
.section-title { font-family: var(--font-mono); font-size: 22px; color: var(--text); margin-bottom: 32px; }
.line-no { color: var(--text-dim); margin-right: 8px; }
.subheading { font-family: var(--font-mono); font-size: 16px; color: var(--accent-purple); margin: 32px 0 16px; }

.about-text { max-width: 720px; color: var(--text); font-size: 16px; }

/* skills */
.skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
.skill-group h3 { font-family: var(--font-mono); font-size: 14px; color: var(--accent-orange); margin-bottom: 10px; }
.tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tag { font-family: var(--font-mono); font-size: 12px; background: var(--bg-elevated); border: 1px solid var(--border); color: var(--text-dim); padding: 4px 10px; border-radius: 4px; }

/* experience / education */
.exp-item, .edu-item { margin-bottom: 40px; }
.exp-head { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px; }
.exp-role { font-family: var(--font-mono); font-weight: 700; color: var(--text); font-size: 16px; }
.exp-dates { font-family: var(--font-mono); color: var(--text-dim); font-size: 13px; }
.exp-org { color: var(--accent-blue); margin: 4px 0 12px; font-size: 14px; }
.exp-list { list-style: none; }
.exp-list li { position: relative; padding-left: 20px; margin-bottom: 10px; color: var(--text); font-size: 15px; }
.exp-list li::before { content: "▸"; position: absolute; left: 0; color: var(--accent-green); }

/* projects */
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
.project-card { background: var(--bg-elevated); border: 1px solid var(--border); border-radius: 8px; padding: 24px; transition: border-color 0.2s ease, transform 0.2s ease; }
.project-card:hover { border-color: var(--accent-blue); transform: translateY(-4px); }
.project-title { font-family: var(--font-mono); font-size: 16px; color: var(--text); margin-bottom: 12px; }
.project-sub { color: var(--text-dim); font-weight: 400; font-size: 14px; }
.project-card .tags { margin-bottom: 12px; }
.project-card p { color: var(--text-dim); font-size: 14px; }

/* footer */
.footer { max-width: 960px; margin: 0 auto; padding: 96px 24px 64px; }
.contact-links { display: flex; flex-wrap: wrap; gap: 24px; font-family: var(--font-mono); font-size: 14px; margin-bottom: 16px; }
.footer-note { color: var(--text-dim); font-size: 13px; }

/* responsive */
@media (max-width: 640px) {
  .hero-links { flex-direction: column; }
  .exp-head { flex-direction: column; align-items: flex-start; }
  .section { padding: 64px 20px; }
}
```

- [ ] **Step 2: Verify variables and key classes are present**

Run: `grep -c '^\s*--' style.css && grep -c '\.project-card' style.css`
Expected: `9` custom properties defined, at least `3` occurrences of `.project-card`.

- [ ] **Step 3: Commit**

```bash
cd /d/portfolio
git add style.css
git commit -m "feat: add dark code-editor theme styles"
```

---

### Task 4: `script.js`

**Files:**
- Create: `D:\portfolio\script.js`

- [ ] **Step 1: Write the full file**

```javascript
const tabs = document.querySelectorAll('.tab');
const navTargets = document.querySelectorAll('#hero, #about, #skills, #experience, #projects, #education, #contact');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.getElementById(tab.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const tabObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tabs.forEach((t) => t.classList.remove('active'));
        const activeTab = document.querySelector(`.tab[data-target="${entry.target.id}"]`);
        if (activeTab) activeTab.classList.add('active');
      }
    });
  },
  { rootMargin: '-48px 0px -60% 0px', threshold: 0 }
);

navTargets.forEach((section) => tabObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.section').forEach((section) => revealObserver.observe(section));
```

- [ ] **Step 2: Verify observers are wired**

Run: `grep -c 'IntersectionObserver' script.js`
Expected: `2`

- [ ] **Step 3: Commit**

```bash
cd /d/portfolio
git add script.js
git commit -m "feat: add scroll-spy nav and scroll-reveal interactions"
```

---

### Task 5: Assets — resume PDF

**Files:**
- Create: `D:\portfolio\assets\resume.pdf` (copied from Resume maker project)

- [ ] **Step 1: Create assets folder and copy resume**

```bash
mkdir -p /d/portfolio/assets
cp "/c/Users/Sharan/Downloads/Resume maker/Sharan Kumar U - AI Developer.pdf" /d/portfolio/assets/resume.pdf
```

- [ ] **Step 2: Verify file copied**

Run: `ls -la /d/portfolio/assets/resume.pdf`
Expected: file listed, non-zero size.

- [ ] **Step 3: Commit**

```bash
cd /d/portfolio
git add assets/resume.pdf
git commit -m "chore: add downloadable resume PDF"
```

---

### Task 6: Manual browser verification

**Files:** none (verification only)

- [ ] **Step 1: Open the site locally**

```bash
start "" "/d/portfolio/index.html"
```

- [ ] **Step 2: Check against this list**

- [ ] Nav tab bar shows 7 tabs (home.js, about.js, skills.js, experience.js, projects.js, education.js, contact.js), horizontally scrollable
- [ ] Clicking each tab smooth-scrolls to its section and that tab highlights green
- [ ] Hero shows blinking cursor after "AI Developer"
- [ ] "Download Resume" button opens/downloads `assets/resume.pdf`
- [ ] Skills render as tag chips grouped under 6 category headings
- [ ] Experience shows both roles with bullet lists
- [ ] Projects show as 4 hoverable cards
- [ ] Education + certifications list renders
- [ ] Footer contact links (email, LinkedIn, GitHub) are clickable
- [ ] Resize browser to ~375px width — layout stacks to single column, no horizontal overflow
- [ ] Resize to ~768px and ~1440px — grids reflow correctly

- [ ] **Step 3: Fix any issues found, re-verify, then commit if changes were made**

```bash
cd /d/portfolio
git add -A
git commit -m "fix: address issues found in manual browser verification"
```
(Skip this step if no issues were found.)

---

### Task 7: Create GitHub repo (personal account) and deploy

**Files:** none (repo/deploy operations only)

- [ ] **Step 1: Confirm active gh account is the personal account**

Run: `gh auth status`
Expected: Active account is `sharan1918` (NOT a company/work account). If it shows a different account, stop and run `gh auth switch --hostname github.com --user sharan1918` first.

- [ ] **Step 2: Create the repo and push**

```bash
cd /d/portfolio
gh repo create sharan1918/sharan1918.github.io --public --source=. --remote=origin --push
```
Expected: repo created under `sharan1918`, `main` branch pushed, remote `origin` set.

- [ ] **Step 3: Confirm GitHub Pages is enabled**

```bash
gh api repos/sharan1918/sharan1918.github.io/pages 2>&1 || echo "not yet enabled"
```
If it reports "not yet enabled" or 404, enable manually: `gh api -X POST repos/sharan1918/sharan1918.github.io/pages -f "source[branch]=main" -f "source[path]=/"`

- [ ] **Step 4: Verify live site**

Wait ~1 minute for Pages build, then check:
```bash
curl -s -o /dev/null -w "%{http_code}" https://sharan1918.github.io
```
Expected: `200`. Open `https://sharan1918.github.io` in browser and re-run the Task 6 checklist against the live URL.

---

## Post-implementation

Update `docs/superpowers/specs/2026-08-01-portfolio-site-design.md` status if it tracks one (it doesn't — no action needed). Report the live URL back to the user.