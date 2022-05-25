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

          "primary": "#4a16b9",

          "secondary": "#e7968b",

          "accent": "#FFEDD5",

          "neutral": "#F3F4F6",

          "base-100": "#FFFFFF",

          "info": "#98A8DD",

          "success": "#1BBB70",

          "warning": "#DF7E07",

          "error": "#FA5C5C",
        },
      }
      
    ],
  },
  plugins: [require("daisyui")],
}
