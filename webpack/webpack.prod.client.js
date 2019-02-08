const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin')

const commonClient = require('./webpack.common.client');

const ProdClientConfig = merge(commonClient, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash:8].js',
  },
  bail: true,
  devtool: false, // README.md
  plugins: [
    new TerserPlugin({
      parallel: true,
      cache: true,
      terserOptions: {
        ecma: 6, // es2015
        // warnings: true,
        // ie8: true,
        // safari10: true,
      },
    }),
    new webpack.optimize.AggressiveSplittingPlugin({
      minSize: 10000,
      maxSize: 30000,
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: "all",
      minSize: 0,
      minChunks: 1,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
      name: true,
      cacheGroups: {
        default: {
          reuseExistingChunk: true,
          priority: -20,
          minChunks: 2,
        },
        vendors: {
          priority: -10,
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        }
      }
    }
  },
})

module.exports = ProdClientConfig
