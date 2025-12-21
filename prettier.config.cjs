/** @type {import('prettier').Config} */
module.exports = {
	arrowParens: 'avoid',
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: 'auto',
	endOfLine: 'lf',
	htmlWhitespaceSensitivity: 'css',
	jsxSingleQuote: true,
	printWidth: 80,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	semi: false,
	singleQuote: true,
	singleAttributePerLine: false,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,

	tailwindStylesheet: './app/styles/app.css',

	plugins: ['prettier-plugin-tailwindcss'],

	overrides: [
		{
			files: ['**/*.{js,jsx,ts,tsx}'],
			options: { singleAttributePerLine: true },
		},
		{
			files: ['**/*.json'],
			options: { useTabs: false },
		},
		{
			files: ['**/*.mdx'],
			options: { proseWrap: 'preserve' },
		},
	],
}
