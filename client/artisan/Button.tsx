import clsx from "clsx";
import type { HTMLAttributeAnchorTarget } from "react";

export type ButtonDisplay = "block" | "inline";
export type ButtonSize = "lg" | "md" | "sm";
export type ButtonVariant =
  | "danger"
  | "link"
  | "primary"
  | "secondary"
  | "success"
  | "tertiary";

export type Props = Readonly<{
  addonPosition?: "end" | "start";
  "aria-controls"?: string;
  className?: string;
  disabled?: boolean;
  display?: ButtonDisplay;
  href?: string;
  icon?: (props: React.ComponentProps<"svg">) => JSX.Element;
  isLabelHidden?: boolean;
  isLoading?: boolean;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  size?: ButtonSize;
  target?: HTMLAttributeAnchorTarget;
  type?: "button" | "submit";
  variant: ButtonVariant;
}>;

function horizontalPaddingClass(size: ButtonSize): string {
  const classes: Record<ButtonSize, string> = {
    lg: "px-5",
    md: "px-4",
    sm: "px-3",
  };

  return classes[size];
}

function verticalPaddingClass(size: ButtonSize): string {
  return {
    lg: "py-2.5",
    md: "py-2",
    sm: "py-1.5",
  }[size];
}

function addOnOnlyPaddingClass(size: ButtonSize): string {
  return {
    lg: "p-2.5",
    md: "p-2",
    sm: "p-1.5",
  }[size];
}

const fontSizeClasses: Record<ButtonSize, string> = {
  lg: "text-base",
  md: "text-sm",
  sm: "text-xs",
};

function borderRadiusClass(size: ButtonSize): string {
  return {
    lg: "rounded-md",
    md: "rounded-md",
    sm: "rounded-md",
  }[size];
}

const spacingClasses: Record<ButtonSize, string> = {
  lg: "gap-x-2",
  md: "gap-x-1.5",
  sm: "gap-x-1",
};

const iconSizeClasses: Record<ButtonSize, string> = {
  lg: "!h-4 !w-4",
  md: "!h-4 !w-4",
  sm: "!h-4 !w-4",
};

function variantClass(variant: ButtonVariant): string {
  return {
    danger: clsx(
      "border-transparent",
      "text-white dark:text-neutral-950",
      "bg-rose-500 dark:bg-rose-500",
      "outline-rose-500 dark:outline-rose-500",
      "hover:bg-rose-600 hover:dark:bg-rose-400",
      "active:bg-rose-700 active:dark:bg-rose-300",
      "focus-visible:bg-rose-600 focus-visible:dark:bg-rose-400",
      "shadow-none"
    ),
    link: clsx(
      "text-indigo-500 dark:text-indigo-500",
      "bg-white dark:bg-neutral-950",
      "outline-indigo-500 dark:outline-indigo-500",
      "hover:bg-neutral-100 hover:dark:bg-neutral-900",
      "active:bg-neutral-200 active:dark:bg-neutral-800"
    ),
    primary: clsx(
      "text-stone-50 dark:text-stone-950",
      "bg-indigo-500 dark:bg-indigo-500",
      "outline-indigo-500 dark:outline-indigo-500",
      "hover:bg-indigo-600 hover:dark:bg-indigo-400",
      "active:bg-indigo-700 active:dark:bg-indigo-300",
      "focus-visible:bg-indigo-600 focus-visible:dark:bg-indigo-400",
      "shadow-none"
    ),
    secondary: clsx(
      "text-stone-900 dark:text-stone-100",
      "bg-stone-200 dark:bg-stone-800",
      "outline-stone-500 dark:outline-stone-500",
      "hover:bg-stone-300 hover:dark:bg-stone-700",
      "active:bg-stone-400 active:dark:bg-stone-600",
      "focus-visible:bg-stone-400 focus-visible:dark:bg-stone-600",
      "shadow-none"
    ),
    success: clsx(
      "text-white dark:text-neutral-950",
      "bg-emerald-500 dark:bg-emerald-500",
      "outline-emerald-500 dark:outline-emerald-500",
      "hover:bg-emerald-600 hover:dark:bg-emerald-400",
      "active:bg-emerald-700 active:dark:bg-emerald-300",
      "focus-visible:bg-emerald-600 focus-visible:dark:bg-emerald-400",
      "shadow-none"
    ),
    tertiary: clsx(
      "text-stone-800 dark:text-stone-200",
      "outline-stone-300 dark:outline-stone-700",
      "ring-stone-300 dark:ring-stone-700",
      "ring-1",
      "bg-white dark:bg-neutral-950",
      "hover:bg-stone-50 hover:dark:bg-stone-950",
      "active:bg-stone-100 active:dark:bg-stone-900",
      "shadow-none"
    ),
  }[variant];
}

export default function Button({
  addonPosition = "end",
  "aria-controls": ariaControls,
  className,
  display = "inline",
  icon: Icon,
  disabled = false,
  isLabelHidden = false,
  label,
  size = "md",
  type = "button",
  variant,
  onClick,
}: Props) {
  const addOnClass = iconSizeClasses[size];

  const addOn =
    Icon != null ? <Icon aria-hidden="true" className={addOnClass} /> : null;

  const children = (
    <>
      {addonPosition === "start" && addOn}
      {!isLabelHidden && <div>{label}</div>}
      {addonPosition === "end" && addOn}
    </>
  );

  const commonProps = {
    "aria-controls": ariaControls ?? undefined,
    "aria-label": isLabelHidden ? label : undefined,
    children,
    className: clsx(
      display === "block" ? "flex w-full" : "inline-flex",
      "items-center justify-center",
      isLabelHidden
        ? addOnOnlyPaddingClass(size)
        : [verticalPaddingClass(size), horizontalPaddingClass(size)],

      spacingClasses[size],
      [fontSizeClasses[size], "whitespace-nowrap font-medium"],
      borderRadiusClass(size),
      "font-medium",
      "transition-colors",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
      variantClass(variant),
      [
        "disabled:text-white",
        "disabled:border-transparent",
        "disabled:bg-stone-300 disabled:dark:bg-stone-700",
        "disabled:cursor-not-allowed",
      ],

      disabled && "pointer-events-none",
      className
    ),
    disabled,
    onClick,
  };

  // eslint-disable react/button-has-type
  return (
    <button type={type === "button" ? "button" : "submit"} {...commonProps} />
  );
}
