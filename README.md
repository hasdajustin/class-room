# Classroom — Online Learning Platform

Classroom is a modern, responsive, and highly interactive online learning platform designed specifically to empower students from Class 6 to Class 12 across Bangladesh. Built with **React**, **Vite**, **Tailwind CSS v4**, **TypeScript**, and **Framer Motion**, it offers localized, board-specific academic curriculum preparation, dynamic countdowns, customizable study goals, interactive practice quizzes, a live-class scheduler, and a collaborative student discussion forum.

**Explore the live platform:** [https://class-room-omega.vercel.app/](https://class-room-omega.vercel.app/)

## Core Features

- **Personalized Home Experience**: Hero section, feature highlights, and real-time interactive exam countdowns tailored for HSC/SSC/JSC candidates.
- **Dynamic Board Exam Countdown & Study Goals**: Integrated study planning widget to track exam dates and set custom study goals.
- **Comprehensive Course Directories**: Filterable curriculum-mapped course materials with lecture video tabs and reference PDFs.
- **Interactive Quiz Engine**: Practice multiple-choice questions (MCQs) with instant grading, feedback, and explanation systems.
- **Collaborative Discussion Forum**: Community-driven space for students to ask questions, post solutions, and upvote helpful answers.
- **Live Class Scheduler**: Real-time management of upcoming virtual lectures with integrated "Join Now" indicators.
- **Student & Admin Portals**: Dedicated dashboards for student progress tracking and administrative course/user management.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Router**: [React Router DOM v7](https://reactrouter.com/)

---

## Prerequisites

Before setting up the project locally, ensure you have the following installed:

1. **Node.js**: Version `18.x` or higher (Recommended: `20.x` LTS). Download from [nodejs.org](https://nodejs.org/).
2. **Package Manager**: `npm`, `yarn`, or `bun`.

---

## Local Setup Guide

Follow these steps to run Classroom on your local development machine:

### Step 1: Create the Project Folder
Open your terminal and run:
```bash
mkdir class-room
cd class-room
```
### Step 2: Configure Project Files
Ensure the following essential root files are present:
1.package.json: Dependencies and project scripts.
2.tsconfig.json: TypeScript configuration.
3.vite.config.ts: Vite, Tailwind, and React configuration.
4.index.html: The main entry point for the application.

### Step 3: Install Dependencies
Run the installation command in your terminal:
```bash
# Using npm
npm install

# Or using Bun
bun install
```

### Step 4: Add Source Code
Ensure the src/ directory is placed in your project root with the following structure:
1. src/main.tsx — App entry point
2. src/App.tsx — Routing and layout shell
3. src/index.css — Tailwind styles
4. src/components/ — Atomic UI components
5. src/pages/ — Main view pages

### Step 5: Start the Development Server
Run the following command:
```bash
# Using npm
npm run dev

# Or using Bun
bun dev
```
Open http://localhost:3000 (or the address shown in your terminal) in your browser.
