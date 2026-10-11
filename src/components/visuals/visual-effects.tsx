"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { attachVisualMotion } from "@/lib/visual-motion";
import { attachInquiryDialog } from "@/lib/inquiry-dialog";
import "./scroll-motion.css";
import "./inquiry-dialog.css";

export function VisualEffects() {
  const pathname = usePathname();
  useEffect(() => attachVisualMotion(document.documentElement), [pathname]);
  useEffect(() => attachInquiryDialog(document.documentElement), [pathname]);
  return null;
}
