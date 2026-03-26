# Roshan Tom Robinson - Portfolio Architecture

> **Development Note**: I built the baseline architecture, core logic, and the vast majority of this website by hand. Advanced AI assistants (Google Gemini) were used collaboratively strictly to maximize efficiency, accelerate styling iterations for the bento-grid, and assist with rapid debugging.

## 1. Project Overview
**Name**: `roshan-portfolio`
**Description**: A professional developer portfolio showcasing my transition into Computer Engineering, emphasizing AI hardware and high-performance networking. It features a responsive Bento Box dashboard layout wrapped in a premium "Internet Summer" Poolsuite-inspired aesthetic with state-based theming.
**Version**: 2.5.0 (Bento Redesign & Theming)

## 2. Tech Stack Setup
- **React 18**: UI Library & Component Architecture
- **TypeScript**: Type safety for robust component props
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS styling leveraging custom grid layouts
- **Lucide React**: Clean vector icon suite
- **React Router DOM**: Client-side routing
- **TanStack Query & Helmet Async**: Utility state and SEO config

## 3. Project Structure
```
Portfolio-Main/
├── public/                  # Static assets & dynamic SVG favicons
├── src/
│   ├── components/
│   │   ├── BentoCard.tsx    # Reusable grid tiles spanning dynamic columns
│   │   ├── ThemeProvider.tsx# Context state manager for dynamic themes
│   │   ├── Navigation.tsx   # Top Navigation bar
│   │   ├── ProjectCard.tsx  # Interactive project components
│   │   ├── SEO.tsx          # Dynamic SEO wrappers
│   │   └── SkillBadge.tsx   # Retro skill indicator tag
│   ├── pages/               
│   │   ├── Home.tsx         # Bento Grid Dashboard
│   │   ├── About.tsx        # Bio & Engineeering Profile
│   │   ├── Contact.tsx      # Socials & Email routing
│   │   ├── Projects.tsx     # Extended Works
│   │   └── Skills.tsx       # Hardware, Python, Infrastructure logic 
│   ├── App.tsx              # Application entry integrating Context
│   └── index.css            # Custom CSS vars & Theme overrides
├── README.md                # Markdown showcase
├── GEMINI.md                # Project documentation (this file)
└── tailwind.config.ts       # Poolsuite variable mapping config
```

## 4. Design System Architecture

### Theming System
The site features dynamic theme syncing through `ThemeProvider.tsx`, manipulating core CSS variables within `index.css`:
- **Vintage**: Warm cream base with classic Forest Green accents.
- **Midnight**: Cyberpunk aesthetics mapping high-contrast teal and neon against heavily muted dark containers.
- **Deep Sea**: Muted navy/purple background (Default active layout).
- **Bubblegum**: High saturation pink and bright sky-blue accents.

### Layout Mechanics
- **Bento Grid**: Instead of free-floating divs, the main interactions are strictly confined to structured `BentoCard` tiles operating on a responsive `md:grid-cols-3` scaling logic.
- **Favicon Synchronization**: The active tab favicon dynamically renders an inline SVG mapped precisely to the active tailwind theme `--primary` HSL variables ensuring the UX persists outside the immediate DOM.

## 5. Architectural Shifts 

### Home Layout Refactor
The `Home.tsx` file has evolved from an open desktop layout into a consolidated command dashboard format featuring:
- High-level bio and profile linkage.
- `Theme_Config.sys`: Replaced the legacy stateless global click-counter to inject our context-aware React themes.
- Real-time `Terminal_Log` mimicking live github actions.
- Notebook IDE placeholders indicating pipeline scaling.

### Content Migration
- **Skills Redesign**: Shifted focus away from generic frontend web frameworks to spotlight low-level networking, Kubernetes, CUDA processing arrays, and Python-focused ML ops structure.
- **Background Integrity**: Refactored static backgrounds (`bg-[#fdfbf7]`, `bg-white`) into dynamic tailwind states (`bg-card`, `bg-background`) globally enabling seamless switching across light and dark palettes without text blending or shadow disappearance. 

All future AI modifications must adhere strictly to preserving the bento grid stability and CSS variable integrations specified within `index.css` and `tailwind.config.ts`.
