"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration = 0,
}: {
  text: string;
  duration?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (!svgRef.current) return;
    const svgRect = svgRef.current.getBoundingClientRect();
    const cxPct = ((cursor.x - svgRect.left) / svgRect.width) * 100;
    const cyPct = ((cursor.y - svgRect.top) / svgRect.height) * 100;
    setMaskPosition({ cx: `${cxPct}%`, cy: `${cyPct}%` });
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 500 110"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="w-full select-none"
      aria-label={text}
    >
      <defs>
        <radialGradient
          id="revealGradient"
          gradientUnits="userSpaceOnUse"
          r="22%"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
        >
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="black" stopOpacity="1" />
        </radialGradient>
        <mask id="textRevealMask">
          <rect x="0" y="0" width="100%" height="100%" fill="black" />
          <circle
            cx={maskPosition.cx}
            cy={maskPosition.cy}
            r="22%"
            fill="white"
          />
        </mask>
      </defs>

      {/* Ghost outline — traced path, visible at idle + hover */}
      <motion.text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="72"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="800"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="1.5"
        fill="none"
        initial={{ strokeDashoffset: 1200, strokeDasharray: 1200 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1200 }}
        transition={{ duration: 3.5, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      {/* Dark inner stroke — visible at idle, hidden on hover */}
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="72"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="800"
        fill="transparent"
        stroke="rgba(0,0,0,0.4)"
        strokeWidth="0.6"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        {text}
      </text>

      {/* Revealed text — mask reveals black on hover */}
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="72"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="800"
        fill="#000000"
        stroke="none"
        mask="url(#textRevealMask)"
      >
        {text}
      </text>
    </svg>
  );
};