const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')

const paths = require('./paths')
const common = require('./webpack.common')

const serverEntryPath = paths.src.server.entry
const serverBuildPath = paths.build.server._

module.exports = merge(common, {
  externals: [nodeExternals()],
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_PLATFORM': JSON.stringify(paths.SERVER),
    }),
  ],
  entry: serverEntryPath,
  output: {
    filename: '[name].js',
    path: serverBuildPath,
  },
})
