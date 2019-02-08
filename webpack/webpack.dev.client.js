// const webpack = require('webpack')
const merge = require('webpack-merge');

const { HOST_PATH, bulkyModules } = require('./config')
const commonClient = require('./webpack.common.client');

const DevClientConfig = merge(commonClient, {
  mode: 'development',
  entry: {
    vendor: bulkyModules,
  },
  output: {
    filename: '[name].js',
    // chunkFilename: '[name].bundle.js',
    publicPath: HOST_PATH,
  },
  devtool: 'inline-source-map',
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    // usedExports aka Treeshaking
    // TerserPlugin does this in prod
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        },
      }
    },
    runtimeChunk: true
  }
})

module.exports = DevClientConfig
