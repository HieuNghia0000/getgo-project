/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      content: {
        'logo1': 'url("/getgo2.png")'
      },
    },
  },
  plugins: [],
}

