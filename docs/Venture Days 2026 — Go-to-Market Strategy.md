# Venture Days 2026 — Go-to-Market Strategy

Oct 2, 2026 · @secura

## Summary

At Luxembourg Venture Days (14–15 October 2026, Luxexpo The Box) we are invited for Fit 4 Start #17 Pitch days, and on the same floor, we want to build the pipeline for the March 2027 DORA register filing.

- **Sell first:** the compliance engine ([compliance-engine](../../compliance-engine/)) — a self-hosted, open-core DORA register and readiness tool for Luxembourg fund managers, ManCos, AIFMs and smaller PSFs.
- **Sell second (2027 H2):** NEXOPS ONE™ — cloud economics, concentration and sovereignty intelligence ([nexops-one](../../nexops-one/)) for the same buyer, once the register shows them what they depend on.
- **Event goals:** selection by the jury (up to €150k equity-free), 15 qualified conversations, 5 Register Health Checks booked, 2 design-partner commitments, 1 channel-partner discussion.
- **Launch window:** the next CSSF filing (reference date 31 December 2026, due by end of March 2027). Five months is exactly one sales cycle.

## Claims check

On stage we claim only what the code does today; a jury with one compliance officer on it will test every overclaim.

| Area | Safe to claim | Do not claim yet |
| --- | --- | --- |
| Register | Imports the existing register spreadsheet; evaluates it against DORA, GDPR and EU AI Act catalogs; missing data is "not assessed", never a pass | "CSSF-ready submission" — the Profile A xBRL-CSV export is labelled indicative; the official EBA taxonomy and validation rules are not loaded |
| Workflow | Evidence, review and approval workflow; audit log; encryption at rest; PDF readiness report | Certification or legal sign-off — outputs are readiness aids |
| Deployment | Self-hosted, open core (Apache-2.0), Helm chart, offline demo | "SaaS" — there is no hosted offering yet |
| Vendor trust | Ships its own DORA vendor due-diligence pack: register entry, exit plan, subprocessors | Handing the pack out as final — it and the licence are pending legal review |
| NEXOPS ONE™ | Read-only connectors to Azure (Lighthouse) and AWS; design-partner demo | FinOps, sovereignty or AI copilot as products — these are scaffolds |

**Statistics to use** (verify the EY figure's original source before it goes on a slide):

- The CSSF warned that 2026 checks apply to more data fields, so a register accepted in 2025 may be rejected in 2026.
- EY reports that of 947 registers analysed, only 6.5% passed all 116 checks, and 86% of errors were missing mandatory information.
- Drop the earlier "only 40% filed ahead of the deadline" figure: no source was found.

## Positioning

One company, NEXOPS ONE™, with the compliance engine as the door and cloud intelligence as the room behind it.

- **The wedge:** every SaaS compliance tool becomes one more ICT third party in the register it helps you build. Ours runs inside the client's perimeter, is open source with a documented exit plan, and ships its own register entry. Line: *"The DORA tool that doesn't create a new DORA problem."*
- **Recurring revenue from a recurring pain:** validation tightens every year. Clients subscribe to the commercial edition for the maintained catalog feed (signed annual rule updates), the Profile A register export, SSO and the advanced workflow.
- **Channel built in:** multi-tenancy (`tenancy.multi`) lets a third-party ManCo, fund administrator or boutique consultancy run many entities from one install.
- **The bridge to NEXOPS ONE™:** the register tells a client *what* it depends on; NEXOPS, already connected read-only to Azure and AWS, tells it what that costs, how concentrated it is and what an exit would take.
- **Why me:** finance-sector IT missions plus multi-cloud and hybrid infrastructure — I understand both the regulatory register and the cloud architecture behind it.

## Two audiences

Venture Days is co-organised by Luxinnovation and LPEA, so the room holds both the jury that admits us and fund managers who are in DORA scope themselves.

| Audience | Who | Goal | Success measure |
| --- | --- | --- | --- |
| Fit 4 Start jury | Experienced entrepreneurs, investors, experts | Selection among the 24 startups for #17 (record 556 applications) | Selected; up to €150k equity-free (tranches €50k / €80k / €20k) |
| Event floor | GPs and AIFMs (LPEA), ManCos, fund administrators, Big 4, banks | Pipeline for the March 2027 filing | 15 qualified conversations, 5 Health Checks, 2 design partners, 1 channel partner |

Jury hook: *"How many of the funds represented in this room filed a DORA register last March? Who is confident it passes next March's checks?"*

## Pitch

One story in three lengths: the one-liner for the badge queue, 60 seconds for the floor, the 8-slide deck for the jury.

**One-liner.** *We help Luxembourg fund managers and smaller regulated entities file a DORA register that passes CSSF validation, and keep it accurate all year, with software that runs in their own environment, so the compliance tool isn't another third-party risk.*

**60 seconds.**

> Every CSSF-supervised entity must file a DORA register of all its ICT providers every year. The checks are getting stricter: the CSSF itself warned that registers accepted in 2025 may be rejected in 2026. In one analysis, only 6.5% of registers passed every check, and most errors were simply missing mandatory data.
>
> Big entities throw consultants at it. A 15-person ManCo can't.
>
> We built a compliance engine that takes the register you already have, shows exactly what's missing before the regulator does, tracks evidence and approvals, and exports the filing. It runs in your own environment and is open source, so it doesn't become another vendor you have to register and assess.
>
> I've spent my career on IT missions in finance and on multi-cloud infrastructure. I understand both the register and the cloud architecture behind it.
>
> Next March's filing is our launch window. After that, the same buyer asks: how concentrated are we on one cloud, and what would it cost to leave? That's NEXOPS ONE™, already connecting to Azure and AWS.
>
> We're looking for three Luxembourg fund managers to file with us in March, and introductions to ALFI and LPEA compliance officers.

**Deck (8 slides, 3–5 minutes).**([Example of Pitch to potencial Venture capital](./NEXOPS%20ONE™%20—%20Venture%20Days%20Pitch.pptx))

1. Problem — the CSSF warning and the 6.5% statistic
2. Who hurts — small ManCos, AIFMs and PSFs without a DORA team
3. Live demo (90 seconds) — import a register, see the gaps, export
4. Why self-hosted open core wins in Luxembourg
5. Business model — open core, commercial edition, channel
6. Traction — letters of intent and design partners
7. Roadmap to NEXOPS ONE™
8. Team, the ask and use of funds

**Use of the €150k.** Load the official EBA taxonomy and validation rules; legal review of commercial terms and the vendor pack; a Luxembourg-hosted managed option for clients without IT; a compliance co-founder or advisor; three design partners converted to paying.

## 12-day countdown

The Register Health Check is the one piece of engineering before the event; letters of intent are the one piece of selling, and they run every day until the pitch.

&#91;embedded content: countdown · 2–15 October 2026\]

- [ ] Confirm pitch slot, length and Q&A format with Luxinnovation; register on the event's matchmaking platform
- [ ] List 40 named targets: LPEA and ALFI members, third-party ManCos, fund administrators, IT-outsourcing PSFs, past mission contacts
- [ ] Health Check: implement the mandatory-field checks from the ESA validation rules workbook (86% of errors) and a one-page validation PDF
- [ ] Two or three non-binding letters of intent ("we will pilot for the 2027 filing")
- [ ] Deck, one-pager with QR code, Health Check booking page
- [ ] Rehearse with one compliance officer and one investor; drill the hard questions
- [ ] Offline demo laptop, PDF backup of the deck, printed one-pagers

## On-site playbook (14–15 October)

Every conversation ends with a booked Health Check or a polite exit; nothing in between.

- **Opener:** "Did your register go through cleanly in March?" Pain is a lead; "yes, fine" means move on.
- **Offer:** a free Register Health Check — send last year's register, get a report of what will fail next year within 48 hours.
- **Qualify:** entity type, number of ICT providers, who filed last time (in-house or consultant), resubmission pain, budget owner. Log it the same day.
- **Channel scouting:** third-party ManCos, boutique risk advisors and Big 4 managers swamped by low-margin clients.
- **Demo:** offline on the laptop (`compliance-engine demo` runs in memory) — no dependence on venue Wi-Fi.
- **Hand-out:** the one-pager with a QR code to the Health Check booking page.

## Offer and pricing

Prices below are hypotheses to test in the first 15 conversations, not a price list.

| Offer | Content | Indicative price |
| --- | --- | --- |
| Register Health Check | Validation report on the existing register | Free (first 20) |
| Filing Season 2027 | Licence, migration of last year's register, validation, export, one resubmission supported | €7.5k–15k fixed |
| Annual subscription | Commercial edition: maintained catalogs, Profile A, SSO, advanced workflow | €8k–20k per entity per year |
| Channel licence | Multi-tenant install for ManCos and consultancies | €1.5k–3k per entity per year |

Before signing any customer: a legal entity, final commercial terms (the licence is a placeholder), professional liability insurance, and the vendor pack legally reviewed.

## Hard questions

Rehearse these out loud; each answer fits in 20 seconds.

| Question | Answer |
| --- | --- |
| Big 4 and GRC suites already do this. | They sell consulting days or heavy SaaS that itself goes into the register. We are validation-first, self-hosted, a fraction of the price, and built by someone who knows the cloud stack being registered. |
| Isn't Luxembourg too small? | It is the beachhead. DORA is EU-wide; next come fund hubs with the same buyer (Ireland, then France, Belgium, the Netherlands). GDPR and AI Act catalogs already exist. |
| Isn't this seasonal? | The register is maintained all year, the rules change every year (that is the subscription), and NEXOPS ONE™ is the upsell. |
| Who is liable if the CSSF rejects a filing? | It is a readiness and validation aid, not legal advice; the entity files. We catch errors before the regulator does. |
| You are a solo founder. | Name the compliance advisor, or the co-founder search under way. Recruit one LOI contact as advisor before 14 October. |
| Open source — who pays? | The free core builds trust and adoption; the paid parts are what regulators require: validated export, maintained rules, multi-entity. |

## After the event

The success test is the March 2027 filing: 5–10 entities that file with us and pass first time become the case study that sells NEXOPS ONE™.

&#91;embedded content: post-event roadmap · 5 phases, 4 gates\]

The CSSF filing window for 2027 is not yet published; in 2026 the eDesk portal opened on 11 February with a 31 March deadline.

## Sources

- [Luxembourg Venture Days](https://www.venture-days.lu/)
- [Paperjam — investors and start-ups at LuxExpo in October](https://en.paperjam.lu/article/investors-and-start-ups-see-yo)
- [Luxinnovation — how to get the most out of Venture Days](https://luxinnovation.lu/news/how-to-get-the-most-out-of-luxembourg-venture-days)
- [Luxinnovation — Fit 4 Start](https://luxinnovation.lu/assess-and-accelerate/fit4start)
- [Fit 4 Start — how the €150,000 is paid](https://www.incorporate.lu/resources/fit-4-start-application-guide)
- [CSSF — DORA register submission timeframe 2026](https://www.cssf.lu/en/2026/02/dora-submission-timeframe-for-register-of-information-edesk-portal-open-as-of-11-february-2026/)
- [Paperjam — CSSF opens DORA register filing window](https://en.paperjam.lu/article/cssf-opens-dora-register-filing-window-clock-runs-to-31-march)
- [EY — DORA register quality checks do not stop at submission](https://www.ey.com/en_lu/insights/financial-services/dora-register-of-information-quality-checks-do-not-stop-at-submission)
- [CSSF — guidance on register error messages](https://www.cssf.lu/wp-content/uploads/Guidance-for-interpretation-and-resolution-of-CSSF-error-messages-related-to-the-submission-of-the-DORA-register.pdf)

Figures are taken from search-result summaries of these pages; open each before quoting it on a slide.
