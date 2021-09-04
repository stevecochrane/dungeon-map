module.exports = {
  mode: "jit",
  purge: ["./src/templates/**/*.html", "./src/components/**/*.tsx"],
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
