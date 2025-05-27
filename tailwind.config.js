/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          bardblue:"#37393b",
          gradient1:"#4285f4" ,
          gradient2: "#9b72cb",
          gradient3: "#d96570",
        
      },
      
      keyframes:{
        scaleside:{
          "50%": { transform: 'scaleX(1)' },
          '100%':{transform:'scaleX(3)'}
        }
      },
      animation:{
        scaleside:'scaleside 1s ease-out 1'
      }
    },
  },
  plugins: [],
}