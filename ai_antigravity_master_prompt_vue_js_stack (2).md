# SecurifyMe - Vue 3 + Vite Web Application Development Prompt

## System Context & Persona

Act as a Senior Frontend Developer and Cybersecurity Specialist. Your task is to build a complete, production-ready, highly interactive Single Page Application (SPA) named **"SecurifyMe"** using **Vue 3**, **Vite**, **Tailwind CSS**, and **Node.js/npm** ecosystem.

## Technical Stack & Dependencies

* **Framework:** Vue 3 (Composition API using `<script setup>` syntax)
* **Build Tool:** Vite
* **Package Manager:** npm
* **Styling:** Tailwind CSS (configured via PostCSS)
* **Icons:** `lucide-vue-next` or FontAwesome
* **Libraries:** `canvas-confetti` (for score completion celebration)

## Expected Directory Structure

Please generate the necessary files to build a standard Vite + Vue 3 project structure:

```text
securifyme/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── index.html
└── src/
    ├── main.js
    ├── App.vue
    ├── style.css
    ├── components/
    │   ├── HeaderGauge.vue
    │   ├── PlatformSelector.vue
    │   ├── SecurityChecklist.vue
    │   ├── ChecklistItem.vue
    │   └── ExportReportModal.vue
    └── data/
        └── platformsData.js
```

## Design System & Theme

* **Theme:** Modern Dark Cyber-Security Aesthetic.
* **Color Palette:**
  * Background: Slate 900 (`#0f172a`)
  * Cards / Containers: Slate 800 (`#1e293b`) with Glassmorphism border (`border-slate-700/50`)
  * Primary Accent: Cyber Cyan (`#00e5ff`)
  * Secondary Accent: Emerald Green (`#10b981`)
  * Danger / High Risk: Rose 500 (`#f43f5e`)
  * Warning / Medium Risk: Amber 500 (`#f59e0b`)
* **Layout:** Fully responsive, mobile-first design with smooth element transitions.

## Key Functional Components & Requirements

### 1. `HeaderGauge.vue`
* Renders a dynamic SVG circular progress gauge representing the overall **Security Score (0% to 100%)**.
* Dynamic computed color:
  * **0% - 49%:** Red (`#f43f5e`)
  * **50% - 79%:** Amber (`#f59e0b`)
  * **80% - 100%:** Green/Cyan (`#10b981`)
* Triggers a `canvas-confetti` celebration when the user reaches a 100% security score.

### 2. `PlatformSelector.vue`
* Tab-switching interface between major social media platforms:
  * Facebook, Instagram, Google, TikTok, X (Twitter)
* Displays completion badges for each tab (e.g., "3/3 Completed").

### 3. `SecurityChecklist.vue` & `ChecklistItem.vue`
* Renders actionable security checklist items provided from `platformsData.js`.
* Each item contains:
  * Reactive Checkbox (updates reactive global score)
  * Title & Description
  * Severity Badge (`Critical`, `Medium`, `Low`)
  * Category Tag (`2FA / Auth`, `Privacy & Exposure`, `App Permissions`)
  * Expandable "How to Fix" accordion displaying step-by-step instructions.

### 4. Vue Reactivity & Persistent Storage (`App.vue`)
* **LocalStorage Integration:** Uses Vue `watch` or `onMounted`/`watchEffect` to persist checked item states in `localStorage`.
* **Reset Progress:** Action with confirmation dialog to clear all checks.
* **Export Security Report:** Launches `ExportReportModal.vue` summarizing all completed security steps with a printable view (`window.print()`).

## Output & Setup Guide

Generate all necessary file contents (`package.json`, Vue components, data files, and configuration files). Include a brief `README.md` with instructions on how to install and run the project locally using:

1. `npm install`
2. `npm run dev`