var utils = require('./utils')
var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var visualizer = require('webpack-visualizer-plugin')
process.env.NODE_ENV = 'production'
module.exports = merge(baseWebpackConfig, {
	devtool: 'cheap-module-source-map',
	entry: [
		path.resolve(__dirname, '..','src/index.js'),
	],
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'js/[name].[hash:8].js',
		chunkFilename: 'js/[name].[hash:8].js'
	},
	plugins: [
		new webpack.DefinePlugin({
			process:{
				env:{
					NODE_ENV: JSON.stringify(process.env.NODE_ENV)
				}
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			sourceMap: true
		}),
		new HtmlwebpackPlugin({
			title: 'Amaze+未来之星',
			template: './index.html',
			filename: 'index.html',
			chunksSortMode: 'dependency',
			hash: false,
			inject: true
		}),
		new webpack.HashedModuleIdsPlugin(),
		// split vendor js into its own file
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function (module, count) {
				// any required modules inside node_modules are extracted to vendor
				return (
					module.resource &&
					/\.js$/.test(module.resource) &&
					module.resource.indexOf(
						path.join(__dirname, '../node_modules')
					) === 0
				)
			}
		}),
		// extract webpack runtime and module manifest to its own file in order to
		// prevent vendor hash from being updated whenever app bundle is updated
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			chunks: ['vendor']
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, '../static'),
				to: config.build.assetsSubDirectory,
				ignore: ['.*']
			}
		]),
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '../'), //绝对路径
			verbose: true, //写日志到console
			dry: false //不删除任何东西，好进行测试
		}),
		new visualizer()
	]
})
