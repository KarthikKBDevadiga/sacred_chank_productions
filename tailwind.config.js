/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        screen: {
          "0%": { color: "white" },
          "50%": { color: "grey" },
          "100%": { color: "white" },
        },
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
        rotate: "rotate 1.5s linear infinite",
        screen: "screen 1s linear infinite",
      },
    },
  },
  plugins: [],
};
