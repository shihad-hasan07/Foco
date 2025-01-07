/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logoFont': ['Electrolize', 'serif'],
        'roboto': ['Roboto', 'serif'],
      },
      backgroundImage: {
        'add-food-bg': "url('/src/assets/bg-2.jpg')",
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

