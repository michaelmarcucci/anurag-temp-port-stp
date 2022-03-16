module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#010101",
        first: "#E9BC3F",
        second: "#EB4888",
        third: "#10A2F5",
        fourth: "#24D05A",
      },

      fontFamily: {
        jost: ["Jost", "sans-serif"],
        sen: ["Sen", "sans-serif"],
      },

      screens: {
        custom: "400px",
        'xs': '475px',
        'sm': '640px',
      // => @media (min-width: 640px) { ... }
        'md': '768px',
      // => @media (min-width: 768px) { ... }
        'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
