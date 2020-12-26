module.exports = {
  // Purge is not necessary with twin.macro. It is disabled here to prevent warnings from Tailwind when running
  // a production build.
  purge: false,
  theme: {
    extend: {
      inset: {
        "-1": "-0.25rem",
        "1/2": "50%",
        "1": "0.25rem",
        halfLine: "0.0625rem",
        "-halfLine": "-0.0625rem",
        line: "0.125rem",
        "-line": "-0.125rem"
      },
      spacing: {
        "-3/2": "-150%",
        "11": "2.75rem",
        line: "0.125rem"
      }
    }
  }
};
