module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryRed: "#E16259",
        hoverRed: "#F2EEE7",
        primaryWhite: "#FFFEFC",
        primaryBlack: "#111111",
        primaryGray: "#666665",
        borderGray: "#4C4C4C",
        secondaryGray: "#A5A4A3",
        bgHovered: "#F7F6F4",
        darkBlack: "#1F2028",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        sans: ["Inter"],
      },
      typography: {
        default: {
          css: {
            pre: null,
            code: null,
            "code::before": null,
            "code::after": null,
            "pre code": null,
            "pre code::before": null,
            "pre code::after": null,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
