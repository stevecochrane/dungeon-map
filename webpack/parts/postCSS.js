const autoprefixer = require("autoprefixer");
const tailwindcss  = require("tailwindcss");

module.exports = () => ({
	loader: "postcss-loader",
	options: {
		plugins: () => ([
			tailwindcss(),
			autoprefixer()
		])
	}
});
