/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slidedown: {
          '0%' : { transform: 'translateY(-50%)' },
          '100%' : { transform: 'translateY(0)' },
        },
        slideup: {
          '0%' : { transform: 'translateY(0)' },
          '100%' : { transform: 'translateY(-50%)' },
        },
        slideleft: {
          '0%': { transform: 'translateX(calc(-100% - 2.5rem))' },
          '100%': { transform: 'translateX(0)' },
        },
        slideright: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 2.5rem))' },
        },
      },
      animation: {
        slidedown: 'slidedown 20s linear forwards infinite',
        slideup: 'slideup 20s linear forwards infinite',
        slideleft: 'slideleft 20s linear infinite',
        slideright: 'slideright 20s linear infinite',
      },
    },
  },
  plugins: [],
}

