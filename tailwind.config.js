/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Biryani'],
      },
      animation: {
        'fade-in':
          'fadeIn 2s ease-in 0.5s forwards, slowPulse 8s 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-right': 'fadeInRight 1s ease-in-out forwards',
      },
      keyframes: {
        slowPulse: {
          '0%, 100%': { opacity: 0.2 },
          '80%': { opacity: 0.05 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 0.2 },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
