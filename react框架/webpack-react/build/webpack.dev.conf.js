var utils = require('./utils')
var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
	devtool: 'cheap-module-source-map',
	entry: [
		require.resolve('react-dev-utils/webpackHotDevClient'),
		// We ship a few polyfills by default:
		require.resolve('./polyfills'),
		path.resolve(__dirname, '..','src/index.js'),
	],
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].js'
	},
	devServer: {
		port: 8099,
		historyApiFallback: true,
		host:'0.0.0.0',
		inline: true,
		disableHostCheck: true,
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		//只要配置dev server map这个参数就可以了
		proxy: {
			'/api/*': {
				target: 'localhost:80',
				secure: false
			}
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': config.dev.env
		}),
		new HtmlwebpackPlugin({
			title: 'Amaze+未来之星',
			template: './index.html',
			filename: 'index.html',
			chunksSortMode: 'dependency',
			hash: false,
			inject: true
		}),
		// https://github.com/glenjamin/webpack-hot-middleware#installation--usage
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new OpenBrowserPlugin({ url: 'http://localhost:8099' }),
		new FriendlyErrorsPlugin()
	]
})
