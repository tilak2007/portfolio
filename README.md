# Vinayaka Tilak PS — 3D Interactive Portfolio

A luxury, high-performance **Black and Crimson Red 3D Interactive Portfolio** engineered for **Vinayaka Tilak PS**, B.Tech in Artificial Intelligence and Data Science (AI & DS) student at **Sanjay Ghodawat University**, with a dedicated specialization in **Data Analytics**.

> *"Exploring Data, Building Intelligence, Creating Impact."*

---

## 🎨 Premium Black & Red 3D Aesthetic

- **Color Architecture**:
  - **Primary Background**: Pure Black (`#050505`) with deep obsidian undertones
  - **Secondary Background**: Surface Charcoal (`#0A0A0A`)
  - **Primary Accent**: Crimson Red (`#DC2626`)
  - **Secondary Accent**: Deep Red (`#991B1B` / `#7F1D1D`)
  - **Typography**: Pure White (`#FFFFFF`) with Soft Gray (`#A1A1AA`) for hierarchy
  - **Subtle Glow**: Carefully calibrated radial crimson lighting (`#EF4444`, `rgba(220, 38, 38, 0.15)`) with zero cartoonish or neon excess

- **3D Interactive Experience (Three.js & WebGL)**:
  - **Central 3D Data Nucleus**: Multi-layered rotating 3D geodesic icosahedron with glowing red vertex nodes and an inner pulsating data core.
  - **Floating 3D Geometric Objects**: Dark metallic octahedrons, tetrahedrons, and icosahedrons with ruby-red wireframe edges floating with sine-wave physics.
  - **Subtle Crimson Particle Cloud**: Procedurally generated soft red glowing particle swarm drifting in 3D perspective depth.
  - **Mouse Parallax & Orbit Interaction**: Dynamic camera displacement tracking pointer movement, with drag-to-orbit inspection.
  - **Continuous 3D Ambient Background**: Lightweight fixed WebGL background canvas providing continuous spatial depth that reacts to page scrolling.
  - **3D Tilt Project & Skill Cards (`Card3D`)**: Hardware-accelerated CSS 3D transforms with perspective, cursor-tracking specular glare, and layered Z-depth.
  - **Cinematic Desktop Cursor Spotlight**: Smooth radial crimson light follower for desktop pointing devices.

- **Sections & Analytical Capabilities Preserved**:
  1. **Hero**: Headline, live status beacon, specialization tags, and interactive 3D WebGL viewport.
  2. **About Me**: Academic narrative, core philosophy, and 3D profile facts card.
  3. **Technical Arsenal**: 10 skills categorized across Programming, Data Analytics, Computer Science, and Tools with explicit proficiency indicators (*Proficient* vs. *Developing*).
  4. **Featured Projects**: Real data analysis & full-stack platforms including live production (*FieldAssist*), customer churn analysis, e-commerce intelligence, housing market regression, and SQL query suite.
  5. **Analytical Code Workbench**: Interactive macOS-styled terminal with copyable SQL window CTEs, vectorized Pandas cleaning pipelines, and ACID-compliant relational schemas.
  6. **Academic Foundation**: B.Tech AI & ML curriculum, coursework, and specialization focus at Sanjay Ghodawat University.
  7. **Certifications & Milestones**: Structured credential pathway across SQL, Python, DBMS, and Machine Learning.
  8. **Contact & Social Suite**: Validated inquiry form with crimson celebration confetti, direct email copy, and social profile links.
  9. **Printable CV Modal**: Dedicated `@media print` styling for high-contrast PDF/A4 printing.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **3D Graphics**: Three.js (Optimized WebGL with dynamic canvas texturing & IntersectionObserver)
- **Styling**: Tailwind CSS 3 (Custom black & crimson theme, custom 3D utilities)
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Celebration Effects**: canvas-confetti
- **Build Tool**: Vite 5

---

## 🚀 Development & Build

```bash
# Install dependencies
npm install

# Run Vite dev server
npm run dev

# Compile TypeScript and build production bundle
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```text
vinayaka-portfolio/
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── Hero3DScene.tsx         # Interactive Three.js 3D Sphere & Floating Geometries
│   │   │   ├── Background3DCanvas.tsx  # Continuous 3D Ambient Starfield & Grid
│   │   │   └── Card3D.tsx              # Reusable 3D Tilt Card with Specular Glare
│   │   ├── CursorGlow.tsx              # Interactive Desktop Crimson Spotlight
│   │   ├── Navbar.tsx                  # Fixed Glass Navigation with Monogram
│   │   ├── Hero.tsx                    # Flagship Hero with 3D Viewport
│   │   ├── About.tsx                   # Narrative & 3D Profile Quick Facts
│   │   ├── Skills.tsx                  # 3D Tilt Technical Arsenal
│   │   ├── Projects.tsx                # 3D Tilt Featured Projects Grid
│   │   ├── ProjectModal.tsx            # Architectural Pipeline Dossier
│   │   ├── AnalyticsShowcase.tsx       # SQL & Python Code Workbench
│   │   ├── Education.tsx               # Academic Roadmap & Timeline
│   │   ├── Certifications.tsx          # Credentials & Milestones
│   │   ├── Contact.tsx                 # Interactive Contact Form & Socials
│   │   ├── Footer.tsx                  # Navigation, Monogram & Back-to-Top
│   │   └── ResumeModal.tsx             # Printable Curriculum Vitae Modal
│   ├── context/
│   │   └── ToastContext.tsx            # Glass Toast Notifications
│   ├── data/
│   │   └── portfolioData.ts            # Centralized Content & Configuration
│   ├── types/
│   │   └── index.ts                    # TypeScript Definitions
│   ├── App.tsx                         # Main Application Container
│   ├── index.css                       # Tailwind & 3D CSS Layers
│   └── main.tsx                        # React DOM Entrypoint
├── index.html                          # HTML Template & Google Fonts
├── tailwind.config.js                  # Black & Crimson Red Design System
├── tsconfig.json                       # TypeScript Configuration
└── vite.config.ts                      # Rollup Chunking & Build Configuration
```

---

© Vinayaka Tilak PS. Engineered with precision.
