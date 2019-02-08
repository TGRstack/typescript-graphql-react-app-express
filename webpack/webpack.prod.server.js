const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin')

const commonServer = require('./webpack.common.server');

module.exports = merge(commonServer, {
  bail: true,
  devtool: false, // README.md
  mode: 'production',
  plugins: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    }),
  ],
})
