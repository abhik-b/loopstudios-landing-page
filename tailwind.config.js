module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alata: ["Alata", "sans"],
        josefinSans: ["Josefin Sans", "sans"],
      },
      colors: {
        "strong-cyan": "hsl(172, 67%, 45%)",
        "dark-cyan": "hsl(183,100%,15%)",
        "grayish-cyan-1": "hsl(186, 14%, 43%)",
        "grayish-cyan-2": "hsl(184, 14%, 56%)",
        "light-cyan-1": "hsl(185, 41%, 84%)",
        "light-cyan-2": "hsl(189, 41%, 97%)",
      },
    },
  },
  plugins: [],
};
