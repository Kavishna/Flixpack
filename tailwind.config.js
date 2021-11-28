module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        n1: "-1",
      },
    },
    colors: {
      gray: {
        dark: "#343434",
        light: "#434343",
        transparent: "rgba(52, 52, 52, .6)",
      },
      white: {
        primary: "#FFFFFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
