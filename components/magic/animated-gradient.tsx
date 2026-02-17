"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type AnimatedGradientProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  duration?: number;
};

export function AnimatedGradient({
  children,
  className,
  containerClassName,
  colors = ["#6d28d9", "#2563eb", "#00d4ff", "#6d28d9"],
  duration = 10,
}: AnimatedGradientProps) {
  const gradientStyle = {
    background: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    animation: `gradient ${duration}s ease infinite`,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("relative", containerClassName)}
    >
      <div
        className={cn("bg-clip-text text-transparent", className)}
        style={gradientStyle}
      >
        {children}
      </div>
    </motion.div>
  );
}

type BackgroundGradientProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
};

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: BackgroundGradientProps) {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <motion.div
        variants={variants}
        initial="initial"
        animate={animate ? "animate" : "initial"}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "absolute inset-0 z-0 opacity-30",
          className
        )}
        style={{
          background: "linear-gradient(135deg, #6d28d9, #2563eb, #00d4ff)",
          backgroundSize: "400% 400%",
        }}
      />
      {children}
    </div>
  );
}
