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

About me, Training, Sample work (four projects with real-world results), AI governance, AI workflows,
Choosing an AI platform, 90-day plan, How I design learning, How I built this site, and a gift for hiring managers.
Older links (`#/playbook`, `#/reports`, `#/board`) open the matching project on the Sample work page.

## Settings

Edit the `CONFIG` block at the bottom of `index.html`:

- `photo`: `assets/paige-elizabeth-morgan.jpg`
- `cv`: `assets/Paige-Elizabeth-Morgan-CV.pdf`
- `linkedin`: your profile URL (the LinkedIn button stays hidden until this is filled in)

## Sample shortcuts

- `demos/report-demo.html#after` opens straight on the consolidated report
