/**
 * USER
 * Created by samli on 01/09/2017.
 */
module.exports = ({ file, options, env }) => ({
	parser: file.extname === '.sss' ? 'sugarss' : false,
	plugins: {
		'postcss-import': { root: file.dirname },
		'postcss-cssnext': options.cssnext ? options.cssnext : false,
		'autoprefixer': env == 'production' ? options.autoprefixer : false,
		'cssnano': env === 'production' ? options.cssnano : false
	}
})