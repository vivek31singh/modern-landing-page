# Development Guidelines

## File Structure
```
/
├── app/
│   ├── api/
│   │   └── newsletter/
│   │       └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── Newsletter.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Container.tsx
│       ├── Input.tsx
│       ├── Logo.tsx
│       └── ThemeToggle.tsx
├── content/
│   └── site-data.json
├── lib/
│   ├── utils.ts
│   └── hooks.ts
├── public/
│   └── images/
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Naming Conventions
*   **Files:** `PascalCase` for components (e.g., `ThemeToggle.tsx`), `kebab-case` for utilities and generic files (e.g., `site-data.json`, `utils.ts`).
*   **Folders:** `kebab-case` (e.g., `social-proof/`).
*   **Components:** `PascalCase` (e.g., `export function PricingCard()`).
*   **Functions/Variables:** `camelCase` (e.g., `const handleClick`, `function formatDate()`).
*   **Constants:** `UPPER_SNAKE_CASE` (e.g., `const MAX_RETRIES`).
*   **CSS/Tailwind:** Standard Tailwind utility classes.

## Coding Standards
*   **Type Safety:** Strict mode enabled in `tsconfig.json`. No `any` types allowed. Explicit interfaces for props.
*   **Imports:** Absolute imports using `@/` alias (configured in `tsconfig`).
*   **Styling:** Use Tailwind utilities for 95% of styling. Avoid inline styles. Use `clsx` and `tailwind-merge` for conditional logic.
*   **Formatting:** Use Prettier with the default Tailwind plugin preset to sort classes automatically.
*   **Linting:** ESLint with Next.js recommended rules.
*   **Accessibility:** Use semantic HTML5 elements. Ensure `aria-label` or `aria-labelledby` is used on interactive elements without text context.

## Testing Strategy
*   **Unit Testing:** Use Vitest or Jest for utility functions (e.g., formatting currency, validation schemas).
*   **Component Testing:** Use React Testing Library to verify user interactions like:
    *   Toggling the mobile menu.
    *   Switching themes.
    *   Expanding/Collapsing FAQ accordions.
    *   Form validation error messages.
*   **Visual Regression:** (Optional) Use Chromatic or Percy to ensure design consistency.
*   **E2E/Audit:** Use Google Lighthouse CLI (programmatically or via CI) to ensure the >90 score threshold is met before merging.

## Error Handling
*   **Form Errors:** Client-side validation using Zod to provide immediate, user-friendly error messages inline.
*   **API Errors:** In the newsletter route handler, use `try/catch` blocks. Return appropriate HTTP status codes (400, 500) and JSON error objects.
*   **Global Error Handling:** Implement Next.js `app/error.tsx` and `app/not-found.tsx` boundaries to catch and gracefully display runtime errors or 404s.

## Dependencies
```bash
# Core
npm install next react react-dom

# Styling & UI
npm install -D tailwindcss postcss autoprefixer
npm install clsx tailwind-merge

# Icons
npm install lucide-react

# Theme
npm install next-themes

# Forms & Validation
npm install react-hook-form zod @hookform/resolvers

# Animations
npm install framer-motion
```

## Configuration
1.  **`tailwind.config.ts`**: Define custom color palette (primary, secondary, accent, background, foreground) to support dark mode via `darkMode: 'class'`.
2.  **`next.config.js`**: Configure image domains and strict security headers.
3.  **`.eslintrc.json`**: Extend `next/core-web-vitals`.
4.  **`postcss.config.js`**: Standard Tailwind postcss config.
5.  **`tsconfig.json`**: Configure paths (`"@/*": ["./*"]`) for clean imports.
