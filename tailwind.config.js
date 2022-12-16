/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
  },
  // variants: {
  //   extend: {
  //     backgroundColor: ['active'],
  //     // ...
  //     borderColor: ['focus-visible', 'first'],
  //     // ...
  //     textColor: ['visited'],
  //   }
  // },
  plugins: [],
}
