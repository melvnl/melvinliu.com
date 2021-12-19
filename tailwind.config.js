module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: '#E16259',
        primaryWhite: '#FFFEFC',
        primaryBlack: '#111111',
        primaryGray: '#666665',
        secondaryGray: '#E5E4E2',
        bgHovered: '#F7F6F4',
      },
      fontFamily: {
        sans: ['Inter']
      },
    },
  },
  plugins: [],
}
