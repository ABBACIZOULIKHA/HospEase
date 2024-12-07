import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graybg: "#d9d9d9",
        grayLogged:"#f5f3f4",
        grayNav:"#f8f9fa",
        Bleu: "#2667ff"
      },
    },
  },
  plugins: [],
} satisfies Config;
