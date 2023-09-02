'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  devtool: 'eval',

  entry: {
    demo: ['webpack/hot/dev-server', './demo/index.js'],
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

  output: {
    filename: 'demo/bundle.js'
  },

  resolve: {
    extensions: ['.js', '.scss']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './demo'
  }
};