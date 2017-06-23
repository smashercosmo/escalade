const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		app: './app.js',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
	},

	module: {

		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: { presets: ['es2015'] }
				}]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: { importLoaders: 1 },
						},
						'postcss-loader',
					],
				}),
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('[name].css')
	]
}
