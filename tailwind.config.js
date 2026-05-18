/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd6ff',
          300: '#8ebcff',
          400: '#5896ff',
          500: '#3171f5',
          600: '#1f54db',
          700: '#1b43b0',
          800: '#1c3a8a',
          900: '#1c346e',
        },
        ink: {
          900: '#0b1220',
          800: '#1a2236',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
