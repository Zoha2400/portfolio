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
      animation: {
        bounceSlow: "bounceSlow 5s infinite",
      },
      keyframes: {
        bounceSlow: {
          "0%, 100%": { transform: "translateY(-25%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "inner-lg": "inset 0 10px 15px rgba(0, 0, 0, 0.5)",
        "inner-custom": "inset 0 0 100px 10px #000",
      },
    },
  },
  plugins: [],
};

export default config;
