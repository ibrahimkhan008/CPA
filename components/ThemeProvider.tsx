"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  resolvedTheme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Syncs with system preference changes live (no page reload needed)
const subscribeToSystemTheme = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
};
const getSnapshot = () => getSystemTheme();

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Live system preference — always reflects the latest OS setting
  const systemTheme: "light" | "dark" = useSyncExternalStore(
    subscribeToSystemTheme,
    getSnapshot,
    () => "dark" as "light" | "dark"
  );

  // Resolved theme respects system only when user has chosen "system"
  const resolvedTheme: "light" | "dark" =
    theme === "system" ? systemTheme : theme === "dark" ? "dark" : "light";

  // On mount: load saved preference, otherwise default to dark
  useEffect(() => {
    const stored = localStorage.getItem("voidzero-theme") as Theme | null;
    if (stored === "dark" || stored === "light" || stored === "system") {
      setThemeState(stored);
    } else {
      // No saved preference — default to dark regardless of OS setting
      setThemeState("dark");
    }
    setMounted(true);
  }, []);

  // Apply the resolved theme to <html> for Tailwind's dark: classes
  useEffect(() => {
    if (!mounted) return;

    const isDark = resolvedTheme === "dark";
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
    localStorage.setItem("voidzero-theme", theme);
  }, [theme, mounted, resolvedTheme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}