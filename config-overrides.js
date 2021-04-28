/* eslint-disable react-hooks/rules-of-hooks */
const {
	override,
	addBundleVisualizer,
	addWebpackModuleRule,
	addWebpackAlias,
	babelInclude,
	useEslintRc,
	addExternalBabelPlugin,
	addBabelPreset,
} = require('customize-cra');

const path = require('path');

module.exports = {
	webpack: override(
		// useEslintRc(),

		//babel
		babelInclude([
			path.resolve('.storybook'),
			path.resolve('src'),
		]),
		addExternalBabelPlugin('@emotion'),
		addBabelPreset('@emotion/babel-preset-css-prop'),

		//webpack
		addWebpackModuleRule({
			test: /\.graphql|gql?$/,
			use: [
				{
					loader: 'webpack-graphql-loader',
					options: {
						minify: true,
					},
				},
			],
		}),
		addWebpackAlias({
			react: path.resolve(path.resolve('../../node_modules/react')), //fix monorepo react duplication
		}),
		
		process.env.BUNDLE_VISUALIZE && addBundleVisualizer(),
	),
	jest: (config) => {
		// config.setupFilesAfterEnv = '<rootDir>/src/setupTests.ts';

		return config;
	},
};
