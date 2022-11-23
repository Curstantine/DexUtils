/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{svelte,ts}"
	],
	theme: {
		fontFamily: {
			sans: ["JetBrains Mono", "monospace"]
		},
		colors: {
			"gbh-1": "#282828",
			"gbh-2": "#504945",
			"gbh-3": "#DFBF8E",
			"gbh-teal": "#7DAEA3"
		}
	},
	plugins: []
};
