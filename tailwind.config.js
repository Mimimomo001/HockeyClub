/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#ea580c",
                  
          "secondary": "#ffffff",
                  
          "accent": "#ffffff",
                  
          "neutral": "#ffffff",
                  
          "base-100": "#ffffff",
                  
          "info": "#ffffff",
                  
          "success": "#00ffff",
                  
          "warning": "#ffffff",
                  
          "error": "#ffffff",
                  },
                },
    ],
    
  },
}