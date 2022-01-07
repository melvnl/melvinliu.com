module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: "#E16259",
        primaryWhite: "#FFFEFC",
        primaryBlack: "#111111",
        primaryGray: "#666665",
        borderGray: "#4C4C4C",
        secondaryGray: "#A5A4A3",
        bgHovered: "#F7F6F4",
      },
      fontFamily: {
        sans: ["Inter"],
        serif: ["Georgia"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
