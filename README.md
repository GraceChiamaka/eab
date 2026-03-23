# Next.js template

This is built using Next.js with the shadcn component library,  Tailwind CSS and Typescript.

## Build Strategy

This landing page was built using a modular, component-driven approach that takes reusability, maintainability, and scalability into consideration.

### Architecture Overview

**Tech Stack:**

- **Framework**: Next.js with TypeScript for type safety and a better developer experience
- **UI Components**: shadcn/ui for consistent, accessible, and customizable components
- **Styling**: Tailwind CSS for styling

**Project Structure:**

- **Components**: Organized into logical groups (`app/`, `layouts/`, `ui/`) for clear separation of concerns
- **Layouts**: Reusable layout components (`PageLayout`, `Header`, `Footer`) for a consistent page structure
- **Hooks**: Custom React hooks for shared logic and state management
- **Assets**: Centralized asset management with helper functions for SVG and PNG imports
- **API Routes**: Backend endpoints (e.g., `/api/contact`) for form submissions and server-side operations

### Key Design Decisions

1. **Component Composition**: Each page section (Hero, Stats, Impact, Contact, Countries, Partners) is a modular component, allowing for independent development, maintenance, and use
2. **Layout System**: A shared `PageLayout` wrapper provides consistent styling and structure for additional pages
3. **Type Safety**: Full TypeScript implementation avoids runtime errors and improves code quality
4. **Responsive Design**: Mobile-first approach with responsive components and mobile navigation

### Development Workflow Approach

1. Create reusable UI components using shadcn/ui as the base
2. Build page-specific sections by combining UI components
3. Organize sections within the main app layout
4. Use API routes for handling form submissions
5. Keep a centralized asset system for consistent image and icon management