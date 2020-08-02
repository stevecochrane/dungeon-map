module.exports = {
  theme: {
    extend: {
      inset: {
        "-1": "-0.25rem",
        "1/2": "50%"
      },
      spacing: {
        "11": "2.75rem"
      }
    }
  },
  variants: {
    zIndex: ["responsive", "hover"]
  },
  plugins: [require("tailwindcss-transitions")()]
};
