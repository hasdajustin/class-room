# Classroom — Online Learning Platform

Classroom is a modern, responsive, and highly interactive online learning platform designed specifically to empower students from Class 6 to Class 12 across Bangladesh. Built with **React**, **Vite**, **Tailwind CSS v4**, **TypeScript**, and **Framer Motion**, it offers localized, board-specific academic curriculum preparation, dynamic countdowns, customizable study goals, interactive practice quizzes, a live-class scheduler, and a collaborative student discussion forum.

This guide provides comprehensive, step-by-step instructions to copy, run, and develop this project locally.

---

## Table of Contents
1. [Core Features](#core-features)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Local Setup Guide](#local-setup-guide)
5. [Scripts & Development](#scripts--development)
6. [Project Directory Tree](#project-directory-tree)

---

## Core Features

- **Personalized Home Experience**: Features a hero section, feature highlights, and real-time interactive exam countdowns tailored for HSC/SSC/JSC candidates.
- **Dynamic Board Exam Countdown & Study Goals**: An integrated study planning widget to track exam timing and set custom, checkable goals.
- **Comprehensive Course Directories**: Filterable board exam prep materials with curriculum syllabus mapping, lecture video tabs, and reference materials.
- **Interactive Quiz Engine**: Practice multiple-choice questions (MCQs) with instant grade reporting and timed challenges.
- **Collaborative Discussion Forum**: A platform to create threads, post solutions, and upvote community inquiries.
- **Interactive Live Class Scheduler**: Real-time scheduled live classes with interactive joining flags.
- **Student & Admin Portals**: Dedicated dashboards for learning progress visualization and administrative course management.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Charts/Analytics**: [Recharts](https://recharts.org/)
- **Router**: [React Router DOM v7](https://reactrouter.com/)

---

## Prerequisites

Before setting up the project locally, ensure you have the following installed:

1. **Node.js**: Version `18.x` or higher (Recommended: `20.x` LTS). Download from [nodejs.org](https://nodejs.org/).
2. **Package Manager**: `npm` (bundled with Node), `yarn`, or `bun`.

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

### Project Directory Tree
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types.ts
    ├── components/
    │   ├── common/
    │   ├── home/
    │   ├── course/
    │   ├── quiz/
    │   ├── dashboard/
    │   └── admin/
    └── pages/
        ├── Home.tsx
        ├── Courses.tsx
        ├── CourseDetails.tsx
        ├── Quiz.tsx
        ├── Forum.tsx
        ├── LiveClass.tsx
        ├── Login.tsx
        ├── Register.tsx
        ├── Profile.tsx
        ├── Dashboard.tsx
        └── admin/
