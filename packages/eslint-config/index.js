module.exports = {
	parser: `babel-eslint`, // allows linting of experimental features from babel
	extends: [
		`eslint:recommended`,
		`plugin:react/recommended`,
		`plugin:jest/recommended`,
	],
	env: {
		node: true,
		es6: true,
		jest: true,
	},
	globals: {
		graphql: true,
		window: true,
		document: true,
		localStorage: true,
	},
	plugins: [
		`react`,
		`jest`,
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 9,
		sourceType: `module`,
	},
	rules: {
		indent: [
			`error`,
			`tab`,
			{
				SwitchCase: 1,
			},
		],
		'linebreak-style': [
			`error`,
			`unix`,
		],
		quotes: [
			`error`,
			`backtick`,
		],
		semi: [
			`error`,
			`never`,
		],
		'comma-dangle': [
			`error`,
			`always-multiline`,
		],
		'no-console': 0,
		'require-atomic-updates': 0,
		'no-unused-expressions': 0,
		'react/jsx-uses-vars': 1,
		'react/prop-types': 0,
		'react/no-unescaped-entities': 0,
		'react/display-name': 0,
	},
}