/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': 'var(--bg-light)',
        'bg-dark': 'var(--bg-dark)',
        'bg-disabled': 'var(--bg-disabled)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-disabled': 'var(--text-disabled)',
        'icons': 'var(--icons)',
        'borders': 'var(--borders)',
        'dividers': 'var(--dividers)',
        'boxes': 'var(--boxes)',
        'accent1-primary': 'var(--accent1-primary)',
        'accent1-secondary': 'var(--accent1-secondary)',
        'accent1-tertiary': 'var(--accent1-tertiary)',
        'accent1-quaternary': 'var(--accent1-quaternary)',
        'accent1-hover': 'var(--accent1-hover)',
        'accent1-click': 'var(--accent1-click)',
        'accent2-primary': 'var(--accent2-primary)',
        'accent2-secondary': 'var(--accent2-secondary)',
        'accent2-tertiary': 'var(--accent2-tertiary)',
        'accent2-quaternary': 'var(--accent2-quaternary)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
