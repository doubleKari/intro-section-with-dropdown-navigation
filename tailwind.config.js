/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "body-text": ["Epilogue", "sans-serif"],
      },
      colors: {
        alwhite: "#fafafa",
        DimGray: "#696969",
        alBlack: "#141414",
      },
      screens: {
        sm: "375px",
        lg: "1440px",
      },
      backgroundImage: {
        "hero-pattern-mobile": "url('../images/image-hero-mobile.png')",
        "hero-pattern-desktop": "url('../images/image-hero-desktop.png')",
      },
    },
  },

  plugins: [],
};
