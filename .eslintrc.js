module.exports = {
	root: true,
	extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
  ],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		'react-native/no-inline-styles': 0,
		'@typescript-eslint/no-var-requires': 0,
	},
};