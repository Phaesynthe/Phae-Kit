/* global require */
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    // Each discrete module that is to be build should be listed here
    'demo': './ui/demo.jsx'
  },
  output: {
    path: path.resolve('.tmp'),
    filename: '[name].min.js'
  },
  module: {
    loaders: [
      // Javascript Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015' ] }
      },

      // Jsx React Files
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        query: { presets:[ 'react', 'es2015' ] }
      },

      // Scss files
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([ 'css-loader', 'sass-loader' ])
      }
    ]
  },
  plugins: [
    // Clear dist directory
    new CleanWebpackPlugin([ '.tmp' ]),

    // Compress JS files
    new webpack.optimize.UglifyJsPlugin(),

    // Set export path for generated style sheets
    new ExtractTextPlugin('[name].min.css'),

    // Minify generated CSS
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),

    // Copy static Assets
    new CopyWebpackPlugin([
      { from: 'ui/asset', to: 'asset/' }
    ])

  ],
  resolve: {
    alias: {
      // Component: path.resolve(__dirname, './ui/components/'),
      // Style: path.resolve(__dirname, './ui/style/')
    }
  }
};
