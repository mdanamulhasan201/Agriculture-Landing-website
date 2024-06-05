/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monrope: ["Monrope", "sans-serif"],
        roboto: ["Roboto", "sans-serif"], // Add the new font family here
      },
    },
  },
  plugins: [],
};
