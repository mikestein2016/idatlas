# ID Atlas Site Rebuild — Inventory and Migration Plan

Working document for the Framer-to-Astro+React migration. Tracks page-by-page content extraction status, target URLs, and notable findings.

## Project parameters
- **Source domains:** idatlas.org (preserved), mikesteindesign.org (consolidated into idatlas.org with 301 redirects)
- **Target stack:** Astro + React + MDX, deployed on Cloudflare Pages, GitHub for source
- **URL strategy:** Preserve all idatlas.org URLs exactly. MSD URLs map to corresponding idatlas.org pages via 301 redirects.
- **Forms:** Cloudflare Workers
- **Interactives:** iframe-embedded from existing GitHub-hosted apps (URLs pending from Mike)

## idatlas.org pages (URL preserved)

| URL | Crawled | Notes |
|-----|---------|-------|
| / | Yes (deep) | Hero "Mapping Objectives to Measurable Results"; 4 services; 3 "Why ID Atlas" pillars; 3-phase process (to be replaced by 5D Spiral); social links: LinkedIn, YouTube, Reddit, Discord. Client logos confirmed by Mike but not captured by WebFetch. |
| /higher-ed | Yes | Course conversion/redesign, faculty development, accessibility & compliance. Four-phase methodology. |
| /blog | Yes (listing) | Index page for Field Notes |
| /blog/articulate-vs-parta | Yes | June 2025; Articulate vs Parta comparison |
| /blog/the-monopoly-tax | Yes | Nov 2025; originally published in Dirtyword Magazine Issue 11 (magazine discontinued, idatlas.org now hosts the full article as canonical archive); Mike credited as "Director of Design at ID Atlas"; 10-tool benchmark. Priority-verbatim for migration. |
| /blog/freelance-guide-to-apple-for-id | Yes | Aug 2025; M4 Pro MacBook, Parallels Desktop, Espanso/Flameshot/Karabiner |
| /blog/accessible-drag-and-drop | Yes | June 2025; Art Del Rosario credited for development; downloadable template |
| /blog/hotel-management-simulator | Yes | June 2025; The Last Resort, Texas State University; Construct 3 + Midjourney + Photoshop + Eleven Labs |
| /blog/elearning-pain-points | Yes | Research initiative landing page for benchmark project |
| /blog/analysis | Pending | Category page (likely auto-generated filter) |
| /blog/projects | Pending | Category page |
| /blog/case-studies | Pending | Category page |
| /explore | Yes | Career hub landing |
| /explore/job-roles | Yes | 14 ID job roles + 4 advanced career paths with salary ranges $50K-$150K+; opens with "two people with the same title may do very different activities on the job"; free 15-min consultation CTA. **Accessibility flag: Framer slider implementation may block text selection / copy-paste (Mike noted a user asked about this). Rebuild should use semantic HTML with native scrolling or pagination so role descriptions can be selected and copied.** |
| /explore/sectors | Yes | 20-question quiz, 5 sectors (Corporate, Education, Freelance, Government, Non-Profit); free 15-min consultation CTA |
| /explore/skills | Yes | 30-question survey, Good/Possible/Poor Fit ratings, 18 sub-sectors enumerated (Government Contracting, Military & Defense, Cultural Institutions, VR/AR, Language & ESL, Freelance Facilitator, etc.); free 15-min consultation CTA |
| /resources | Yes | Curated directory of free third-party assets + career coaching free consultation hook |
| /resources/portfolio | Yes | "How to Build a Stellar Portfolio" guide. NOT a portfolio. URL semantics conflict to resolve. |
| /id-case-files | Yes (landing) | Series landing page; framing copy captured |
| /id-case-files/0-the-final-interview | Yes | **KEY: contains the canonical articulation of 5D Spiral (Define/Design/Develop/Drive/Determine) along with the three foundational pillars (Human-Centered Design, Andragogy, Learning Theories) and a hybrid Waterfall+Agile PM model framed under SAM rather than ADDIE.** Final-round interview scenario at fictional "ID Inc" with Skye Calloway. |
| /id-case-files/1-the-discovery-call | Yes | ~2,000-2,500 words; Consultant's Mindset + Human-Centered Design + Hybrid Strategy framework; David Chen scenario |
| /id-case-files/2-the-leaky-pipeline | Yes | Northwood University 40% DFW in CHEM 101; Inside-Out vs Outside-In; introduces Four-Layer Needs Assessment (Task/Organizational/Learner/Environmental) |
| /id-case-files/3-dumbing-it-down | Yes | Director vs lawyer-SME competing visions; Power-Interest Grid framework; 92% community favored compromise |
| /id-case-files/4-sink-or-swim | Yes | ICU nurses, surface training need masks cultural problem; performance-focused (digital mentor) vs culture-focused; 70% favored performance approach |
| /id-case-files/5-the-discreet-discovery | Yes | Hotel HR manager Paulo Ramos; "Respectful Workplace" request masks deeper issues; individual interviews vs focus groups; triangulation framework |
| /id-case-files/6-the-professors-legacy | Yes | Axiom University Dr. Thorne; 50/50 blend (coaching) vs 90/10 blend (format redesign); 90/10 wins by appealing to legacy and fatigue, not competence |
| /id-case-files/7-the-pro-bono-problem | Yes | Legal Equity Advocates for Families (LEAF) onboarding; tiered proposal (87% favored) vs full ecosystem; Kirkpatrick L4 + Kaufman L5 (Return on Expectations) |
| /id-case-files/8-the-cost-of-clarity | Yes | Innovatech "Nexus" sales enablement; accelerated timeline + cut contingency; microlearning pivot vs cost-of-speed pushback; 4-step risk model; 73% favored scope adaptation |
| /id-case-files/9-the-premium-paradox | Yes | AccrediMed ($169) vs UniHealth ($49)/learner/year; end-user vs economic-buyer persona misalignment; compete-for-compliance vs build-premium-market |
| /id-case-files/10-the-silver-bullet | Yes | Grace Community Church $50K legacy donation; 18% return rate; digital first (lucrative) vs community first (modest); 94% favored community first as ethical consulting practice |

## mikesteindesign.org pages (consolidating to idatlas.org with 301 redirect)

| MSD URL | Target idatlas.org URL | Crawled | Notes |
|---------|----------------------|---------|-------|
| / | / or /portfolio | Yes | Single-page site; needs decomposition into portfolio, services-with-pricing, and coaching pages on new site |

## Portfolio pieces from MSD (need a new home on idatlas.org)

### Course design (6)
1. Safety Steve at the Solar Farm
2. Chasing the Boss (soft skills for finance students)
3. Cardiac ReCycle (anatomy, gamification)
4. Guardians of Immunity (pre-class immunity intro)
5. Managing Difficult Behavior (student behavior)
6. New Faculty Crash Course (six-part)

### Playable games (6)
1. Food Fall (English pronunciation, microphone)
2. Search for Life (exoplanet spectroscopy)
3. DTM (Demographic Transition Model)
4. Bank On It (knowledge testing, monetary rewards)
5. Hoop Shooter (basketball-themed quiz)
6. Chicken Crossing (Frogger-style)

### Plus from idatlas.org case study
7. The Last Resort (Texas State hospitality simulator)

## Service offerings to migrate from MSD

| Offering | Current MSD price | Proposed target on idatlas.org |
|----------|------------------|------------------------------|
| Custom Training | $70/hour | /services or /course-design |
| Custom Learning Game | $70/hour | /services or /serious-games |
| Quiz Game template | $50 | productized offerings page |
| Resume + Portfolio Evaluation | $120 | /coaching |
| 1-on-1 Coaching + Software Training | $70/hour with free 30-min consult | /coaching |

## GitHub-hosted interactives (iframe-embedded)

All hosted on GitHub Pages under @mikestein2016 unless noted. Public, reachable, no migration required. New site embeds via the same iframe pattern.

### Quiz tools
- ID Sector Exploration Quiz: `github.com/mikestein2016/ID-Sector-Exploration-Quiz` (Pages: `mikestein2016.github.io/ID-Sector-Exploration-Quiz/`)
- ID Skills Survey: `github.com/mikestein2016/ID-Skills-Survey` (Pages: `mikestein2016.github.io/ID-Skills-Survey/`)

### Games (portfolio pieces from MSD)
- Bank On It: `github.com/mikestein2016/BankOnIt_Geography`
- Cardiac ReCycle: `github.com/mikestein2016/Cardia-reCycle`
- Chasing the Boss: `github.com/mikestein2016/ChasingtheBossDemo`
- Chicken Crossing: `github.com/mikestein2016/ChickenXing`
- Food Fall: `github.com/mikestein2016/FoodFallEnglish`
- Guardians of Immunity: `github.com/mikestein2016/Guardians-of-Immunity`
- Hoop Shooter: `github.com/mikestein2016/HoopShooter`
- Managing Difficult Behavior: `github.com/mikestein2016/Managing-Student-Behavior`
- New Faculty Crash Course: `github.com/mikestein2016/NewFacultyCrashCourse`
- Safety Steve at the Solar Farm: `github.com/mikestein2016/Safety-Steve-Demo`
- Search for Life: `github.com/mikestein2016/SearchForLife`

### External-account asset (migrated 2026-05-14)
- DTM (Demographic Transition Model). Original: `hccfaculty/DemographicTransitions`. **Mirrored to `github.com/mikestein2016/DemographicTransitions` on 2026-05-14 (gh-pages branch preserved). GitHub Pages auto-enabled, HTTPS enforced. Live at `mikestein2016.github.io/DemographicTransitions/`.** Iframe URL on the new site updates from `hccfaculty.github.io/DemographicTransitions/` to `mikestein2016.github.io/DemographicTransitions/`.

## ID Case Files branching mechanic

Case files do NOT use iframes. The branching choice mechanic is built into each page itself (likely React or JS native to Framer). Migrating to the new site requires rebuilding the branching component as a reusable React component, used across all 11 published entries and the roughly 40 entries planned across the remaining four 5D Spiral phases. This is the largest single dev task in Phase 2.

## Client logos surfaced on home page (Trusted By section)

Eleven client logos cycle through the auto-scrolling "Trusted By" carousel on the home page. Confirmed from Mike's full-HTML screenshot 2026-05-14, categorized by the aria-label partner taxonomy already in use.

### Higher Education Partners (6)
- **University of Maryland College Park (UMD).** aria-label: "University of Maryland College Park UMD – Higher Education Partner of ID Atlas."
- **University of Maryland Global Campus (UMGC).** aria-label: "University of Maryland Global Campus UMGC – Higher Education Partner of ID Atlas." Came via Reddit per the company brief.
- **Texas State University (TXS).** aria-label: "Texas State University – Higher Education Partner of ID Atlas." Anchor for The Last Resort hospitality serious game.
- **Johns Hopkins University (JHU).** aria-label: "John Hopkins University – Higher Education Partner of ID Atlas." NEW to inventory; was not previously mentioned in conversation. Strong credibility anchor.
- **Illinois Tech.** data-framer-name="Illinois Tech" but **no aria-label set** on the logo wrapper. Accessibility gap that should be fixed in the rebuild.
- **Howard Community College (HCC).** aria-label: "Howard Community College – Higher Education Partner of ID Atlas." **Flag: Mike previously stated the HCC connection is "effectively severed" since leaving the role. Decision needed: remove from current carousel, reframe as "Past work" credit, or actively re-engage HCC.**

### Non-Profit Partners (3)
- **Internet Security Research Group (ISRG).** aria-label: "Internet Research Security Group – Non-Profit Partner of ID Atlas." Let's Encrypt parent; cybersecurity training case study.
- **Hebrew Immigrant Aid Society (HIAS).** aria-label: "Hebrew Immigrant Aid Society – Non-Profit Partner of ID Atlas."
- **Lutheran Immigration and Refugee Service (LIRS).** aria-label: "Lutheran Immigration and Refugee Service – Non-Profit Partner of ID Atlas."

### Small Business Partners (2)
- **Grow With Trees (GWT).** aria-label: "Grow With Trees – Small Business Partner of ID Atlas." Most consistent stable contract per the brief.
- **Qmedix.** aria-label: "Qmedix – Small Business Partner of ID Atlas." NEW to inventory.

### Framing clarification (per Mike, 2026-05-14)
The "Trusted By" carousel reflects past partners and clients Mike has worked with, not exclusively active relationships. HCC stays on the list as a historical credit. This matches standard agency practice (list anyone you've delivered to) and aligns with the aria-label phrasing of "Partner of ID Atlas" with no time qualifier.

### Audit-relevant observations
- **Distribution matches the home-page positioning text** (higher education, small businesses, and non-profits). Higher ed is the dominant segment (6 of 11), then nonprofits (3), then small business (2). Consistent with the agency's stated audience triple.
- **Two names new to the company brief:** Johns Hopkins University and Qmedix. JHU especially is worth surfacing more prominently as a credibility anchor that wasn't in our earlier conversation. Worth confirming the engagement details so the brief is accurate.

### Rebuild punchlist (small fixes for the new site)
- Add an aria-label to the Illinois Tech logo to match the others. Suggested: "Illinois Institute of Technology – Higher Education Partner of ID Atlas." Confirm phrasing with Mike before shipping.
- Correct the ISRG aria-label from "Internet Research Security Group" to "Internet Security Research Group."
- Correct the JHU aria-label from "John Hopkins University" to "Johns Hopkins University."

## Notable findings worth surfacing on the new site

1. **Dirtyword Magazine credit.** The Monopoly Tax post was originally published in Dirtyword Issue 11 (Nov 2025). The magazine has since been discontinued and pulled the issue, so idatlas.org now carries the full article as the canonical source. The publication credit itself still stands as a credibility signal worth surfacing on an about/credentials section, framed honestly (e.g., "Originally published in Dirtyword Magazine, Issue 11, November 2025"). The post itself needs full-fidelity migration with all data, tables, and visualizations preserved.
2. **Mike's official title: "Director of Design at ID Atlas."** Used in the Dirtyword byline.
3. **Art Del Rosario credited by name** for the accessible drag-and-drop development. Apprentice attribution is already happening publicly.
4. **Production stack for serious games: Construct 3 + Midjourney + Photoshop + Eleven Labs.** Worth surfacing as visible production capabilities on the games service page.
5. **Free 15-minute career consultation CTA** appears consistently on /explore/sectors, /explore/skills, and /explore/job-roles. This is the active coaching funnel today, placed across the entire career-discovery surface.
6. **5D Spiral is canonically defined inside ID Case File #0 (The Final Interview).** Along with the three foundational pillars (Human-Centered Design, Andragogy, Learning Theories) and a hybrid Waterfall+Agile PM model (using SAM rather than ADDIE). Case File #0 functions as ID Atlas's methodology bible. Pull from here when rewriting the home page process section to replace the current three-phase pitch.

## Open items / decisions pending

- **Save location for site rebuild artifacts.** Currently using `ACE Doc/ID_Atlas_Site_Rebuild/`. Better location available?
- **Content fidelity for final migration.** WebFetch returns AI summaries, not verbatim source. For the final cut-over, copy will need to be pulled from the rendered HTML directly to preserve exact wording.

## URL map (preliminary)

### idatlas.org → idatlas.org (preserved, no redirects)
All current idatlas.org URLs remain at their existing paths.

### mikesteindesign.org → idatlas.org (301 redirects)
- mikesteindesign.org/ → idatlas.org/portfolio (TBD pending portfolio page decision)
- mikesteindesign.org/assets/* → equivalent assets on idatlas.org

Per-URL mapping to be detailed as the MSD portfolio pieces find their target homes.
