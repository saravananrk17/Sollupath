/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#14233B',
          indigo: '#3446A8',
          teal: '#0F9D92',
          ivory: '#F7F8FA',
          card: '#FFFFFF',
          text: '#172033',
          muted: '#657188',
          border: '#E3E8EF',
        },
        aac: {
          blue: '#2563EB',
          emerald: '#059669',
          amber: '#D97706',
          rose: '#E11D48',
          purple: '#7C3AED',
          cyan: '#0891B2',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Noto Sans"',
          '"Noto Sans Tamil"',
          '"Noto Sans Devanagari"',
          '"Noto Sans Bengali"',
          '"Noto Sans Telugu"',
          '"Noto Sans Kannada"',
          '"Noto Sans Malayalam"',
          '"Noto Sans Gurmukhi"',
          '"Noto Sans Gujarati"',
          '"Noto Sans Oriya"',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
}
