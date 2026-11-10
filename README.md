# Paige Elizabeth Morgan: portfolio

A static site with no build step. Every push to `main` updates the live site at paigeelizabethmorgan.com.

## Files

- `index.html`: the home page and every section, each with its own link (for example `/#/work`)
- `demos/playbook-demo.html`: the PMO Enterprises sample playbook
- `demos/report-demo.html`: the Chapter Overview Report sample (before and after)
- `demos/commitments-demo.html`: the tracker embedded inside the report and the playbook
- `demos/pmo-data.js`: the fictional data all three samples share
- `assets/`: CV PDF and photo

## Sections

The site tells one story, in this order: what I do (Executive briefings, end to end: at a glance, the eight steps
of a briefing, the calendar, pipeline influence, one standard, and how I'd run a briefing centre in my first 90 days),
who I am (About me), how I've enabled AI at YPO (Training, led by the training kit, then Real use cases with the combined
real results and six use cases), how I'd enable AI in your company (my AI strategy and 90-day plan, how I prove value,
and the two academies), and how I'd work with your policy teams (AI governance). It ends with a gift for hiring managers.
A Community page (`#/community`; `#/communities` also opens it, and `#/students` opens its students section) sits beside the story, linked from a full-width card on the home page: how I build community, students and learning, from one market to global, the commercial results, and a 90-day plan.
The briefings page is `#/briefings` (`#/briefing`, `#/ebc` and `#/executive` also open it).
Older links still work: `#/playbook`, `#/reports`, `#/board`, `#/workflows` and `#/built` open the matching use case,
`#/learning` opens the strategy page, `#/value` opens How I prove value, `#/agents` opens the agents use case and `#/platforms` opens Governance.

## Settings

Edit the `CONFIG` block at the bottom of `index.html`:

- `photo`: `assets/paige-elizabeth-morgan.jpg`
- `cv`: `assets/Paige-Elizabeth-Morgan-CV.pdf`
- `linkedin`: your profile URL (the LinkedIn button stays hidden until this is filled in)

## Visitor numbers

Vercel Web Analytics is loaded in the `<head>` of `index.html`, `demos/playbook-demo.html` and `demos/report-demo.html`
(not `commitments-demo.html`, which sits inside the other samples and would double count). Turn it on in the Vercel
project's Analytics tab; visitors, page views, referrers, countries and devices then show there.

## Sample shortcuts

- `demos/report-demo.html#after` opens straight on the consolidated report
