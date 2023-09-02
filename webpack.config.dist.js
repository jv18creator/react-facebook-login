const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',

  devtool: 'source-map',

  entry: {
    'with-button': ['./src/facebook-with-button.js'],
    'render-props': ['./src/facebook.js'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      }
    ]
  },

  externals: {
    'react': 'react',
    'react-dom': 'ReactDOM',
  },

  output: {
    filename: 'facebook-login-[name].js',
    libraryTarget: 'umd',
    library: 'FacebookLogin',
  },

  resolve: {
    extensions: ['.js', '.scss']
  },

  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production'),
  //     },
  //   }),
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false,
  //     },
  //     sourceMap: true,
  //   }),
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.OccurrenceOrderPlugin(),
  // ],
};
