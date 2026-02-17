"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type NumberTickerProps = {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number;
  duration?: number;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
};

export function NumberTicker({
  value,
  direction = "up",
  className,
  delay = 0,
  duration = 2,
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
}: NumberTickerProps) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={cn("tabular-nums", className)}
    >
      {prefix}
      {direction === "up" ? (
        <CountUp end={value} duration={duration} decimals={decimalPlaces} />
      ) : (
        <CountDown end={value} duration={duration} decimals={decimalPlaces} />
      )}
      {suffix}
    </motion.span>
  );
}

function CountUp({
  end,
  duration,
  decimals,
}: {
  end: number;
  duration: number;
  decimals: number;
}) {
  const [display, setDisplay] = React.useState(0);
  const startTime = React.useRef<number | null>(null);
  const raf = React.useRef<number | null>(null);

  React.useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = (timestamp - startTime.current) / (duration * 1000);
      if (progress < 1) {
        setDisplay(Math.min(progress * end, end));
        raf.current = requestAnimationFrame(animate);
      } else {
        setDisplay(end);
      }
    };
    raf.current = requestAnimationFrame(animate);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [end, duration]);

  return <>{display.toFixed(decimals)}</>;
}

function CountDown({
  end,
  duration,
  decimals,
}: {
  end: number;
  duration: number;
  decimals: number;
}) {
  const [display, setDisplay] = React.useState(end * 2);
  const startTime = React.useRef<number | null>(null);
  const raf = React.useRef<number | null>(null);

  React.useEffect(() => {
    const start = end * 2;
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = (timestamp - startTime.current) / (duration * 1000);
      if (progress < 1) {
        setDisplay(Math.max(start - progress * (start - end), end));
        raf.current = requestAnimationFrame(animate);
      } else {
        setDisplay(end);
      }
    };
    raf.current = requestAnimationFrame(animate);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [end, duration]);

  return <>{display.toFixed(decimals)}</>;
}

import * as React from "react";
