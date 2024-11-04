/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ts}","!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        primary: '#5B6CCB',
        'primary-active': '#374388',
        secondary: '#BAC5CF',
        'secondary-active': '#A3B0BD', 
        cta: '#FD9E2F',
        'cta-active': '#E58C29',       
        bg: '#1B203D',
        'text-black': '#393939',
        'text-white': '#FFFFFF',
        dark: {
          primary: '#2A2F5B',           
          'primary-active': '#4C51A5',  
          secondary: '#939DA5',         
          'secondary-active': '#7D8991',
          cta: '#E58C29',               
          'cta-active': '#D67B21',      
          bg: '#12152A'   
        }
      },
    },
  },
  plugins: [],
  darkMode: 'class',  
}
