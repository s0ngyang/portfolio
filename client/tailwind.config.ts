import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        misty_rose: {
          DEFAULT: "#f9e0d9",
          100: "#501b0d",
          200: "#a13619",
          300: "#e05b37",
          400: "#ec9d87",
          500: "#f9e0d9",
          600: "#fae5df",
          700: "#fbece7",
          800: "#fdf2ef",
          900: "#fef9f7",
        },
        almond: {
          DEFAULT: "#e6dbd0",
          100: "#392c1e",
          200: "#73583d",
          300: "#aa845d",
          400: "#c8af97",
          500: "#e6dbd0",
          600: "#ebe2da",
          700: "#f0eae3",
          800: "#f5f1ec",
          900: "#faf8f6",
        },
        rose_taupe: {
          DEFAULT: "#7d6167",
          100: "#191415",
          200: "#33272a",
          300: "#4c3b3e",
          400: "#654e53",
          500: "#7d6167",
          600: "#9c7e84",
          700: "#b49ea3",
          800: "#cdbec2",
          900: "#e6dfe0",
        },
        eggplant: {
          DEFAULT: "#754f5b",
          100: "#171012",
          200: "#2e1f24",
          300: "#452f36",
          400: "#5c3f48",
          500: "#754f5b",
          600: "#996878",
          700: "#b28e9a",
          800: "#ccb4bb",
          900: "#e5d9dd",
        },
        eggplant2: {
          DEFAULT: "#5d4954",
          100: "#130f11",
          200: "#261e22",
          300: "#392c33",
          400: "#4b3b44",
          500: "#5d4954",
          600: "#856878",
          700: "#a58c9a",
          800: "#c3b2bb",
          900: "#e1d9dd",
        },
      },
    },
  },
  plugins: [],
};
export default config;
