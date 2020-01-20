module.exports = {
	theme: {
		extend: {
			inset: {
				"-1": "-0.25rem"
			}
		}
	},
	variants: {
		zIndex: ["responsive", "hover"]
	},
	plugins: [
		require("tailwindcss-transitions")()
	]
};
