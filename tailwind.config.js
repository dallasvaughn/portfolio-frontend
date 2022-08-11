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
        'slow-pulse': 'slowPulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        slowPulse: {
          '0%, 100%': { opacity: 0.2 },
          '80%': { opacity: 0.05 },
        },
      },
    },
  },
  plugins: [],
};
