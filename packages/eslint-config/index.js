/**
 * Shareable minimal ESLint config supporting both TypeScript (for source code,
 * tests, and scripts) and plain JavaScript (mostly for configuration files).
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	overrides: [
		{
			files: ["*.ts"],
			parser: "@typescript-eslint/parser",
			extends: ["plugin:prettier/recommended", "plugin:@typescript-eslint/recommended"],
			plugins: ["@typescript-eslint"],
		},
		{
			files: ["*.js"],
			parser: "@babel/eslint-parser",
			parserOptions: {
				requireConfigFile: false,
			},
			env: {
				browser: true,
				jest: true,
				node: true,
			},
		},
	],
};
