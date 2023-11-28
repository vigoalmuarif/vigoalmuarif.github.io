/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [,
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./public/plugins/flowbite/**/*.js"
  ],
  theme: {
    container :{
      center : true,
      padding: '16px'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors : {
        'primary': '#4f46e5',
        'secondary' : '#059669',
        'title': '#020617',
        'sub-title': '#1e293b',
        'paragraph' : '#475569'
        
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

