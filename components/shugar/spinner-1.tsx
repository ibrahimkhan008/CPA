"use client";

import React from "react";

const sizes = {
  tiny: "w-2 h-2",
  small: "w-3 h-3",
  medium: "w-4 h-4",
  large: "w-5 h-5"
};

const speeds = {
  fast: "duration-300",
  normal: "duration-500",
  slow: "duration-700"
};

export interface SpinnerProps {
  size?: keyof typeof sizes;
  speed?: keyof typeof speeds;
  className?: string;
}

export const Spinner = ({
  size = "medium",
  speed = "normal",
  className
}: SpinnerProps) => {
  return (
    <span
      className={`inline-block rounded-full border-2 border-current border-t-transparent${sizes[size]} ${speeds[speed]} animate-spin${className ? ` ${className}` : ""}`}
      aria-label="Loading"
      role="status"
    />
  );
};