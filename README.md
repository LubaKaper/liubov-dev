<p align="center">
  <a href="https://liubov-dev.vercel.app">
    <img src="assets/readme-hero.svg" alt="Luba Kaper — software engineer in New York" width="100%">
  </a>
</p>

<p align="center">
  <strong>Product-minded software engineering, from the first conversation to the deploy.</strong>
</p>

<p align="center">
  <a href="https://liubov-dev.vercel.app">View the portfolio</a>
  &nbsp;·&nbsp;
  <a href="https://liubov-dev.vercel.app/#work">Read the case studies</a>
  &nbsp;·&nbsp;
  <a href="https://liubov-dev.vercel.app/resume.html">Résumé</a>
</p>

---

## Hello

I’m **Luba Kaper**, a software engineer in New York. I spent two years at Twitter working on the core infrastructure behind Tweets on iOS. Today I build AI-assisted products end to end, especially for small teams with complicated, real-world workflows.

This portfolio is deliberately simple: semantic HTML, hand-written CSS, and a little vanilla JavaScript. There is no framework, package manager, or build step. The site is fast to understand, easy to maintain, and designed to let the work do the talking.

## Selected work

| Project | The problem | My contribution |
| --- | --- | --- |
| [**Licensing operations dashboard**](https://liubov-dev.vercel.app/work/licensing.html) | A four-person licensing office was coordinating applications, deadlines, documents, and ownership across spreadsheets, email, Dropbox, and memory. | Sole engineer—from discovery and data modeling through implementation, testing, deployment, and rollout. |
| [**Fourth**](https://liubov-dev.vercel.app/work/fourth.html) | Maternal-health software companies need a reliable way to find hospitals whose postpartum outcomes do not match their public commitments. | Built the research pipeline, explainable scoring, human-reviewed outreach, audit trail, and 196-test suite. |
| [**Relationship intelligence**](https://liubov-dev.vercel.app/work/alleycorp.html) | AlleyCorp needed to know who in its network could make a warm introduction—and why the relationship was considered warm. | Owned the database schema, enrichment pipeline, and authenticated MCP server on a three-person team. |
| [**Bar break-even calculator**](https://lubakaper.github.io/BarBreakdownColculator/) | A Brooklyn bar owner needed to see how pricing, costs, and weekly sales patterns change the break-even point. | Built a privacy-friendly browser tool where all numbers stay on the device. |

## How I build

The projects differ, but the engineering principles are consistent:

- **Start with the person doing the work.** The data model should match the words, decisions, and exceptions people use every day.
- **Keep consequential rules deterministic.** Stages, deadlines, scores, permissions, and record changes stay in ordinary, testable code.
- **Give AI narrow, reviewable jobs.** Models help with research, enrichment, search, and drafting; people stay in control of decisions and sends.
- **Make trust visible.** A useful answer should come with its source, signal, or reason—not just a confident-looking result.

## The site

```text
.
├── index.html             Home, selected work, about, and contact
├── work/                  Long-form project case studies
├── resume.html            Responsive, print-friendly résumé
├── files/                 Downloadable résumé PDF
├── assets/                README and social-sharing artwork
├── scripts/               Résumé PDF export helper
├── style.css              Shared visual system and responsive styles
├── main.js                Motion, navigation, and small interactions
├── favicon.svg            Site mark
└── vercel.json            Hosting and redirect configuration
```

### Design details

- Editorial layout inspired by constructivist posters
- `Unbounded` display type paired with `Onest`
- Responsive project cards, case-study navigation, and résumé layout
- Keyboard-visible focus states and reduced-motion support
- Print styles for a clean letter-sized résumé
- One tiny JavaScript file; no runtime dependencies

## Run it locally

No installation is required.

```bash
git clone https://github.com/LubaKaper/liubov-dev.git
cd liubov-dev
python3 -m http.server 8000
```

Then open [localhost:8000](http://localhost:8000).

### Update the résumé

`resume.html` is the source of truth for both the web and downloadable versions. After editing it, regenerate the PDF with:

```bash
bash scripts/export-resume.sh
```

## Deployment

The site is hosted on [Vercel](https://vercel.com). Because it is entirely static, deployment needs no build command or generated output directory.

## Contact

[Email](mailto:liubovkaper@pursuit.org) · [LinkedIn](https://www.linkedin.com/in/luba-kaper) · [GitHub](https://github.com/LubaKaper)
