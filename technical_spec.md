# Technical Specification

## Architecture Patterns
*   **Atomic Design:** Organizing components into Atoms (Buttons, Icons), Molecules (Cards, Form Fields), and Organisms (Header, Sections).
*   **Composition Pattern:** Building complex UIs by combining smaller, contained components.
*   **Layout Pattern:** Using Next.js Server Components for the main layout to reduce client-side JavaScript bundle size.
*   **Container/Presentational Pattern:** Separating data fetching/logic (if needed) from UI rendering (though mostly static here).

## Component Hierarchy
*   `app/layout.tsx` (Root layout + ThemeProvider)
    *   `components/layout/Header.tsx`
        *   `components/ui/Logo.tsx`
        *   `components/ui/ThemeToggle.tsx`
        *   `components/ui/NavigationMenu.tsx`
    *   `components/layout/Footer.tsx`
    *   `app/page.tsx` (Main Landing Page)
        *   `components/sections/Hero.tsx`
        *   `components/sections/Features.tsx`
            *   `components/ui/FeatureCard.tsx`
        *   `components/sections/SocialProof.tsx`
        *   `components/sections/Pricing.tsx`
            *   `components/ui/PricingCard.tsx`
        *   `components/sections/FAQ.tsx`
            *   `components/ui/AccordionItem.tsx`
        *   `components/sections/Newsletter.tsx`

## Data Models
The `content.json` structure:
```json
{
  "hero": {
    "headline": "String",
    "subcopy": "String",
    "primaryCTA": { "label": "String", "href": "String" },
    "secondaryCTA": { "label": "String", "href": "String" }
  },
  "features": [
    {
      "id": "string",
      "icon": "IconName",
      "title": "String",
      "description": "String"
    }
  ],
  "testimonials": [
    {
      "id": "string",
      "name": "String",
      "role": "String",
      "content": "String",
      "avatar": "url"
    }
  ],
  "pricing": [
    {
      "id": "string",
      "name": "String",
      "price": "String",
      "features": ["String"]
    }
  ],
  "faq": [
    {
      "id": "string",
      "question": "String",
      "answer": "String"
    }
  ]
}
```

## API Design
Since this is a static landing page, no REST API is required.
*   **Newsletter Submission:** Use a Next.js Route Handler (`app/api/newsletter/route.ts`) to validate the request and proxy it to a third-party service (e.g., Resend, ConvertKit) or mock the success response for now.
*   **Endpoints:**
    *   `POST /api/newsletter`: Accepts `{ email: string }`. Returns `{ success: boolean, message: string }`.
