# Pravacana

Landing page for **Pravacana** (प्रवचन) — *Courses & Discourses*, the Sastranidhi
initiative for courses, discourses, guided study, assessments, and certification
in Indian Knowledge Systems. Built in the same style as the Viśleṣaka main page.

It lists the featured courses from [sastranidhi.org](https://www.sastranidhi.org)
and the video courses on the Sastranidhi IKS-LMS
([sastranidhi.edmingle.com](https://sastranidhi.edmingle.com/courses)).

## Stack

React + TypeScript + Vite + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5174
npm run build     # type-checks, then builds to dist/
```

## Where things live

- `src/data/courses.ts` — every course shown on the page (titles, descriptions, links)
- `src/lib/site.ts` — site name, motto, Sastranidhi portal URL
- `src/pages/HomePage.tsx` — the page; `src/components/layout/` — header and footer
- `public/images/courses/` — canto thumbnails (saved locally; the LMS image links expire)
