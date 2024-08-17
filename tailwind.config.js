/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eaeaea",
        secondary: "#21b6e0",
        tertiary: "#181823",
        quaternary: "#F4F3F9",
      },
    },
  },
  plugins: [require("daisyui")],
};
