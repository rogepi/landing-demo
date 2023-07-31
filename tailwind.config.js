/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '5xl': [
          '3.3rem',
          {
            lineHeight: '1.3',
          },
        ],
        '6xl': [
          '3.75rem',
          {
            lineHeight: '1.5',
          },
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
