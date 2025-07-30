module.exports = {
	arrowParens: 'avoid',
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: 'auto',
	endOfLine: 'lf',
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	requirePragma: false,
	jsxSingleQuote: true,
	plugins: ['prettier-plugin-tailwindcss'],
	printWidth: 80,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	semi: false,
	singleAttributePerLine: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			files: ['**/*.json'],
			options: {
				useTabs: false,
			},
		},
		{
			files: ['**/*.mdx'],
			options: {
				proseWrap: 'preserve',
				htmlWhitespaceSensitivity: 'ignore',
			},
		},
	],
}
