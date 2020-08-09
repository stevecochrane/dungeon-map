module.exports = {
  purge: ["./app/templates/**/*.html", "./app/components/**/*.js"],
  theme: {
    extend: {
      inset: {
        "-1": "-0.25rem",
        "1/2": "50%",
        "1": "0.25rem"
      },
      spacing: {
        "-3/2": "-150%",
        "11": "2.75rem"
      }
    }
  },
  variants: {
    opacity: ["responsive", "hover", "group-hover"],
    transitionDuration: ["responsive", "hover"],
    transitionProperty: ["responsive", "hover", "group-hover"],
    translate: ["responsive", "hover", "group-hover"],
    zIndex: ["responsive", "hover"]
  }
};
