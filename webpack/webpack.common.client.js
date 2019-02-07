const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const paths = require('./paths')
const common = require('./webpack.common')

const appEntryPath = paths.src.app.entry
const clientAssetPath = paths.src.app.assets
const clientBuildPath = paths.build.client._

// ## STYLES
const styles = {
  test: /\.s?css$/,
  loaders: ["style-loader", "css-loader", "sass-loader"],
}

module.exports = merge(common, {
  entry: appEntryPath,
  output: {
    filename: '[name].js',
    path: clientBuildPath,
  },
  target: 'web',
  node: {
    __dirname: false,
    fs: 'empty'
  },
  module: {
    rules: [
      styles,
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: clientAssetPath,
      to: paths.STATICS,
      ignore: [ '.gitkeep' ],
    }], {
      debug: 'info'
    }),
  ],
})
