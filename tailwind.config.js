/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212A31',
        secondary: '#2E3944',
        accent: '#124E66',
        muted: '#748D92',
        light: '#D3D9D4',
      },
    },
  },
  plugins: [],
}
