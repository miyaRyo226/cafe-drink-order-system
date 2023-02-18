const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/preset-create-react-app'
	],
	core: {
		builder: 'webpack5'
	},
	framework: '@storybook/react',
	// https://github.com/storybookjs/addon-postcss/issues/33
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.css$/,
			use: [
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [require('tailwindcss'), require('autoprefixer')]
						}
					}
				}
			],
			include: path.resolve(__dirname, '../')
		})
		config.resolve.plugins = [
			...(config.resolve.plugins || []),
			new TsconfigPathsPlugin({
				extensions: config.resolve.extensions
			})
		]
		return config
	}
}
