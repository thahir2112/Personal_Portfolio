<div align="center">

# ⚡ MOHAMED THAHIR S (THAHIR)
### Cinematic & Editorial Personal Brand Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2.15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-F5C518?style=for-the-badge)](LICENSE)

<p align="center">
  <b>Full Stack Developer | Data Analytics Enthusiast | Cloud Security Learner</b><br>
  Coimbatore, Tamil Nadu, India • <a href="mailto:thahirmohamed212@gmail.com">thahirmohamed212@gmail.com</a>
</p>

[Explore Live Demo](#-getting-started) • [Report Bug](https://github.com/thahir2112/Personal_Portfolio/issues) • [Request Feature](https://github.com/thahir2112/Personal_Portfolio/issues)

</div>

---

## 🌟 Overview

A production-ready personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It combines an Apple-style product showcase with an Awwwards-level developer portfolio experience.

### 🎨 Visual Identity
- **Base Background**: Deep Charcoal (`#0A0A0A`) with subtle film grain texture.
- **Warm Hero Lighting**: `#C9BFA8` to `#8A8168` with ambient warm glow (`#1A1508`).
- **Primary Accent**: High-Contrast Mustard Gold (`#F5C518`) & Warm Amber (`#FFB800`).
- **Typography**: Inter & JetBrains Mono with clamp-based responsive sizing.

---

## ✨ Key Features

- 🎭 **3-Beat Sticky Hero Scroll Narrative**:
  - **Beat 1**: Giant background `"THAHIR"` typography (~15% opacity), portrait layer, headline, and interactive skill pills.
  - **Beat 2**: Smooth horizontal drift, portrait parallax, and career objective callout.
  - **Beat 3**: Warm taupe background transitions seamlessly into `#0A0A0A`.
- 🖼️ **2.5D Parallax Portrait Layer**: Interactive mouse-tilt on desktop with warm rim glow and graceful silhouette fallback.
- 🛠️ **Categorized Technical Toolchain**: Searchable and filterable skill grid across *Programming*, *Data & DBs*, *Analytics & BI*, *Platforms & Tools*, and *Knowledge Areas*.
- 📊 **Featured Project Showcase**: E-Commerce Sales Analytics Platform with an interactive toggle between live KPI dashboard mockups and an end-to-end ETL pipeline diagram.
- 💼 **Experience Timeline**: ServiceNow Virtual Internship (Feb 2026 – Apr 2026) case study detailing Agentic AI, Flow Automation, ATF, ITSM, and Analytics.
- 📜 **Official Certifications**: Interactive cards for 7 industry-verified certifications (Coursera, NVIDIA, Deloitte, HP LIFE, TCS iON, AWS, NPTEL).
- 📬 **Frictionless Contact Section**: One-click email and phone copy with feedback toasts, direct `mailto:`, and resume download handler (`/Mohamed-Thahir-S_Resume.pdf`).
- ⚡ **Performance & Accessibility**: 100% responsive, semantic HTML5 landmarks, keyboard navigation (`focus-visible`), and `prefers-reduced-motion` support.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS & Vanilla CSS Variables |
| **Animations** | Framer Motion (Scroll transforms, Spring physics, Staggered reveals) |
| **Icons** | Lucide React |
| **Font** | Inter & JetBrains Mono |

---

## 📁 Repository Structure

```
├── app/
│   ├── globals.css          # Design tokens, grain overlay, selection styles
│   ├── layout.tsx           # SEO metadata, OpenGraph, Web font links
│   └── page.tsx             # Root page coordinating all sections
├── components/
│   ├── ScrollProgress.tsx   # Top mustard scroll progress indicator
│   ├── Navbar.tsx           # Glassmorphism navbar with active tracker & mobile drawer
│   ├── Hero.tsx             # 300vh scroll storytelling hero with giant name & portrait
│   ├── ParallaxPortrait.tsx # 2.5D mouse-tilt portrait layer
│   ├── About.tsx            # Philosophy, principles, education & languages
│   ├── Skills.tsx           # Categorized interactive technical toolchain & search
│   ├── Projects.tsx         # Selected work showcase with ETL architecture & dashboard KPIs
│   ├── Experience.tsx       # ServiceNow internship case study
│   ├── Certifications.tsx   # Verified credentials grid
│   ├── Contact.tsx          # Direct contact cards, copy actions, and social links
│   ├── Footer.tsx           # Monogram & dynamic copyright year
│   ├── MagneticButton.tsx   # Spring hover physics button for desktop
│   └── Reveal.tsx           # Staggered viewport blur/slide transitions
├── data/
│   └── portfolio.ts         # Strongly-typed source of truth for all content
├── public/
│   ├── images/
│   │   └── thahir-portrait.png
│   └── Mohamed-Thahir-S_Resume.pdf
├── tailwind.config.js       # Custom colors, clamps, and typography tokens
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Scripts and dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.17+ or v20.x recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thahir2112/Personal_Portfolio.git
   cd Personal_Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
# Build optimized static bundle
npm run build

# Start production server
npm run start
```

---

## ⚙️ Customization

All portfolio content is separated from the UI logic and managed in [`data/portfolio.ts`](data/portfolio.ts):

- **Update Profile Links**: Modify `socialLinks` (LinkedIn, GitHub, LeetCode) in `data/portfolio.ts`.
- **Change Portrait Photo**: Replace `public/images/thahir-portrait.png`.
- **Update Resume**: Replace `public/Mohamed-Thahir-S_Resume.pdf`.

---

## 🌐 Deployment

### Deploy to Vercel
The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fthahir2112%2FPersonal_Portfolio)

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. Vercel automatically detects Next.js and builds the project with zero extra configuration.

---

## 👤 Author

**Mohamed Thahir S**
- **GitHub**: [@thahir2112](https://github.com/thahir2112)
- **Email**: [thahirmohamed212@gmail.com](mailto:thahirmohamed212@gmail.com)
- **Phone**: +91-9944606256
- **Location**: Coimbatore, Tamil Nadu, India

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
