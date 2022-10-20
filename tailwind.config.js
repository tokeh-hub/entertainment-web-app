module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      flexGrow: {
        '8': 8
      },
      backgroundColor:{
        'dark-blue' : "hsl(209, 23%, 22%)",
        'very-dark-blue' : "hsl(207, 26%, 17%)"
      },
      flex: {
        '2': '0 0 30%',
        '3': '0 0 40%',
        '4': '0 0 25%',
      }
    },
  },
  plugins: [],
}
