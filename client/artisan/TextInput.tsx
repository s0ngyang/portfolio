import clsx from "clsx";
import type { ChangeEvent, ForwardedRef, InputHTMLAttributes } from "react";
import React, { forwardRef, useId } from "react";

export type TextInputSize = "lg" | "md" | "sm";

type OriginalAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
type Props = OriginalAttributes &
  Readonly<{
    defaultValue?: string;
    description?: React.ReactNode;
    endIcon?: React.ComponentType<React.ComponentProps<"svg">>;
    errorMessage?: React.ReactNode;
    isLabelHidden?: boolean;
    label: string;
    onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
    size?: TextInputSize;
    startIcon?: React.ComponentType<React.ComponentProps<"svg">>;
    value?: string;
  }>;

type TextInputState = "error" | "normal";

function stateClass(state: TextInputState): string {
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

const fontSizeClasses: Record<TextInputSize, string> = {
  lg: "text-base",
  md: "text-sm",
  sm: "text-xs",
};

const iconSizeClasses: Record<TextInputSize, string> = {
  lg: "h-4 w-4",
  md: "h-4 w-4",
  sm: "h-4 w-4",
};

function paddingClass(size: TextInputSize): string {
  return {
    lg: "p-2.5",
    md: "p-2",
    sm: "p-1.5",
  }[size];
}

function borderRadiusClass(size: TextInputSize): string {
  return {
    lg: "rounded-md",
    md: "rounded-md",
    sm: "rounded-md",
  }[size];
}

function TextInput(
  {
    autoComplete,
    autoFocus,
    className,
    defaultValue,
    description,
    disabled,
    endIcon: EndIcon,
    errorMessage,
    id: idParam,
    isLabelHidden = false,
    label,
    name,
    placeholder,
    required,
    size = "md",
    startIcon: StartIcon,
    type = "text",
    value,
    onChange,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  const hasError = !!errorMessage;
  const generatedId = useId();
  const id = idParam ?? generatedId;
  const messageId = useId();
  const state = hasError ? "error" : "normal";
  const fontSizeClass = fontSizeClasses[size];
  const iconSizeClass = iconSizeClasses[size];
  const iconColorClass = "text-stone-400 dark:text-stone-600";

  return (
    <div>
      <label
        className={clsx(
          isLabelHidden
            ? "sr-only"
            : clsx(
                "mb-1.5 block font-medium",
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
        {StartIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <StartIcon
              aria-hidden="true"
              className={clsx(iconSizeClass, iconColorClass)}
            />
          </div>
        )}

        <input
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

            StartIcon && "pl-9",
            EndIcon && "pr-9",
            stateClass(state),
            "shadow-none",
            className
          )}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value != null ? value : undefined}
          onChange={(event) => {
            if (!onChange) {
              return;
            }

            onChange(event.target.value, event);
          }}
          {...props}
        />

        {EndIcon && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <EndIcon
              aria-hidden="true"
              className={clsx(iconSizeClass, iconColorClass)}
            />
          </div>
        )}
      </div>
      {errorMessage && (
        <p
          className={clsx(
            "mt-2 block text-xs",
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

export default forwardRef(TextInput);
