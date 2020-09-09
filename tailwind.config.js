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
    backgroundColor: ["responsive", "hover", "focus", "group-hover", "group-focus"],
    opacity: ["responsive", "hover", "focus", "group-hover", "group-focus"],
    transitionDuration: ["responsive", "hover", "focus", "group-hover", "group-focus"],
    transitionProperty: ["responsive", "hover", "focus", "group-hover", "group-focus"],
    translate: ["responsive", "hover", "focus", "group-hover", "group-focus"],
    zIndex: ["responsive", "hover", "focus", "group-hover", "group-focus"]
  }
};
