/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ts}", "!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#93c5fd', 
          DEFAULT: '#3b82f6',
          dark: '#1e40af', 
        },
        secondary: {
          light: '#fda4af', 
          DEFAULT: '#f43f5e',
          dark: '#9f1239', 
        },
        accent: {
          light: '#6ee7b7', 
          DEFAULT: '#10b981',
          dark: '#065f46', 
        },
        neutral: {
          light: '#f3f4f6', 
          DEFAULT: '#9ca3af',
          dark: '#374151', 
        },
        warning: '#f59e0b', 
        success: '#10b981', 
        error: '#ef4444', 
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
