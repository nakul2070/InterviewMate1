/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Blue for primary buttons & highlights
        secondary: "#1e293b", // Dark gray for sidebars and backgrounds
        accent: "#fbbf24", // Yellow for highlights
        background: "#f9fafb", // Light gray for background
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")], // Enables better form styling
};
