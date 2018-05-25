const path = require( 'path' ),
	webpack = require( 'webpack' ),
	UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' ),
	ImageminPlugin = require( 'imagemin-webpack-plugin' ).default,
	CopyWebpackPlugin = require( 'copy-webpack-plugin' ),
	nodeEnv = process.env.NODE_ENV || 'production'

module.exports = {
	entry:  {
		filename: './src/js/index.js'
	},
	output: {
		filename: 'script.js',
		path:	 path.resolve( __dirname, 'public' )
	},
	devtool: 'source-map',
	module:  {
		loaders: [
			{
				test:	/\.js$/,
				exclude: /node_modules/,
				loader:  'babel-loader',
				query: {
					presets: ['env']
				}
			}
		]
	},
	plugins: [
		new UglifyJSPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			},
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify( nodeEnv ) }
		})
	]
}
