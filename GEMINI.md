# Roshan Tom Robinson - Portfolio Website

## 1. Project Overview
**Name**: `roshan-portfolio`
**Description**: A professional developer portfolio with a distinctive "Internet Summer" / Retro Macintosh aesthetic inspired by Poolsuite. It combines nostalgic design elements (window-style containers, pixel fonts, grain overlays) with modern web technologies to showcase projects and skills.
**Version**: 2.0.0 (Redesign)
**License**: © 2024 Roshan Tom Robinson

## 2. Tech Stack

### Core Framework & Language
- **React 18**: UI Library
- **TypeScript**: Type safety and developer experience
- **Vite**: Build tool and development server

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework
- **Tailwind CSS Animate**: Animation utilities
- **Radix UI**: Headless UI primitives (Slot, etc.)
- **Lucide React**: Icon library
- **Class Variance Authority (CVA)**: Component variant management
- **clsx & tailwind-merge**: Class name utility helpers

### Routing & State
- **React Router DOM**: Client-side routing
- **TanStack Query**: Data fetching and state management (setup available)
- **React Helmet Async**: SEO and meta tag management

## 3. Project Structure

```
Portfolio-Main/
├── .agent/                  # Agent workflows
├── public/                  # Static assets
│   ├── images/              # Project images
│   ├── resume/              # Resume PDF
│   ├── favicon.ico          # Favicon
│   ├── robots.txt           # SEO robots file
│   ├── sitemap.xml          # SEO sitemap
│   └── site.webmanifest     # PWA manifest
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Shadcn/UI base components (Button, Badge, etc.)
│   │   ├── Navigation.tsx   # Top "Menu Bar" navigation
│   │   ├── ProjectCard.tsx  # "Application Window" style project card
│   │   ├── SEO.tsx          # Meta tag wrapper component
│   │   └── SkillBadge.tsx   # Retro tag style skill badge
│   ├── hooks/               # Custom React hooks
│   │   └── use-toast.ts     # Toast notification hook
│   ├── lib/                 # Utilities and helpers
│   │   ├── placeholderImages.ts # Base64 placeholder images (Retro Palette)
│   │   └── utils.ts         # cn() utility for class merging
│   ├── pages/               # Route components
│   │   ├── About.tsx        # "UserProfile.dat" window style page
│   │   ├── Contact.tsx      # "Comms_Link.exe" window style page
│   │   ├── Home.tsx         # "Desktop" style landing page
│   │   ├── NotFound.tsx     # 404 Error page
│   │   ├── Projects.tsx     # Grid of project windows
│   │   └── Skills.tsx       # Folder-style skills listing
│   ├── App.tsx              # Main app component & Routing
│   ├── index.css            # Global styles, fonts, and retro utilities
│   └── main.tsx             # Application entry point
├── .gitignore               # Git ignore rules
├── GEMINI.md                # Project documentation (this file)
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── README.md                # Project README
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.node.json       # TypeScript node configuration
├── vercel.json              # Vercel deployment config
└── vite.config.ts           # Vite configuration
```

## 4. Key Configuration

### `vite.config.ts`
- **Port**: 8080
- **Plugins**: `@vitejs/plugin-react-swc`
- **Alias**: `@` maps to `./src`

### `tailwind.config.ts`
- **Dark Mode**: Class-based
- **Theme Extension**:
    - **Colors**: Custom Poolsuite-inspired palette (Cream, Forest Green, Sunset Orange).
    - **Font**: `Instrument Serif` (Headings), `Inter` (Body), `Space Mono` (UI).
    - **Shadows**: `retro`, `retro-sm`, `retro-lg` (Hard, non-blurred shadows).
    - **Animations**: `marquee`, `fade-in-up`, `fade-in`, `slide-in`.
- **Content Paths**: Scans `pages`, `components`, `app`, `src`

### `package.json` Scripts
- `dev`: Start Vite dev server
- `build`: Run TypeScript compiler check (`tsc`) then Vite build
- `preview`: Preview production build
- `lint`: Run ESLint

## 5. Design System (Poolsuite Aesthetic)

### Color Palette
- **Background**: Warm Cream (`#f4f1ea` / `hsl(40 30% 94%)`)
- **Primary**: Forest Green (`#2d5a27` / `hsl(113 40% 25%)`)
- **Secondary**: Sunset Orange (`#ff6b4a` / `hsl(11 100% 65%)`)
- **Accent**: Retro Blue (`#4a90e2` / `hsl(212 72% 59%)`)
- **Text**: Almost Black (`#1a1a1a` / `hsl(0 0% 10%)`)

### Typography
- **Headings**: `Instrument Serif` (often italicized for elegance).
- **Body**: `Inter` (clean readability).
- **UI/Code**: `Space Mono` (retro computing feel).

### Visual Elements
- **Windows**: Content contained in bordered boxes with "title bars".
- **Shadows**: Hard, directional shadows (`4px 4px 0px black`) simulating early GUI depth.
- **Grain**: Subtle noise overlay (`.grain-overlay`) for texture.
- **Marquee**: Scrolling text footer for announcements.

## 6. Routing & Navigation

### Routes (`src/App.tsx`)
| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Desktop-style landing page with "Welcome.sys" window |
| `/about` | `About` | "UserProfile.dat" window with bio and resume |
| `/projects` | `Projects` | Grid of "Application Windows" showcasing work |
| `/skills` | `Skills` | Categorized "Folders" of technical skills |
| `/contact` | `Contact` | "Comms_Link.exe" window for contact info |
| `*` | `NotFound` | 404 Catch-all route |

### Navigation (`src/components/Navigation.tsx`)
- **Desktop**: Fixed top "Menu Bar" (File, Edit, View style) with clock.
- **Mobile**: Hamburger menu opening a dropdown list.
- **Style**: Retro OS menu bar, borders, and hover effects.

## 7. Components Detail

### `ProjectCard.tsx`
- **Style**: "Application Window" with title bar controls (minimize, maximize, close).
- **Content**: Image with dither effect simulation, title, description, and tech stack.
- **Actions**: "Run" (Live Preview) and "Source" (GitHub) buttons.

### `SEO.tsx`
- Wraps `react-helmet-async`.
- **Props**: `title`, `description`, `keywords`, `ogImage`, `ogUrl`.
- **Function**: Sets `<title>`, `<meta>` tags for SEO and Open Graph sharing.

### `SkillBadge.tsx`
- **Style**: Retro tag/pill with hard border and hover offset animation.
- **Animation**: Staggered fade-in entrance.

### `ui/button.tsx`
- **Style**: Sharp corners (`rounded-none`), hard borders, and retro shadows.
- **Variants**: Default (Primary), Outline (White), Ghost (Transparent).

## 8. Pages Detail

### `Home.tsx`
- **Layout**: "Desktop" environment.
- **Hero**: Central "Welcome" window.
- **Footer**: Scrolling marquee text.
- **Background**: Dot grid pattern with grain overlay.

### `About.tsx`
- **Layout**: "User Profile" window.
- **Content**: Bio, Resume download, and Services list.
- **Visuals**: "Avatar" placeholder with retro styling.

### `Projects.tsx`
- **Layout**: Grid of `ProjectCard` components.
- **Header**: "Selected Works" with retro typography.

### `Skills.tsx`
- **Layout**: Stack of "Folder" containers for different skill categories.
- **Content**: `SkillBadge` grid within each category.

### `Contact.tsx`
- **Layout**: "Communications" window.
- **Content**: Contact info cards (Phone, Email, Location) and Social Links grid.

## 9. Utilities

### `src/lib/utils.ts`
- `cn(...inputs)`: Merges Tailwind classes using `clsx` and `tailwind-merge`.

### `src/lib/placeholderImages.ts`
- Exports `placeholderImages` object containing Base64 SVG strings.
- **Update**: Colors updated to match the new Cream/Green/Orange palette.
