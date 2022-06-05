module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FA4318",
          "secondary": "#020033",
          "accent": "#34495E",
          "neutral": "#171320",
          "base-100": "#ECF0F1",
          "info": "#96BFDF",
          "success": "#3EE08F",
          "warning": "#BB9707",
          "error": "#F7735F",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}
