// eslint.config.js
import tseslint from '@typescript-eslint/eslint-plugin'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
import parser from '@typescript-eslint/parser'

export default [
	{
		ignores: [
			'**/node_modules/**',
			'**/dist/**',
			'**/build/**',
			'.react-router/types/**',
			'prisma/generated/**',
			'**/*.test.{ts,tsx,js,jsx}',
			'**/tests/**',
			'*.cjs',
			'eslint.config.js',
		],
	},

	// Base config for JS/TS
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			'@typescript-eslint': tseslint,
			import: eslintPluginImport,
			'unused-imports': eslintPluginUnusedImports,
		},
		languageOptions: {
			parser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
		rules: {
			'no-unused-vars': 'off', // Disable default
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
			],
			'unused-imports/no-unused-imports': 'warn',

			'@typescript-eslint/no-floating-promises': 'warn',

			'import/order': [
				'warn',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
						'object',
						'type',
					],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
		},
	},
]
