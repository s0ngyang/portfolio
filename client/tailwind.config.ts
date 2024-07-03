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
      // generated from coolors.co
      colors: {
        latte: {
          DEFAULT: "#fdf7e4",
          100: "#594607",
          200: "#b28c0d",
          300: "#efc330",
          400: "#f6dd89",
          500: "#fdf7e4",
          600: "#fdf8e8",
          700: "#fefaee",
          800: "#fefcf4",
          900: "#fffdf9",
        },
        whip: {
          DEFAULT: "#faeed1",
          100: "#533d09",
          200: "#a57912",
          300: "#e8af2c",
          400: "#f1ce7e",
          500: "#faeed1",
          600: "#fbf1da",
          700: "#fcf5e3",
          800: "#fdf8ed",
          900: "#fefcf6",
        },
        dun: {
          DEFAULT: "#ded0b6",
          100: "#382d19",
          200: "#6f5a32",
          300: "#a7874b",
          400: "#c5ac7e",
          500: "#ded0b6",
          600: "#e4d9c4",
          700: "#ebe3d3",
          800: "#f2ece1",
          900: "#f8f6f0",
        },
        khaki: {
          DEFAULT: "#bbab8c",
          100: "#292318",
          200: "#524730",
          300: "#7b6a48",
          400: "#a38d62",
          500: "#bbab8c",
          600: "#c9bca2",
          700: "#d6cdba",
          800: "#e4ddd1",
          900: "#f1eee8",
        },
        blue: {
          DEFAULT: "#6b8ea1",
          100: "#151d21",
          200: "#2a3a42",
          300: "#3f5663",
          400: "#547384",
          500: "#6b8ea1",
          600: "#8aa5b4",
          700: "#a7bcc7",
          800: "#c5d2da",
          900: "#e2e9ec",
        },
      },
    },
  },
  plugins: [],
};

export default config;
