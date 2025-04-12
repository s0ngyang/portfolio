import clsx from "clsx";
import type { ChangeEvent, ForwardedRef, TextareaHTMLAttributes } from "react";
import React, { forwardRef, useId } from "react";

export type TextAreaSize = "lg" | "md" | "sm";
export type TextAreaResize = "both" | "horizontal" | "none" | "vertical";

type OriginalAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>;
type Props = OriginalAttributes &
  Readonly<{
    defaultValue?: string;
    description?: React.ReactNode;
    errorMessage?: React.ReactNode;
    isLabelHidden?: boolean;
    label: string;
    // onChange?: (value: string, event: ChangeEvent<HTMLTextAreaElement>) => void;
    resize?: TextAreaResize;
    size?: TextAreaSize;
    value?: string;
  }>;

type TextAreaState = "error" | "normal";

function stateClass(state: TextAreaState): string {
  return {
    error: clsx(
      "text-stone-700 dark:text-stone-300",
      "placeholder:text-stone-400 placeholder:dark:text-stone-600",
      "ring-rose-500 dark:ring-rose-500",
      "focus:ring-rose-500 dark:ring-rose-500"
    ),
    normal: clsx(
      "text-stone-700 dark:text-stone-300",
      "placeholder:text-stone-400 placeholder:dark:text-stone-600",
      "ring-stone-300 dark:ring-stone-700",
      "focus:ring-indigo-600 focus:dark:ring-indigo-400"
    ),
  }[state];
}

const resizeClasses: Record<TextAreaResize, string> = {
  both: "resize",
  horizontal: "resize-x",
  none: "resize-none",
  vertical: "resize-y",
};

const fontSizeClasses: Record<TextAreaSize, string> = {
  lg: "text-base",
  md: "text-sm",
  sm: "text-xs",
};

const iconSizeClasses: Record<TextAreaSize, string> = {
  lg: "h-4 w-4",
  md: "h-4 w-4",
  sm: "h-4 w-4",
};

function paddingClass(size: TextAreaSize): string {
  return {
    lg: "p-2.5",
    md: "p-2",
    sm: "p-1.5",
  }[size];
}

function borderRadiusClass(size: TextAreaSize): string {
  return {
    lg: "rounded-md",
    md: "rounded-md",
    sm: "rounded-md",
  }[size];
}

function TextArea(
  {
    autoComplete,
    autoFocus,
    className,
    defaultValue,
    description,
    disabled,
    errorMessage,
    id: idParam,
    isLabelHidden = false,
    label,
    name,
    placeholder,
    resize = "vertical",
    required,
    size = "md",
    value,
    onChange,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  const hasError = !!errorMessage;
  const generatedId = useId();
  const id = idParam ?? generatedId;
  const messageId = useId();
  const state = hasError ? "error" : "normal";
  const fontSizeClass = fontSizeClasses[size];

  return (
    <div>
      <label
        className={clsx(
          isLabelHidden
            ? "sr-only"
            : clsx(
                "mb-3 block font-medium",
                "text-stone-700 dark:text-stone-300",
                fontSizeClass
              )
        )}
        htmlFor={id}
      >
        {label}
        {required && (
          <span
            aria-hidden="true"
            className={"text-rose-500 dark:text-rose-500"}
          >
            {" "}
            *
          </span>
        )}
      </label>
      {!hasError && description && (
        <p
          className={clsx(
            "my-1 block text-xs",
            "text-stone-500 dark:text-stone-500"
          )}
          id={messageId}
        >
          {description}
        </p>
      )}

      <div className="relative">
        <textarea
          ref={ref}
          aria-describedby={
            hasError || description != null ? messageId : undefined
          }
          aria-invalid={hasError ? true : undefined}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className={clsx(
            "block w-full",
            "bg-transparent",
            fontSizeClass,
            "border-0",
            borderRadiusClass(size),
            "focus:outline-none focus:outline-transparent",
            paddingClass(size),
            "ring-inset",
            "focus:ring-2 focus:ring-inset",
            "ring-1",
            [
              "disabled:text-stone-300 disabled:dark:text-stone-700 disabled:bg-stone-200 disabled:dark:bg-stone-800",
              "disabled:cursor-not-allowed",
            ],

            stateClass(state),
            resizeClasses[resize],
            "shadow-none",
            className
          )}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value != null ? value : undefined}
          onChange={(event) => {
            if (!onChange) {
              return;
            }

            onChange(event);
          }}
          {...props}
        />
      </div>
      {errorMessage && (
        <p
          className={clsx(
            "mt-1.5 block text-xs",
            "text-rose-500 dark:text-rose-500"
          )}
          id={messageId}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default forwardRef(TextArea);
