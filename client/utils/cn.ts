/**
 * A utility function to conditionally combine class names.
 * @param args - An array of class names and conditions.
 * @returns A single string with the combined class names.
 */
function cn(...args: (string | false | null | undefined)[]): string {
  return args.filter(Boolean).join(" ");
}

export { cn };
