const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.100"),
            a: {
              color: theme("colors.green.300"),
              "&:hover": {
                color: theme("colors.green.400"),
              },
            },
            strong: {
              color: theme("colors.white"),
            },
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.white"),
            },
            h3: {
              color: theme("colors.white"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
