"use client";

import { useEffect } from "react";
import { useToast } from "@/components/ui/toast";

export function DevBanner() {
  const { addToast } = useToast();

  useEffect(() => {
    addToast({
      title: "Under Development",
      description: "This website is under development.",
      duration: 8000
    });
  }, [addToast]);

  return null;
}