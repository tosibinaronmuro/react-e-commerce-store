module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
    },
  },
  plugins: [
    require('flowbite/plugin'),
        
    ],
    }}
 