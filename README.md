# Classroom (ক্লাসরুম) — Online Learning Platform

Classroom (ক্লাসরুম) is a modern, responsive, and highly interactive online learning platform designed specifically to empower students from Class 6 to Class 12 across Bangladesh. Built with **React**, **Vite**, **Tailwind CSS v4**, **TypeScript**, and **Framer Motion/Motion**, it offers localized, board-specific academic curriculum preparation, dynamic countdowns, customizable study goals, interactive practice quizzes, a full live-class scheduler, and a collaborative student discussion forum.

This guide provides comprehensive, step-by-step instructions to clone, copy, run, and develop this project locally, followed by a professional, granular git commit blueprint designed to replicate building this platform from scratch.

---

## Table of Contents
1. [Core Features](#core-features)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Local Setup Guide (Step-by-Step)](#local-setup-guide-step-by-step)
5. [Scripts & Development](#scripts--development)
6. [Step-by-Step Professional Git Commit Blueprint](#step-by-step-professional-git-commit-blueprint)
7. [Project Directory Tree](#project-directory-tree)

---

## Core Features

- **Personalized Home Experience**: Includes beautiful hero section, custom feature highlights, and real-time interactive exam countdowns tailored for HSC/SSC/JSC candidates.
- **Dynamic Board Exam Countdown & Study Goals**: An integrated study planning widget where students can track real-time exam timing and set custom, checkable goals stored locally.
- **Comprehensive Course Directories & Details**: Filterable board exam prep materials with curriculum syllabus mapping, lecture video tabs, and reference materials.
- **Interactive Quiz Engine**: Practice multiple-choice questions (MCQs) with instant grade reporting, timed challenges, and full answers key walk-throughs.
- **Collaborative Discussion Forum**: Create threads, post solutions, and upvote educational community inquiries.
- **Interactive Live Class Scheduler**: Real-time scheduled live classes with interactive joining flags.
- **Student & Admin Portals**: Dedicated student dashboard for learning progress visualization and an administrative portal for course management and user listings.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly typed)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Charts/Analytics**: [Recharts](https://recharts.org/)
- **Router**: [React Router DOM v7](https://reactrouter.com/)

---

## Prerequisites

Before setting up the project locally, ensure you have the following installed on your operating system:

1. **Node.js**: Version `18.x` or higher (Recommended: `20.x` LTS). Download from [nodejs.org](https://nodejs.org/).
2. **Package Manager**: `npm` (bundled with Node), `yarn`, or `bun` (for ultra-fast builds).
3. **Git**: Installed and configured on your machine.

---

## Local Setup Guide (Step-by-Step)

Follow these exact steps to run Classroom on your local development computer:

### Step 1: Initialize the Local Project Folder
Open your terminal/command prompt and run the following command to create a new folder:
```bash
mkdir classroom-platform
cd classroom-platform
```

### Step 2: Initialize Git & Repository
Configure a fresh local git repository:
```bash
git init
```

### Step 3: Copying Project Configurations
Create the following essential root files by copying their code exactly from this repository:
1. **`package.json`**: Describes dependencies, typescript configurations, and development scripts.
2. **`tsconfig.json`**: Configures strict TypeScript pathing, standard target environments, and libraries.
3. **`vite.config.ts`**: Builds and hooks up Tailwind CSS v4 and React components.
4. **`.gitignore`**: Excludes heavy packages, static caches, and runtime builds.
5. **`index.html`**: The HTML scaffold mounting our React application.

### Step 4: Install Dependencies
Run the installation command in your terminal using your preferred package manager:

```bash
# Using npm
npm install

# Or using Bun (ultra-fast)
bun install
```

### Step 5: Transfer the Source Code (`/src` folder)
Copy-paste or drag the entire `src/` directory from the repository into your local workspace. Ensure the folder hierarchy remains intact:
- `src/main.tsx` — App bootstrap entry point
- `src/App.tsx` — Routing and layout shell
- `src/index.css` — Global styling and tailwind imports
- `src/types.ts` — Type interfaces
- `src/components/` — Modulated atomic UI components
- `src/pages/` — Main page wrappers

### Step 6: Start the Development Server
With all modules installed, run the development server command:

```bash
# Using npm
npm run dev

# Or using Bun
bun dev
```

The terminal will display a local address (usually `http://localhost:3000` or `http://localhost:5173`). Open this URL in your web browser to view, interact, and develop the platform locally.

---

## Scripts & Development

Inside `package.json`, the following scripts are available to assist development:

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `npm run dev` | `vite --port=3000 --host=0.0.0.0` | Boots up the local Vite HMR server on port 3000. |
| `npm run build` | `vite build` | Compiles source files into optimized, production-ready static assets in `/dist`. |
| `npm run preview`| `vite preview` | Previews the compiled production build locally for deployment validation. |
| `npm run lint` | `tsc --noEmit` | Executes TypeScript compiler checks without compiling. |
| `npm run clean` | `rm -rf dist` | Cleans previous build artifacts. |

---

## Step-by-Step Professional Git Commit Blueprint

As an elite developer, you want a clean, logical, and incremental commit history that clearly shows how the codebase evolved from a blank page to a feature-rich, beautiful web application. 

Follow this exact sequence of `git commit` checkpoints to build up your repository step-by-step:

### Phase 1: Environment & Layout Foundations

#### Commit 1: Project Initialization
Set up the compiler configurations, build pipes, and dependency declarations.
```bash
git add package.json tsconfig.json vite.config.ts .gitignore index.html
git commit -m "chore: initial project bootstrap with vite, react 19, tailwind css v4, and typescript"
```

#### Commit 2: Global Styles and Color System
Configure standard fonts (Inter, Space Grotesk) and set up CSS base styles.
```bash
git add src/index.css
git commit -m "style: configure global typography, high-contrast light theme variables, and tailwind imports"
```

#### Commit 3: Core Route Assembly
Define shared interfaces, core routers, and layout structures.
```bash
git add src/types.ts src/App.tsx src/main.tsx
git commit -m "feat: establish application routing structure, typescript types, and app shell layout"
```

---

### Phase 2: Atomic and Common Components

#### Commit 4: Atomic UI Elements
Implement highly reusable common components.
```bash
git add src/components/common/Button.tsx src/components/common/Card.tsx src/components/common/Loader.tsx src/components/common/SearchBar.tsx
git commit -m "feat: implement atomic ui components including custom button, card, loader, and searchbar"
```

#### Commit 5: Shell Layout Header & Footer
Add the top navigation and layout footer.
```bash
git add src/components/common/Navbar.tsx src/components/common/Footer.tsx
git commit -m "feat: build responsive navbar with dark mode toggles and site-wide responsive footer"
```

---

### Phase 3: Landings & Dashboard Experiences

#### Commit 6: Hero Showcase Section
Develop the primary landing banner with beautiful typography and key call-to-actions.
```bash
git add src/components/home/HeroSection.tsx
git commit -m "feat: design responsive hero section with primary call-to-actions and clean vectors"
```

#### Commit 7: Feature Highlights Section
Create the visual card deck explaining platform values.
```bash
git add src/components/home/FeaturesSection.tsx
git commit -m "feat: implement homepage feature cards highlighting visual learning benefits"
```

#### Commit 8: Popular Courses Carousel
Create the preview listing card group on the homepage.
```bash
git add src/components/home/CoursesPreview.tsx
git commit -m "feat: implement course preview card grid showcase with direct navigation links"
```

#### Commit 9: Exam Countdowns & Study Goals Widget
Incorporate the dynamic candidate countdown with study planner capabilities.
```bash
git add src/components/home/BoardExamCountdown.tsx
git commit -m "feat: construct board exam countdown component with client-side interactive study goal checklists"
```

#### Commit 10: Parent & Student Testimonials
Present client feedback beautifully.
```bash
git add src/components/home/Testimonials.tsx
git commit -m "feat: create responsive testimonials section with star ratings and feedback cards"
```

#### Commit 11: Main Landing Assembly
Pull all homepage segments together into the centralized view.
```bash
git add src/pages/Home.tsx
git commit -m "feat: assemble modular sections into fully unified interactive home view with integrated FAQ segment"
```

---

### Phase 4: Core Educational Portals

#### Commit 12: Curriculum Library & Catalog
Create the full curriculum exploration library and single course view.
```bash
git add src/pages/Courses.tsx src/pages/CourseDetails.tsx src/components/course/
git commit -m "feat: implement full course catalog directory with curriculum tabs and mock lesson video panels"
```

#### Commit 13: Live Interactive Class Tracker
Add scheduling tables and direct virtual joining flags.
```bash
git add src/pages/LiveClass.tsx
git commit -m "feat: construct live class schedule catalog tracking upcoming lectures and live chat rooms"
```

#### Commit 14: Automated Evaluation Practice Portal
Add interactive multiple-choice quiz engine with dynamic feedback and review loops.
```bash
git add src/pages/Quiz.tsx src/components/quiz/
git commit -m "feat: build interactive exam quiz player supporting live timers, instant scoring, and answers analysis"
```

#### Commit 15: Student Discussion Board
Assemble community posting forum, search queries, and thread solutions.
```bash
git add src/pages/Forum.tsx
git commit -m "feat: build student community forum supporting thread creation, content filtration, and replies voting"
```

---

### Phase 5: Auth, Security, Management & Final UX

#### Commit 16: Account Security Portal
Create standard email authorization interfaces.
```bash
git add src/pages/Login.tsx src/pages/Register.tsx
git commit -m "feat: implement user authentication interface including signup validation and security portals"
```

#### Commit 17: User Analytics Portal
Enable achievement boards, progress trackers, and metrics graphs.
```bash
git add src/pages/Profile.tsx src/pages/Dashboard.tsx src/components/dashboard/
git commit -m "feat: create student profile view and analytics dashboard tracking study accomplishments"
```

#### Commit 18: Admin Operations Desk
Integrate content curation dashboards, course registration forms, and database summaries.
```bash
git add src/pages/admin/ src/components/admin/
git commit -m "feat: design administrative workspace for user directory administration and course authoring"
```

#### Commit 19: Support and Informative Pages
Create static support pages.
```bash
git add src/pages/About.tsx src/pages/Contact.tsx src/pages/FAQ.tsx src/pages/NotFound.tsx
git commit -m "feat: implement about page, dynamic contact submission form, stand-alone FAQ center, and 404 page"
```

#### Commit 20: Visual Refactoring and Accent Unification
Refactor background gradient texts to highly legible flat theme accents and unified borders.
```bash
git add src/components/common/Navbar.tsx src/components/common/Footer.tsx src/components/home/HeroSection.tsx src/components/home/FeaturesSection.tsx src/components/home/CoursesPreview.tsx src/components/home/Testimonials.tsx src/components/home/BoardExamCountdown.tsx src/pages/Home.tsx src/pages/About.tsx src/pages/Pricing.tsx src/pages/Contact.tsx src/pages/FAQ.tsx src/pages/Blog.tsx src/pages/Login.tsx src/pages/Register.tsx src/pages/Courses.tsx src/pages/CourseDetails.tsx src/pages/LiveClass.tsx src/pages/Forum.tsx src/pages/Profile.tsx src/pages/admin/AdminDashboard.tsx
git commit -m "refactor: unify theme styling by removing distracting text gradients, adopting flat high-contrast accents, and standardizing containers"
```

#### Commit 21: Added Project Documentation
Write detailed instructions to allow developers to build up, run, and understand the repository.
```bash
git add README.md
git commit -m "docs: deliver comprehensive readme documentation detailing local environment configurations and development steps"
```

---

## Project Directory Tree

The structured source map of this application is as follows:

```text
├── package.json               # Application metadata and dependency config
├── tsconfig.json              # TypeScript compilation rules
├── vite.config.ts             # Vite server and build config
├── index.html                 # DOM mounting shell
├── .gitignore                 # Files excluded from git
├── README.md                  # Comprehensive platform documentation
└── src/
    ├── main.tsx               # Bootstrap configuration entrypoint
    ├── App.tsx                # Central router, layout framework & state
    ├── index.css              # Main tailwind theme styling and fonts import
    ├── types.ts               # Global TypeScript definitions
    ├── components/            # Modulated atomic component assets
    │   ├── common/            # Reusable core elements (Navbar, Footer, Button, Card)
    │   ├── home/              # Homepage components (Hero, Features, Testimonials, countdown)
    │   ├── course/            # Course outline trackers
    │   ├── quiz/              # Evaluation portal widgets
    │   ├── dashboard/         # Progress graph containers
    │   └── admin/             # Manage user panel items
    └── pages/                 # Full screen layout portals
        ├── Home.tsx           # Main Landing Page
        ├── Courses.tsx        # Courses catalog directory
        ├── CourseDetails.tsx  # Curriculum and class outline detail page
        ├── Quiz.tsx           # Practice MCQ portal
        ├── Forum.tsx          # Educational community thread portal
        ├── LiveClass.tsx      # Video lecture schedules
        ├── Login.tsx          # Login interface
        ├── Register.tsx       # Enrollment setup
        ├── Profile.tsx        # User accomplishments and account details
        ├── Dashboard.tsx      # Performance metrics summaries
        ├── About.tsx          # Organization and mission outline
        ├── Pricing.tsx        # Educational plans directory
        ├── Contact.tsx        # Inquiries support terminal
        ├── FAQ.tsx            # Standalone FAQ page
        ├── Blog.tsx           # Announcements notices feed
        ├── NotFound.tsx       # 404 Route placeholder
        └── admin/             # Management pages (AdminDashboard, AdminCourses, etc.)
```