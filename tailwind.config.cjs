/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',  
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('./assets/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('./assets/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('./assets/yosemite.jpg')",
			  'LA': "url('./assets/LA.jpg')",
			  'seattle': "url('./assets/seattle.jpg')",
			  'new_york': "url('./assets/new_york.jpg')",
			  'norway': "url('./assets/norway.jpg')",
			  'sydney': "url('./assets/sydney.jpg')",
			  'miami': "url('./assets/miami.jpg')",
			  'switzerland': "url('./assets/switzerland.jpg')",
			  'bali': "url('./assets/bali.jpg')",
			  'norway': "url('./assets/norway.jpg')",
			  'chicago': "url('./assets/chicago.jpg')",
			  'europe': "url('./assets/europe.jpg')",
			  'iceland': "url('./assets/iceland.jpg')",
        },
        backgroundColor: theme => ({
        ...theme("colors"),
        "primary": "#CC2D4A",
        "secondary": "#8FA206",
        "tertiary": "#61AEC9",
        }),
        textColor:{
        "primary": "#CC2D4A",
        "secondary": "#8FA206",
        "tertiary": "#61AEC9",
        },
        fontFamily:['Montserrat', 'sans serif']
    },
  },
  plugins: [],
  
}
