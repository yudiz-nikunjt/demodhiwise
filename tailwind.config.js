module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        black_900: "#000000",
        bluegray_400: "#8c8c8c",
        yellow_901: "#f47625",
        gray_800: "#4f4f4f",
        gray_900: "#252525",
        yellow_900: "#f47726",
        deep_orange_200: "#ffb382",
        white_A700: "#ffffff",
        black_900_2d: "#0000002d",
        lime_100: "#f6e6cd",
      },
      backgroundImage: { gradient: "linear-gradient(228deg ,#f47625,#ffb382)" },
      boxShadow: { bs: "0px 24px  48px 0px #0000002d" },
      borderRadius: {
        radius10: "10px",
        radius15: "15px",
        radius22: "22px",
        radius29: "29px",
      },
      fontFamily: {
        quicksand: "Quicksand",
        russoone: "Russo One",
        roboto: "Roboto",
      },
      letterSpacing: {
        ls1: "1px",
        ls04: "0.4px",
        ls16: "1.6px",
        ls018: "0.18px",
        ls036: "0.36px",
        ls048: "0.48px",
        ls056: "0.56px",
        ls06300000000000001: "0.6300000000000001px",
        ls07000000000000001: "0.7000000000000001px",
        ls049000000000000005: "0.49000000000000005px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
