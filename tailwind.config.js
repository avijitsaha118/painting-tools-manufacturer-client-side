module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
  daisyui: {
    themes: [
      {
        light: {

          // "primary": "#4a16b9",
          // "primary": "#f9e45b",
          "primary": "#550065",

          "secondary": "#e7968b",

          "accent": "#FFEDD5",

          "neutral": "#F3F4F6",

          // "base-100": "#FFFFFF",
          // "base-100": "#98D4D2",
          "base-100": "#550065",

          "info": "#98A8DD",

          "success": "#1BBB70",

          // "warning": "#DF7E07",
          "warning": "#FF004C",

          // "error": "#FA5C5C",
          "error": "#f9e45b",
        },
      }

    ],
  },
  plugins: [require("daisyui")],
}
