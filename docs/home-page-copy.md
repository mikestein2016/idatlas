# ID Atlas Home Page Copy (v1 draft)

Working draft of the new home page. Section-by-section copy plus structural notes. Translates to Astro `src/pages/index.astro` (or a layout + sections) in a later step.

---

## Page meta

- **Title tag:** Custom Training for Nonprofits and Higher Education | ID Atlas
- **Meta description:** ID Atlas designs and builds e-learning, microlearning, serious games, and accessibility-compliant training for nonprofits, universities, and mission-led startups. Trusted by ISRG, Johns Hopkins, UMD, HIAS, Texas State, and more.
- **Open Graph title:** Training built for mission-driven work
- **Open Graph description:** Custom e-learning, microlearning, and serious games for nonprofits, universities, and mission-led startups.
- **OG image:** TBD (placeholder: idatlas.org/og-default.png)
- **Schema.org:** Organization + ProfessionalService + sameAs (LinkedIn, YouTube, Reddit, Discord)

---

## 1. Hero

**H1:** Training built for mission-driven work.

**Subhead:** Custom e-learning, microlearning, and serious games for nonprofits, universities, and mission-led startups. We map what your team actually needs to learn, then design and build it within your budget. Trusted by ISRG, Johns Hopkins, UMD, HIAS, Texas State, and more.

**Primary CTA:** Book a discovery call → /contact
**Secondary CTA:** See our work → #recent-work

**Structural note:** Hero is a two-column layout above the fold. Left: H1, subhead, CTAs. Right: hero visual (placeholder for now). No standalone tagline.

---

## 2. Trusted By

**H2:** Past partners and clients

**Intro line:** Over two years we've designed and built training for universities, mission-driven nonprofits, and small businesses across multiple sectors. Some of the organizations we've worked with:

**Layout:** Static grid (no carousel), grouped by partner type with H3 sub-headers. Monochrome logos with subtle color treatment on hover. Each logo has a complete alt attribute carrying the full partnership phrasing.

### Higher Education Partners (6 logos)
- University of Maryland College Park (UMD)
- University of Maryland Global Campus (UMGC)
- Texas State University
- Johns Hopkins University
- Illinois Institute of Technology
- Howard Community College (HCC)

### Non-Profit Partners (3 logos)
- Internet Security Research Group (ISRG)
- Hebrew Immigrant Aid Society (HIAS)
- Lutheran Immigration and Refugee Service (LIRS)

### Small Business Partners (2 logos)
- Grow With Trees
- Qmedix

---

## 3. Two-segment value-prop cards

**Section H2:** Who we work with best

Two side-by-side cards (stack on mobile). Each has a short body, named clients, and a Learn More link.

### Card 1 — Higher Education

**H3:** For universities and academic departments

**Body:** Course conversion, faculty development, accessibility compliance. We've redesigned face-to-face courses into online and hybrid formats for universities including UMD, Texas State, Johns Hopkins, and Illinois Institute of Technology. We work alongside faculty as partners, not contractors. We build digital learning that respects pedagogy and meets Quality Matters and Section 508 standards.

**CTA:** Higher education services → /higher-ed

### Card 2 — Nonprofits

**H3:** For mission-driven nonprofits

**Body:** Custom training that fits a nonprofit's budget, mission, and constraints. We've built compliance training, scalable on-demand programs, and accessible learning for organizations like ISRG, HIAS, and LIRS. We work with you to identify what training your team actually needs, even when you're not sure yet, and then we build it.

**CTA:** Nonprofit services → /nonprofits

**Structural note:** Mission-led startups get a smaller block below or inside Services rather than its own card here. The home page leads with the two strongest segments.

---

## 4. Services grid

**Section H2:** What we build

Six service cards in a 3-column grid (stacks on mobile). Each card: icon or visual, H3 title, two- to three-sentence body, link to a deep service page.

### Course Development
End-to-end course design for online, hybrid, and in-person delivery. From discovery and learning-objective definition through final QA and LMS deployment. Aligned to Quality Matters where applicable.

### Serious Games and Simulations
Game-based learning that turns dry content into something people actually want to engage with. Examples from our work: hospitality management, English pronunciation, demographic transition modeling, and immunity concept gameplay.

### Microlearning
Short, focused training modules built for the flow of work. Effective for compliance, onboarding, and just-in-time skill refreshers. Designed to deploy quickly and refine continuously.

### Instructor-Led Training and Train-the-Trainer
In-person training design, train-the-trainer programs with structured materials, trainer prep, and post-delivery coaching. For teams that need their instructors to teach effectively.

### Accessibility Audits and Remediation
WCAG AA and Section 508 audits with prioritized remediation plans and VPAT documentation. We build accessibility into new courses from the start and remediate existing ones when needed.

### ID Coaching
One-on-one career coaching, resume and portfolio reviews, and software training for people transitioning into instructional design. Different audience from agency clients. Free 15-minute consultation available.

**Structural note:** Each service title links to a dedicated /services/[name] page over time. For launch, links can point to the closest existing page (e.g., #contact) and we build out service pages iteratively.

---

## 5. How we work: the 5D Spiral

**H2:** How we work: the 5D Spiral

**Intro:** We use a structured, iterative methodology adapted from ADDIE called the 5D Spiral. It treats analysis and evaluation as continuous activities rather than discrete phases, and it shapes every engagement we take on.

Five compact cards in a row (stack on mobile):

### Define
Start with the problem, not the solution. We ask diagnostic questions before recommending anything. Triangulate stakeholder input, organizational constraints, and learner needs to build the strongest hypothesis we can.

### Design
Map the learning paths, the activities, and the assessments. Get alignment from the client and SMEs before any production starts. Document decisions so revisions are scoped, not endless.

### Develop
Build the training. Maintain accessibility, brand, and pedagogical integrity throughout. Test against the design decisions, not against opinions.

### Drive
Deploy and pilot. Train trainers if applicable. Help client teams get learners using it.

### Determine
Measure what happened. Report back honestly. Adjust the training, the rollout, or the strategy based on what the data shows.

**CTA:** Read the full methodology → /our-model

---

## 6. Recent work

**H2:** Recent work

Three case-study cards in a row (stack on mobile). Each: visual, H3 title, one-line context, two- or three-sentence body, link.

### Card 1 — The Last Resort, Texas State University

**Context line:** Hospitality management simulator for continuing education

**Body:** A gamified hotel management simulator built in Construct 3 with character art generated via Midjourney and character voices synthesized in Eleven Labs. Students manage pricing, staffing, and amenities across 24 simulated months while learning the metrics and decisions that drive hospitality businesses.

**CTA:** Read the case study → /blog/hotel-management-simulator

### Card 2 — ISRG Cybersecurity Training

**Context line:** From three-hour live training to scalable on-demand modules

**Body:** Converted a recurring three-hour cybersecurity training over Google Meet into a scalable, LMS-tracked on-demand module for ISRG, the nonprofit behind Let's Encrypt. Along the way we consolidated input from multiple SMEs into a single source-of-truth document the organization continues to use internally.

**CTA:** Read the case study → /blog/isrg-cybersecurity-training *(post to be written)*

### Card 3 — Accessible Drag-and-Drop for Articulate Storyline

**Context line:** Open-source template, fully WCAG-compliant

**Body:** A WCAG-compliant drag-and-drop interaction template for Articulate Storyline, accommodating both keyboard and mouse-based learners. We built it because the built-in version is not natively accessible, and we released the template free for the ID community.

**CTA:** Download the template → /blog/accessible-drag-and-drop

---

## 7. About + apprenticeship

**H2:** Who we are

**Body (3 short paragraphs):**

ID Atlas is a small instructional design agency built to work with mission-driven organizations on their terms. Two years of operation. Subcontract relationships across higher education and nonprofit work. Field Notes published in industry magazines and across the field.

Our team is a senior lead working alongside carefully mentored junior designers on every engagement. We're deliberately small. We don't have a sales department. We don't run paid ads. We grow by doing good work for clients who tell other people.

When we work together, you get senior-level design judgment on every deliverable. You also get the cost flexibility that comes from a real apprenticeship model rather than a senior-only roster.

**CTA:** Read more about how we work → /our-model

**Structural note:** No founder bio on the home page. The /about and /our-model pages can carry more depth if needed, still framed agency-first.

---

## 8. Final CTA

**H2:** Let's talk about your training problem

**Body:** We start every engagement with a free 30-minute discovery call. We use it to understand what you're actually trying to accomplish before we propose anything. No commitment, no pitch deck, no follow-up if it isn't the right fit.

**Primary CTA button:** Book a discovery call → /contact
**Email link:** mike@idatlas.org

---

## 9. Footer

### Footer summary (left column)
ID Atlas. Custom training for mission-driven teams.

### Nav (middle columns)
- Services
- Higher Education
- Nonprofits
- How We Work
- Field Notes
- Explore (Career Discovery)
- Contact

### Connect (right column)
- LinkedIn
- YouTube
- Reddit
- Discord
- mike@idatlas.org

### Bottom row
- © 2026 ID Atlas. All rights reserved.
- Privacy
- Accessibility statement

---

## SEO and AEO additions (engineering reference)

- `<title>` and `<meta name="description">` as specified above.
- Open Graph and Twitter Card tags.
- JSON-LD Organization schema (name, url, logo, sameAs links for LinkedIn / YouTube / Reddit / Discord, address: Brazil + Remote).
- JSON-LD Service schema for each of the six services.
- Add `/llms.txt` at the site root summarizing the agency for AI crawlers (separate file).
- Add a `/faq` page with FAQ schema (separate page; see audit punchlist).
- `<h1>` on the home page contains "Training" + "mission-driven" for the relevant queries.
- Internal links from the home page hit `/higher-ed`, `/nonprofits` (new), `/our-model` (new), `/blog`, three case studies, and `/contact`.

---

## New pages this home page implies (build alongside)

- `/nonprofits` — equivalent to `/higher-ed` but for the nonprofit segment. Hero, services framed for nonprofits, ISRG / HIAS / LIRS as anchors.
- `/our-model` — methodology page with the full 5D Spiral expansion (lifted from Case File #0), the apprenticeship-model framing, and how engagements are structured.
- `/services/[name]` (deferred) — individual service deep pages. For launch, the services-grid cards can link to `#contact` or to an anchor on `/services` and we build out the depth pages iteratively.

---

## Notes for the next iteration

- Open question: do we keep the existing "What we do" anchor on the home page above the value-prop cards (as the current Framer site has it), or remove that header since the services grid is its own section lower? My read: remove the floating "What we do" label; the services grid header replaces it.
- Hero visual: TBD. The current Framer hero uses a stock pencil-on-paper image. A new visual that signals "training in action" or "mapping" would serve the new positioning better. Could be photography, illustration, or a subtle animated visual referencing the Atlas metaphor.
- CTA copy: "Book a discovery call" is direct. Alternatives ("Get in touch", "Tell us about your project") are softer. Direct usually wins for B2B services.
- Trust-signal one-liner: optional but worth considering. A single sentence near the hero or below the logos that says something like "Two years of partnership-led work. Eleven named clients. Featured in Dirtyword Magazine." This is the kind of one-liner that does real qualifying work for skeptical prospects.
