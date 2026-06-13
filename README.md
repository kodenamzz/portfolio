<div align="center">
  <br />
    <a href="https://abdkode.vercel.app/" target="_blank">
      <img src="https://i.ibb.co/DMyPtYF/Screenshot-2024-08-12-061844-modified.png" alt="Project Banner" width="800">
    </a>
  <br />
  <br />

  <h1>Modern Portfolio | Senior Full-Stack Engineer</h1>

  <p>
    <b>A high-performance, visually stunning portfolio built with Next.js 16 and React 19.</b>
  </p>

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-React_19-black?logoColor=white&logo=react&color=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/-TypeScript-black?logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Three_JS-black?logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Framer_Motion-black?logoColor=white&logo=framer&color=0055FF" alt="framer" />
    <img src="https://img.shields.io/badge/-i18n-black?logoColor=white&color=FF5F5F" alt="i18n" />
  </div>
</div>

---

## 🚀 About the Project

This repository showcases a professional, production-grade portfolio designed for a **Senior Full-Stack / Backend Engineer**. It moves beyond simple static sites, implementing a modern architecture that prioritizes performance, scalability, and exceptional user experience.

The project leverages the latest features of **React 19** and **Next.js 16 (App Router)**, integrating complex 3D animations and a robust internationalization system to demonstrate high-level technical proficiency.

## ✨ Key Features

- **Advanced 3D & Motion UI:** Integration of `@react-three/fiber` and `framer-motion` for immersive 3D elements (Globe, ThreeD Cards) and smooth transitions.
- **Internationalization (i18n):** Full multi-language support (English & Thai) using `next-intl`, with localized routing and dynamic content loading.
- **Responsive & Accessible:** A mobile-first design philosophy using Tailwind CSS, ensuring a seamless experience across all device tiers.
- **Type-Safe Development:** Strict TypeScript implementation across the entire codebase for enhanced maintainability and fewer runtime errors.
- **Optimized Performance:** Leveraging Next.js Server Components, optimized image loading, and efficient rendering cycles.
- **Dynamic Form Handling:** Secure and validated contact forms using `react-hook-form` and `zod`.
- **Theming:** Full support for Dark/Light modes with persistent state management.

## 🛠 Tech Stack & Architecture

### Frontend & Core
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **State & Routing:** Next.js App Router, next-intl

### Styling & Animation
- **Styling:** Tailwind CSS
- **Components:** Aceternity UI, Radix UI
- **3D/Graphics:** Three.js, React Three Fiber, React Three Drei
- **Animations:** Framer Motion, Lottie

### Backend & Utils
- **API Routes:** Next.js Route Handlers (Email service)
- **Validation:** Zod
- **Mailing:** Nodemailer
- **Icons:** React Icons, Tech Stack Icons

## 📂 Project Structure

```text
├── app/
│   ├── [locale]/           # i18n Root Layout & Main Page
│   └── api/                # Backend API Routes (Email, etc.)
├── components/
│   ├── ui/                 # Reusable High-end UI Components
│   └── ...                 # Section-specific Components (Hero, About, etc.)
├── context/                # React Context Providers (Theme, Nav)
├── data/                   # Centralized Data Storage (Projects, Experiences)
├── i18n/                   # i18n Configuration & Routing
├── messages/               # Translation Files (en.json, th.json)
├── public/                 # Static Assets (Images, Icons)
└── utils/                  # Helper Functions & Utilities
```

## 🛠 Local Development

To get a local copy up and running, follow these simple steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

<div align="center">
  <p>Built with ❤️ by Abdulkode Pohlor</p>
</div>
