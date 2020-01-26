module.exports = {
	theme: {
		extend: {
			inset: {
				"-1": "-0.25rem"
			},
			spacing: {
				"11": "2.75rem"
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
