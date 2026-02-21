/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#020203",
        surface: "#0d0d10",
        accent: "#4f46e5",
      },
    },
  },
  plugins: [],
}