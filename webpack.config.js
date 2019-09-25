const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development', // "production" | "development" | "none"
	// Chosen mode tells webpack to use its built-in optimizations accordingly.
	entry: './src/index.js', // string | object | array
	// defaults to ./src
	// Here the application starts executing
	// and webpack starts bundling
	output: {
		// options related to how webpack emits results
		path: path.resolve(__dirname, 'dist'), // string
		// the target directory for all output files
		// must be an absolute path (use the Node.js path module)
		filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.sass$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        // Now we apply rule for images
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: [
               {
                 // Using file-loader for these files
                 loader: "file-loader",
  
                 // In options we can set different things like format
                 // and directory to save
                 options: {
                  name: '[name].[ext]'
                }
                 
               }
             ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
