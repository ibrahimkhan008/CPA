"use client";

import ClickSpark from "@/components/ui/ClickSpark";
import { useTheme } from "@/components/ThemeProvider";

export function ClickSparkProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const sparkColor = resolvedTheme === "dark" ? "#fff" : "#000";

  return (
    <ClickSpark sparkColor={sparkColor} sparkSize={8} sparkRadius={20} sparkCount={8} duration={400}>
      {children}
    </ClickSpark>
  );
}
