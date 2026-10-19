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

About me, Training (including how I design learning), Sample work (four projects with real-world results),
AI governance (including the platform comparison), How I build with AI (including how this site was built),
the AI strategy and 90-day plan (including the two academies), and a gift for hiring managers.
Older links still work: `#/playbook`, `#/reports` and `#/board` open the matching project on Sample work,
`#/learning` opens Training, `#/platforms` opens Governance and `#/built` opens How I build with AI.

## Settings

Edit the `CONFIG` block at the bottom of `index.html`:

- `photo`: `assets/paige-elizabeth-morgan.jpg`
- `cv`: `assets/Paige-Elizabeth-Morgan-CV.pdf`
- `linkedin`: your profile URL (the LinkedIn button stays hidden until this is filled in)

## Sample shortcuts

- `demos/report-demo.html#after` opens straight on the consolidated report
