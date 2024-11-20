/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "#152339",
        secondaryColor: "#3D4A5F",
        primaryBlue: "#00B2FF",
        secondaryBlue: "#00A0E5",
        primaryPink: "#F04A90",
        secondaryPink: "#cb427b",
        lightBlue: "#F1F6F8",
        dodgerBlue: "#00B2FF",
        lightGrey: "#C0CFD6",
        midNight: "#232E3F",
        morningMist: "#E7EDF0",
        coolGrey: "#8F98A8",
        dullGrey: "#ffffffd7",
      },
      cursor: {
        "no-text-select": "default",
      },
      keyframes: {
        zoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        zoom: "zoom 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
