"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ShimmerButtonProps = {
  children: React.ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  onClick?: () => void;
};

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerSize = "0.1em",
  shimmerDuration = "2s",
  borderRadius = "8px",
  background = "rgba(109, 40, 217, 0.8)",
  onClick,
}: ShimmerButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden font-semibold transition-all duration-300",
        className
      )}
      style={{
        borderRadius,
        background,
      }}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <div
          className="absolute inset-0 animate-shimmer"
          style={{
            background: `linear-gradient(90deg, transparent, ${shimmerColor}20, transparent)`,
            backgroundSize: `200% 100%`,
            animation: `shimmer ${shimmerDuration} infinite linear`,
          }}
        />
      </div>
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
