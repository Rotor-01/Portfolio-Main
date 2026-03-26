import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Theme = "theme-vintage" | "theme-midnight" | "theme-bubblegum" | "dark";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: "theme-vintage",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "theme-vintage",
  storageKey = "portfolio-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark", "theme-vintage", "theme-midnight", "theme-bubblegum");
    root.classList.add(theme);

    // Sync browser tab icon with theme
    setTimeout(() => {
      const computedStyle = getComputedStyle(root);
      const primaryHsl = computedStyle.getPropertyValue('--primary').trim().replace(/\s+/g, ', ');
      const primaryFgHsl = computedStyle.getPropertyValue('--primary-foreground').trim().replace(/\s+/g, ', ');
      
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect width="80" height="80" x="14" y="14" fill="black" />
          <rect width="80" height="80" x="6" y="6" fill="hsl(${primaryHsl})" stroke="black" stroke-width="4" />
          <text x="46" y="66" font-family="Georgia, serif" font-style="italic" font-weight="bold" font-size="65" fill="hsl(${primaryFgHsl})" text-anchor="middle">R</text>
        </svg>
      `.trim().replace(/\n/g, '');
      
      let link = document.getElementById('favicon') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.id = 'favicon';
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
    }, 50);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
