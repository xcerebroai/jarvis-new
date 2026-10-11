import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

/**
 * Exported so `<Link>` and `<a>` can wear button styling without a Slot
 * dependency: `<Link className={buttonVariants({ variant: "primary" })}>`.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors duration-200 ease-standard disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "bg-cobalt-500 text-paper hover:bg-cobalt-600 active:bg-cobalt-600",
        secondary:
          "border border-line-strong bg-ink-850 text-paper hover:border-line-strong hover:bg-ink-800",
        ghost: "text-muted hover:bg-ink-850 hover:text-paper",
        link: "text-paper underline-offset-4 hover:text-cobalt-400 hover:underline",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
