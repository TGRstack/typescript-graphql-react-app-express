const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = require('./paths')
const common = require('./webpack.common')

const serverEntryPath = paths.src.server.entry
const serverAssetPath = paths.src.server.assets
const serverBuildPath = paths.build.server._

module.exports = merge(common, {
  entry: serverEntryPath,
  output: {
    filename: '[name].js',
    path: serverBuildPath,
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new CopyWebpackPlugin([{
      from: serverAssetPath,
      to: paths.STATICS,
      ignore: [ '.gitkeep' ],
    }], {
      debug: 'info',
    }),
  ],
})
