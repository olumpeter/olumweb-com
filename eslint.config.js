// eslint.config.js
import tseslint from 'typescript-eslint'
import js from '@eslint/js'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'

export default tseslint.config(
	// Global ignores
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

	// Base config for all JS/TS files (not type-aware)
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			import: eslintPluginImport,
			'unused-imports': eslintPluginUnusedImports,
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'no-unused-vars': [
				'warn',
				{ varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
			],
			'unused-imports/no-unused-imports': 'warn',
			'import/order': [
				'warn',
				{
					groups: [
						'builtin', // e.g., fs, path
						'external', // e.g., react, zod
						'internal', // aliases like '~/components'
						'parent', // ../
						'sibling', // ./file
						'index', // ./index
						'object', // import foo = require(...)
						'type', // import type {...}
					],
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
		},
	},

	// Type-aware rules, all set to 'warn'
	...tseslint.configs.recommendedTypeChecked,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
		rules: {
			'@typescript-eslint/await-thenable': 'warn',
			'@typescript-eslint/no-floating-promises': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/consistent-type-imports': [
				'warn',
				{ prefer: 'type-imports' },
			],
			'@typescript-eslint/no-misused-promises': [
				'warn',
				{
					checksVoidReturn: true,
					checksConditionals: true,
					checksSpreads: true,
				},
			],
			'@typescript-eslint/require-await': 'warn',
			'@typescript-eslint/only-throw-error': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'warn',
			'@typescript-eslint/no-unsafe-member-access': 'warn',
			'@typescript-eslint/no-unsafe-call': 'warn',
			'@typescript-eslint/no-unsafe-return': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-empty-object-type': 'warn',
			'@typescript-eslint/no-namespace': 'warn',
			'@typescript-eslint/no-confusing-void-expression': [
				'warn',
				{ ignoreArrowShorthand: true, ignoreVoidOperator: false },
			],
		},
	},
)
