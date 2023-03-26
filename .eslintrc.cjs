module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:jest-react/recommended',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			js: true
		},
	},
	plugins: [ 'react', 'jest-react' ],
	rules: {				
		'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
		'react/jsx-uses-vars': 2,		
		'block-spacing': 'error',
		'array-bracket-spacing': [ 'error', 'always' ],
		'space-in-parens': [ 'error', 'always' ],
		indent: [ 'error', 'tab' ],
		'linebreak-style': [ 'error', 'windows' ],
		quotes: [ 'error', 'single' ],
		semi: [ 'error', 'always' ],
		
	},
};
