import type { ForwardedRef, HTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "../utils/cn";

export type TextSize = "base" | "lg" | "sm" | "xl" | "xs";
export type TextWeight = "bold" | "light" | "medium" | "normal" | "semibold";
export type TextColor = "auto" | "custom" | "dark" | "light" | string;

const textSizeClasses: Record<TextSize, string> = {
  base: "text-base",
  lg: "text-lg",
  sm: "text-sm",
  xl: "text-xl",
  xs: "text-xs",
};

const textWeightClasses: Record<TextWeight, string> = {
  bold: "font-bold",
  light: "font-light",
  medium: "font-medium",
  normal: "font-normal",
  semibold: "font-semibold",
};

function colorClass(color: TextColor) {
  return {
    auto: "text-stone-900 dark:text-stone-100",
    custom: "",
    dark: "text-stone-900 dark:text-stone-100",
    light: "text-white",
  }[color];
}

type Props = HTMLAttributes<HTMLParagraphElement> &
  Readonly<{
    className?: string;
    color?: TextColor;
    size?: TextSize;
    weight?: TextWeight;
  }>;

function Text(
  {
    className,
    color = "auto",
    size = "base",
    weight = "normal",
    ...props
  }: Props,
  ref: ForwardedRef<HTMLParagraphElement>
) {
  return (
    <div
      ref={ref}
      className={cn(
        textWeightClasses[weight],
        textSizeClasses[size],
        colorClass(color),
        className
      )}
      {...props}
    />
  );
}

export default forwardRef(Text);
