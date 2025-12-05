/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 0.5s ease-out',
        fadeInRight: 'fadeInRight 0.5s ease-out',
      },
      colors: {
             primary: '#0B0F0C',     // Almost black
  secondary: '#1F2E1D',   // Deep Olive
  accent: '#22C55E',      // Vivid Green
  muted: '#6B7280',       // Neutral Gray
  light: '#F4F4F5',       // Soft White
      },
      screens: {
        xs: '320px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        xxl: '1536px'
      },
      
    },
  },
  plugins: [],
}
