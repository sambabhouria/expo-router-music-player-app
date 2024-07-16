// eslint.config.js
const reactPlugin = require('eslint-plugin-react')
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const tseslint = require('typescript-eslint')
const globals = require('globals')

module.exports = [
	{
		plugins: {
			['@typescript-eslint']: tseslint.plugin,
			['react-hooks']: reactHooksPlugin,
			['react']: reactPlugin,
		},
		// config with just ignores is the replacement for `.eslintignore`
		ignores: [
			'**/node_modules/**',
			'**/.expo/**',
			'**/.next/**',
			'**/__generated__/**',
			'**/build/**',
			'/react-native-lab/react-native/**',
			'/docs/react-native-website/**',
			'**/android/**',
			'**/assets/**',
			'**/bin/**',
			'**/fastlane/**',
			'**/ios/**',
			'**/kotlin/providers/**',
			'**/vendored/**',
			'/docs/public/static/**',
		],
		// extends ...
		// base config
		languageOptions: {
			globals: {
				...globals.es2020,
				...globals.node,
				...globals.es2021,
			},
			parserOptions: {
				allowAutomaticSingleRunInference: true,
				cacheLifetime: {
					// we pretty well never create/change tsconfig structure - so no need to ever evict the cache
					// in the rare case that we do - just need to manually restart their IDE.
					glob: 'Infinity',
				},
				project: ['tsconfig.json', 'packages/*/tsconfig.json'],
				tsconfigRootDir: __dirname,
				warnOnUnsupportedTypeScriptVersion: false,
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 12,
				sourceType: 'module',
			},
		},
		rules: {
			'import/order': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/display-name': 'off',
			'react-hooks/exhaustive-deps': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
	},
]
