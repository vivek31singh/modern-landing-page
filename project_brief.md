# Project Brief: modern-landing-page

## Project Type
Static Marketing Website / Single Page Application (SPA)

## Project Goals (Golden Context)
To deliver a polished, high-performance marketing homepage that maximizes user engagement and conversions. The site must feature a minimalist aesthetic with a consistent brand system, implement a robust dark mode with user persistence, and achieve a Lighthouse score of 90+ across Performance, Accessibility, Best Practices, and SEO. Content management must be simplified via a structured JSON file.

## Complexity
**Moderate**
*Justification*: While a landing page is conceptually simple, the requirement for high Lighthouse scores (90+) adds significant complexity regarding performance optimization, semantic HTML structure, and accessibility compliance (ARIA). Furthermore, implementing a persisted dark mode system, JSON-driven content architecture, and responsive animations requires a structured approach rather than ad-hoc coding.

## Tech Stack
*   **Framework:** Next.js 14+ (App Router) - For SEO optimization, Server Components, and routing.
*   **Language:** TypeScript - For type safety and maintainability.
*   **Styling:** Tailwind CSS - For utility-first styling and rapid UI development.
*   **Animations:** Framer Motion - For lightweight, performant animations.
*   **Icons:** Lucide React - For consistent, tree-shakeable icons.
*   **Theme Management:** next-themes - For seamless system/dark mode handling and persistence.
*   **Form Handling:** React Hook Form + Zod - For validation of the contact/newsletter forms.
*   **Utilities:** clsx & tailwind-merge - For composing conditional classes.
