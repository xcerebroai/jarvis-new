"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { attachVisualMotion } from "@/lib/visual-motion";

export function VisualEffects() {
  const pathname = usePathname();
  useEffect(() => attachVisualMotion(document.documentElement), [pathname]);
  return null;
}
