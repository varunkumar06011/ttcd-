/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ttcda: {
          gold: '#B09030',
          'gold-light': '#C8A04A',
          'gold-dark': '#7A5A1A',
          maroon: '#B03030',
          'maroon-light': '#C85555',
          'maroon-dark': '#7A1212',
          charcoal: '#1A1A1A',
          'gray-body': '#4A4A4A',
          'off-white': '#FAFAFA',
        }
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
