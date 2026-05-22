"use client";

import { useTheme } from "@/components/ThemeProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Monitor, Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          aria-label="Select theme"
          className="border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black focus-visible:outline-black dark:focus-visible:outline-white focus-visible:outline-offset-2"
        >
          {resolvedTheme === "light" && <Sun size={16} strokeWidth={2} />}
          {resolvedTheme === "dark" && <Moon size={16} strokeWidth={2} />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-36">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="gap-2"
        >
          <Sun size={16} strokeWidth={2} className="opacity-60" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="gap-2"
        >
          <Moon size={16} strokeWidth={2} className="opacity-60" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="gap-2"
        >
          <Monitor size={16} strokeWidth={2} className="opacity-60" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}