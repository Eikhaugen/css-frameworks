/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ts}","!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        black: '#000807',
        inactive: '#a2a3bb',
        primary: '#9395d3',
        secondary: '#b3b7ee',
        white: '#fbf9ff',
        dark: {
          inactive: '#6b6d88',
          primary: '#4f4c7a',
          secondary: '#7174a1',
        }
      },
    },
  },
  plugins: [],
  darkMode: 'selector'
}
