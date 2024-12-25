/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        silver: "#C0C0C0", // Silver color
      },
      dropShadow: {
        "silver-glow": "0 4px 6px rgba(192, 192, 192, 0.5)",
      },
    },
  },
  plugins: [],
};
