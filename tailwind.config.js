module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: {
        dark: "#343434",
        light: "#434343",
        transparent: "rgba(52, 52, 52, .6)",
      },
      white: {
        primary: "#FFFFFF",
      },
      salmon: {
        primary: "#EB5857",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
