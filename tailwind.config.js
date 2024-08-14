/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eaeaea",
        secondary: "#21b6e0",
      },
    },
  },
  plugins: [require("daisyui")],
};
