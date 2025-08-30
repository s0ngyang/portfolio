import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: "readonly",
        JSX: "readonly",
        document: "readonly",
        window: "readonly",
        setTimeout: "readonly",
        fetch: "readonly",
        URLSearchParams: "readonly",
        HTMLElement: "readonly",
        HTMLButtonElement: "readonly",
        HTMLHeadingElement: "readonly",
        HTMLParagraphElement: "readonly",
        HTMLTextAreaElement: "readonly",
        HTMLInputElement: "readonly",
        Event: "readonly",
        Node: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-empty-pattern": "warn",
    },
  },
  {
    files: ["**/*.mjs", "vite.config.ts"],
    languageOptions: {
      globals: {
        __dirname: "readonly",
      },
    },
  },
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
