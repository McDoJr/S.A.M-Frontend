/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF854D',
        blue: '#35C2CB',
        shade: '#D9D9D9'
      },
      fontFamily: {
        heading: "Jomhuria",
        body: 'Josefin Sans'
      }
    },
  },
  plugins: [],
}

