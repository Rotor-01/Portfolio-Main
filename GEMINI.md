# Roshan Tom Robinson - Portfolio Website

## 1. Project Overview
**Name**: `roshan-portfolio`
**Description**: A modern, responsive portfolio website for Roshan Tom Robinson, a Front-End Software Developer. It showcases projects, skills, and contact information using a sleek, dark-themed design with glassmorphism effects and smooth animations.
**Version**: 1.0.0
**License**: © 2024 Roshan Tom Robinson

## 2. Tech Stack

### Core Framework & Language
- **React 18**: UI Library
- **TypeScript**: Type safety and developer experience
- **Vite**: Build tool and development server

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework
- **Tailwind CSS Animate**: Animation utilities
- **Radix UI**: Headless UI primitives (Dialog, Slot, Toast, Tooltip)
- **Lucide React**: Icon library
- **Class Variance Authority (CVA)**: Component variant management
- **clsx & tailwind-merge**: Class name utility helpers

### Routing & State
- **React Router DOM**: Client-side routing
- **TanStack Query**: Data fetching and state management (setup but not heavily used yet)
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
│   │   ├── Navigation.tsx   # Main responsive navigation bar
│   │   ├── ProjectCard.tsx  # Card component for project display
│   │   ├── SEO.tsx          # Meta tag wrapper component
│   │   └── SkillBadge.tsx   # Badge component for skills
│   ├── hooks/               # Custom React hooks
│   │   └── use-toast.ts     # Toast notification hook
│   ├── lib/                 # Utilities and helpers
│   │   ├── placeholderImages.ts # Base64 placeholder images
│   │   └── utils.ts         # cn() utility for class merging
│   ├── pages/               # Route components
│   │   ├── About.tsx        # About page
│   │   ├── Contact.tsx      # Contact page
│   │   ├── Home.tsx         # Landing page
│   │   ├── NotFound.tsx     # 404 Error page
│   │   ├── Projects.tsx     # Projects listing page
│   │   └── Skills.tsx       # Skills listing page
│   ├── App.tsx              # Main app component & Routing
│   ├── index.css            # Global styles & Tailwind directives
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
    - **Colors**: Custom HSL variables (primary, secondary, accent, background, etc.)
    - **Font**: Inter
    - **Animations**: `accordion-down`, `accordion-up`, `fade-in-up`, `fade-in`, `slide-in`, `pulse-glow`
- **Content Paths**: Scans `pages`, `components`, `app`, `src`

### `package.json` Scripts
- `dev`: Start Vite dev server
- `build`: Run TypeScript compiler check (`tsc`) then Vite build
- `preview`: Preview production build
- `lint`: Run ESLint

## 5. Design System

### Color Palette (HSL)
Defined in `src/index.css`:
- **Background**: Dark Green/Black (`145 45% 8%`)
- **Primary**: Vibrant Green (`145 65% 45%`)
- **Accent**: Lighter Green (`145 60% 55%`)
- **Text**: Off-white (`145 20% 98%`)
- **Glassmorphism**: Used for cards and nav (`bg-glass-background` with blur)

### Typography
- **Font Family**: Inter, system-ui, sans-serif
- **Headings**: Bold, often using `text-gradient` (primary to accent)

### Global Styles
- **Glass Panel**: `.glass-panel` utility class for translucent backgrounds with blur and border.
- **Text Gradient**: `.text-gradient` for gradient text effects.
- **Animations**: Fade-in up, slide-in, and pulse glow effects are globally available.

## 6. Routing & Navigation

### Routes (`src/App.tsx`)
| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Landing page with hero section |
| `/about` | `About` | Personal bio and download resume |
| `/projects` | `Projects` | Portfolio of work |
| `/skills` | `Skills` | Technical skills showcase |
| `/contact` | `Contact` | Contact information |
| `*` | `NotFound` | 404 Catch-all route |

### Navigation (`src/components/Navigation.tsx`)
- **Responsive**: Hamburger menu on mobile, horizontal list on desktop.
- **State**: Tracks scroll position to toggle glass effect (`scrolled > 20px`).
- **Active State**: Highlights current route.

## 7. Components Detail

### `ProjectCard.tsx`
- Displays project title, description, tags, and image.
- **Props**: `title`, `description`, `technologies`, `tag`, `liveUrl`, `githubUrl`, `imageUrl`.
- **Features**: Hover effects, external links, fallback for broken images.

### `SEO.tsx`
- Wraps `react-helmet-async`.
- **Props**: `title`, `description`, `keywords`, `ogImage`, `ogUrl`.
- **Function**: Sets `<title>`, `<meta>` tags for SEO and Open Graph sharing.

### `SkillBadge.tsx`
- **Props**: `name`, `delay`.
- **Function**: Displays a skill name in a styled badge with a fade-in animation delay.

## 8. Pages Detail

### `Home.tsx`
- **Hero Section**: "Hi, I'm Roshan Tom Robinson".
- **Typing Effect**: Cycles through "Building modern web experiences."
- **Call to Action**: Links to Projects, Contact, and Resume.
- **Socials**: GitHub, LinkedIn, Email links.

### `About.tsx`
- **Bio**: Detailed introduction.
- **Resume**: Download button for PDF resume.
- **Highlights**: List of services (Responsive Design, UI/UX, etc.).

### `Projects.tsx`
- **Data**: Static array of project objects (PC Part Picker, ChatBot AI, etc.).
- **Display**: Grid of `ProjectCard` components.
- **Images**: Uses Base64 placeholders from `src/lib/placeholderImages.ts`.

### `Skills.tsx`
- **List**: HTML5, CSS3, JS, Python, Lua, React, TypeScript.
- **Display**: Grid of `SkillBadge` components.

### `Contact.tsx`
- **Info**: Phone, Email, Location.
- **Socials**: Repeated social links.
- **Layout**: Grid layout with glass panels.

## 9. Utilities

### `src/lib/utils.ts`
- `cn(...inputs)`: Merges Tailwind classes using `clsx` and `tailwind-merge` to resolve conflicts.

### `src/lib/placeholderImages.ts`
- Exports `placeholderImages` object containing Base64 SVG strings for project previews (PC Part Picker, Chatbot, Dashboard, Portfolio).
