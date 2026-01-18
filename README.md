# kiroong.github.io

Personal homepage & CV for GitHub Pages.

## Structure

```
site/     # Homepage (React + Vite + Tailwind)
CV/       # CV (LaTeX)
```

## Development

```bash
# Homepage
cd site && yarn dev

# CV (requires LaTeX)
cd CV && pdflatex src/cv_2.tex
```

## Deploy

Build `site/` and deploy `dist/` to GitHub Pages.
