const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'main.js'
  },
  mode: 'development',
  devtool: 'sourcemap',
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
  })
  ],
  module: {
    rules: [
        {
          test:/\.(sa|sc|c)ss$/,
          use: [
              devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'sass-loader'
            ]
          }
        ]
        }
      }