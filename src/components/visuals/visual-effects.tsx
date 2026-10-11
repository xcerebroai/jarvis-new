"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { attachVisualMotion } from "@/lib/visual-motion";
import "./scroll-motion.css";

export function VisualEffects() {
  const pathname = usePathname();
  useEffect(() => attachVisualMotion(document.documentElement), [pathname]);
  return null;
}
