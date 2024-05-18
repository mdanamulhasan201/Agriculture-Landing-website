/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monrope: ["Monrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
