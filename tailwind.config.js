/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        sptheme: {
        
"primary": "#025ae8",
        
"secondary": "#216cb7",
        
"accent": "#cdfc9f",
        
"neutral": "#212C36",
        
"base-100": "#F4EBF5",
        
"info": "#35C3E3",
        
"success": "#58E4D6",
        
"warning": "#FADB6B",
        
"error": "#F56192",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
