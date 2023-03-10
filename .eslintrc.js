module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/airbnb',
		'@vue/typescript/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'import/no-extraneous-dependencies': [
			'off',
			{
				devDependencies: false,
				optionalDependencies: false,
				peerDependencies: false,
			},
		],
		'import/prefer-default-export': 'off',
		'linebreak-style': 0,
		indent: [1, 'tab'],
		camelcase: 'off',
		'no-tabs': 0,
		'no-param-reassign': 0,
		'no-explicit-any': 0,
		quotes: ['error', 'single'],
	},
};
