# Em Morgan: portfolio

A static site. No build step. Deploy the whole folder to Vercel (via GitHub, as with the playbook).

## Files

- `index.html`: homepage boxes and all nine pages
- `demos/playbook-demo.html`: PMO Enterprises playbook demo
- `demos/report-demo.html`: Chapter Overview Report demo (before and after)
- `demos/commitments-demo.html`: the tracker embedded inside the report and the playbook
- `demos/pmo-data.js`: the fictional data all three demos share

## To finish

Edit the `CONFIG` block at the bottom of `index.html`:

- `photo`: add a square photo as `assets/em-morgan.jpg` and set `photo: "assets/em-morgan.jpg"`
- `cv`: add your CV as `assets/Paige_Elizabeth_Morgan_CV.pdf` and set the path
- `linkedin`: your profile URL
- `boardDeck`: the link to your sample board presentation
- `videos.training`: a Loom, YouTube or Vimeo share link

Anything left empty hides its button or shows a "coming soon" state.

## Demo shortcuts

- `demos/playbook-demo.html?skip=1` skips the chapter gate
- `demos/report-demo.html#after` opens straight on the consolidated report
- Report notes password: `demo`
