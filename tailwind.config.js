/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          200: '#1A365D',
          900: '#0A1929',
        },
        green: {
          DEFAULT: '#1A7A4A',
          light: '#22A05F',
          pale: '#EAF5EF',
        },
        amber: {
          DEFAULT: '#D4860A',
          pale: '#FDF3E0',
        },
        off: {
          DEFAULT: '#F7F5F0',
          200: '#EEE9E0',
        },
        muted: '#5A6478',
        border: '#DDD8CF',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease forwards',
        scroll: 'scroll 40s linear infinite',
      }
    },
  },
  plugins: [],
}
