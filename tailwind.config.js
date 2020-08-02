module.exports = {
  purge: ["./app/templates/**/*.html", "./app/components/**/*.js"],
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
    transitionDuration: ["responsive", "hover"],
    transitionProperty: ["responsive", "hover"],
    zIndex: ["responsive", "hover"]
  }
};
