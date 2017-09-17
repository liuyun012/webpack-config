/**
 * USER
 * Created by samli on 30/08/2017.
 */
var path = require('path')
var utils = require('./utils')
var config = require('../config')
const containerPath = path.resolve('./')
function resolve (dir) {
	return path.join(__dirname, '..', dir)
}
module.exports = {
	resolve: {
		alias: {
			
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: ['react-hot-loader', 'babel-loader']
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('media/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ,{
					loader: 'postcss-loader',
					options: {
						config: {
							path: './postcss.config.js'
						}
					}
				}]
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader", // translates CSS into CommonJS
					options : {
						// modules : true
					}
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			}
		]
	}
}
