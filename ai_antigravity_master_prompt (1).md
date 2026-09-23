# SecurifyMe - Web Application Development Prompt

## System Context & Persona
Act as a Senior Frontend Developer and Cybersecurity Specialist. Your task is to build a fully functional, highly interactive, production-ready single-page web application named **"SecurifyMe"**.

---

## Technical Stack & Constraints
- **Format:** Single-file HTML (`index.html`) containing HTML structure, Tailwind CSS (via CDN), custom JavaScript (ES6+), and embedded assets.
- **Styling:** Tailwind CSS (via CDN) + Custom inline CSS animations/Glassmorphism where needed.
- **Icons & Libraries (via CDN):**
  - FontAwesome 6+ (Icons)
  - Canvas-Confetti JS (`cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js`)

---

## Design & UI Theme
- **Theme:** Modern Dark Cyber-Security Style.
- **Palette:**
  - Background: Slate 900 (`#0f172a`)
  - Cards / Containers: Slate 800 (`#1e293b`) with Glassmorphism border (`border-slate-700/50`)
  - Primary Accent: Cyber Cyan (`#00e5ff`)
  - Secondary Accent: Emerald Green (`#10b981`)
  - Danger / High Risk: Rose 500 (`#f43f5e`)
  - Warning / Medium Risk: Amber 500 (`#f59e0b`)
- **Layout:** Fully responsive, mobile-first design with smooth element transitions.

---

## Key Functional Features & Requirements

### 1. Header & Live Dynamic Security Gauge
- Display a dynamic SVG Circular Progress Gauge representing the overall security score (0% to 100%).
- The score color must update dynamically based on progress:
  - **0% - 49%:** Red (`#f43f5e`)
  - **50% - 79%:** Yellow/Amber (`#f59e0b`)
  - **80% - 100%:** Green/Cyan (`#10b981`)
- Trigger a celebratory **Confetti animation** when the user achieves a 100% security score.

### 2. Platform Selector Tabs
- Interactive filter buttons to toggle checklist views for major social media platforms:
  - Facebook
  - Instagram
  - Google / YouTube
  - TikTok
  - X (Twitter)

### 3. Rich Mock Data Checklist
Provide structured checklist items for each platform. Each item MUST include:
- Checkbox (interactive, updates overall score)
- Action Title
- Severity Badge (`Critical`, `Medium`, `Low`)
- Category Tag (`2FA / Auth`, `Privacy & Exposure`, `App Permissions`)
- **"How to Fix" Expandable Accordion:** Detailed, numbered step-by-step instructions guiding users on where to navigate within the actual app settings.

#### Sample Data Requirements per Platform:
- **Facebook:**
  1. Enable Two-Factor Authentication (2FA) [Critical]
  2. Hide Friend List from Public View [Medium]
  3. Review and Revoke Off-Facebook Activity Tracking [High]
- **Instagram:**
  1. Switch Account to Private (for personal profiles) [Medium]
  2. Turn Off "Activity Status" (Online Indicator) [Low]
  3. Review Connected Third-Party Apps and Websites [High]
- **Google:**
  1. Perform Google Security Checkup & Passkeys Setup [Critical]
  2. Disable Location History & Web Activity Tracking [High]
  3. Turn on Enhanced Safe Browsing [Medium]
- **TikTok:**
  1. Enable 2-Step Verification with Auth App [Critical]
  2. Disable "Suggest your account to others" [Medium]
  3. Set Direct Messages to "Friends Only" [Medium]
- **X (Twitter):**
  1. Enable Two-Factor Authentication (Security Key / App) [Critical]
  2. Protect Your Posts (Private Account) [Medium]
  3. Turn off Personalization and Data Sharing [Low]

### 4. Interactive State & Utilities
- **LocalStorage Integration:** Save checked item IDs automatically so progress persists across browser refreshes.
- **Reset Progress:** A "Reset All" button with a modal confirmation dialog.
- **Export Security Report:** An "Export Report" button that launches a cleanly styled modal summarizing all completed security steps, complete with a `window.print()` call formatted for PDF/Paper printing.
- **Footer Disclaimer:** Include a security notice: *"Client-side processing only. No personal data is stored or transmitted."*

---

## Output Expectation
Deliver a complete, bug-free, beautifully formatted HTML file ready to be saved as `index.html` and opened directly in any browser.
```
eof