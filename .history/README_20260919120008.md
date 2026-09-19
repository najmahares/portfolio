# Portfolio

Personal portfolio and project case studies for **Najma Hares**, Software Engineer.

Live site: [najmahares.netlify.app](https://najmahares.netlify.app)

---

## About

This site is a record of the work I have built so far, with a focus on
understanding the problem before building the solution. Each project
case study walks through the research, product thinking, design,
engineering and testing behind the final product.

## Featured Projects

### Auditerra

A land restoration monitoring platform built as a two-interface system:
a Flutter mobile application for field experts and a React, Next.js and
TypeScript PWA for institutional supervisors. Includes a Gemini-powered
RAG workflow for soil assessment.

Role: Software Engineer, Product, UX
Stack: React, Next.js, TypeScript, Flutter, Python, FastAPI, PostgreSQL, Gemini

### Agreement Risk Scanner

A full-stack NLP application that helps users understand hidden risks
inside Terms of Service agreements. The system breaks long legal text
into clauses, classifies each one by risk category, and returns a
plain-English report with a weighted risk score.

Role: Software Engineer, ML, Product
Stack: Python, FastAPI, PostgreSQL, SQLAlchemy, Scikit-learn, Next.js, JWT

### PRAXIS

An interactive stock market learning platform that teaches beginners
how the market works by letting them practice it. Learners receive
virtual capital, research real companies, make simulated decisions,
and reason through outcomes with an adaptive AI mentor named Nuru.

Role: Software Engineer, Product, UX, AI Integration
Stack: Next.js, React, TypeScript, PostgreSQL with pgvector, Groq, Gemini, Cloudflare Workers AI

---

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- Responsive layout using CSS Grid and Flexbox
- Custom design system with CSS variables
- Google Fonts (Inter)

---

## Project Structure

```
portfolio/
├── index.html          # Home page
├── project.html        # Auditerra case study
├── agreement.html      # Agreement Risk Scanner case study
├── praxis.html         # PRAXIS case study
├── css/
│   └── style.css       # Global styles and design tokens
├── js/
│   └── main.js         # Scroll reveals, 3D tilt, magnetic buttons, smooth scroll
└── assets/             # Images, mockups and project thumbnails
```

## Design Notes

- Light purple and deep purple palette with coral accents
- Inter as the primary typeface
- Motion is used sparingly: scroll reveals, hover tilt on cards, and a
  rotating contact badge in the footer
- Every interactive element has a visible focus state and respects
  `prefers-reduced-motion`
- Mobile first responsive design across all breakpoints

---

## Roadmap

The site is designed to grow. Planned additions include:

- More project case studies as new work ships
- A short writing section for notes on product and engineering
- Optional blog for longer form write-ups

---

### Author

Najma Hares
