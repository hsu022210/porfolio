# AlecHsu Portfolio

[![Vite](https://img.shields.io/badge/Vite-4.0+-purple?logo=vite&logoColor=white)](https://vitejs.dev/) [![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript) ](https://www.typescriptlang.org/) [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features a clean design, smooth animations, dark mode, and a modular component structure using shadcn/ui and Radix UI.

---

## ✨ Features

- **Modern UI**: Clean, professional design with gradient accents
- **Responsive**: Fully responsive for all devices
- **Dark Mode**: Toggle and system preference support
- **Smooth Animations**: Powered by [motion](https://motion.dev/)
- **shadcn/ui & Radix UI**: Accessible, customizable UI components
- **Contact & Social Links**: Easily connect via email, LinkedIn, or GitHub
- **Performance**: Fast builds and hot reload with Vite
- **TypeScript**: Type-safe codebase

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/), [react-icons](https://react-icons.github.io/react-icons/)
- **Animation**: [motion](https://motion.dev/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### Installation

```bash
git clone https://github.com/hsu022210/porfolio.git
cd porfolio
npm install
```

### Development

```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```
The output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
src/
  components/         # Main React components
    ui/               # shadcn/ui & Radix UI components
    Navbar.tsx        # Navigation bar with theme toggle
    Hero.tsx          # Hero/landing section
    About.tsx         # About me section
    Experience.tsx    # Work experience
    Education.tsx     # Education background
    Skills.tsx        # Technical skills
    Projects.tsx      # Project showcase
    Contact.tsx       # Contact info
    Footer.tsx        # Footer
    ThemeToggle.tsx   # Theme toggle button
    theme-provider.tsx# Theme context provider
  hooks/              # Custom React hooks
    use-animations.ts # Animation utilities
    use-theme.ts      # Theme context hook
  lib/                # Utility libraries
    skill-icon-map.tsx# Skill icon mapping
    theme-context.tsx # Theme context
    utils.ts          # General utilities
  assets/             # Static assets (images, SVGs)
  App.tsx             # Main app component
  main.tsx            # Entry point
  index.css           # Global styles
```

---

## 🎨 Customization

- **Personal Info**: Update your details in `Hero.tsx`, `About.tsx`, `Experience.tsx`, `Education.tsx`, `Skills.tsx`, `Projects.tsx`, and `Contact.tsx`.
- **Theme**: Edit theme settings in `theme-provider.tsx` and Tailwind config.
- **Colors & Styles**: Adjust Tailwind config (`tailwind.config.js`) for custom colors, fonts, etc.
- **Assets**: Replace images in `src/assets/` as needed.

---

## 📞 Contact

- **Email**: alechsu83@gmail.com
- **LinkedIn**: [AlecHsu](https://www.linkedin.com/in/alechsu83/)
- **GitHub**: [hsu022210](https://github.com/hsu022210)


