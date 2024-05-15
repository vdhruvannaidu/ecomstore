/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  // or 'media' or 'class'
  // theme: {
  //   extend: {}
    
  // },
  
  variants: {
    extend: {}
  },
  plugins: [require("daisyui", "@tailwindcss/aspect-ratio")],
  daisyui: {

    theme: ['winter'],
    // theme: [{
    //   mytheme: {
    //     "primary": "#1d4ed8",
    //     "secondary": "#93c5fd",
    //     "accent": "#1e3a8a",
    //     "neutral": "#d8b4fe",
    //     "base": "#edf2f4",
    //     "info": "#0ea5e9",
    //     "success": "#22c55e",
    //     "warning": "#fbbf24",
    //     "error": "#ff0000",
    //     },
    //   }
    // ],
    themes: true,
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false
  }
};