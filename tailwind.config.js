/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all JavaScript and TypeScript files in src folder
    "./public/index.html",         // Adds HTML file for tailwind to scan
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

