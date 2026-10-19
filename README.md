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

The site tells one story, in this order: who I am (About me), how I've enabled AI at YPO (Training, then
Real use cases with the combined real results and five use cases), how I'd enable AI in your company (my AI strategy
and 90-day plan, including the two academies), and how I'd work with your policy teams (AI governance, plus the
platform comparison). It ends with a gift for hiring managers.
Older links still work: `#/playbook`, `#/reports`, `#/board`, `#/workflows` and `#/built` open the matching use case,
`#/learning` opens the framework on the strategy page and `#/platforms` opens Governance.

## Settings

Edit the `CONFIG` block at the bottom of `index.html`:

- `photo`: `assets/paige-elizabeth-morgan.jpg`
- `cv`: `assets/Paige-Elizabeth-Morgan-CV.pdf`
- `linkedin`: your profile URL (the LinkedIn button stays hidden until this is filled in)

## Sample shortcuts

- `demos/report-demo.html#after` opens straight on the consolidated report
