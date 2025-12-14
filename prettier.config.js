// prettier.config.js
// ✅ Works with Prettier v3 CLI, VS Code, and Tailwind CSS v4
// ✅ Fully ESM-safe

import * as classnames from 'prettier-plugin-classnames'
import * as tailwind from 'prettier-plugin-tailwindcss'

/** @type {import('prettier').Config} */
export default {
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

	plugins: [tailwind, classnames],

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
