const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths')
const common = require('./webpack.common')
const { htmlPluginOptions } = require('./config')

const appEntryPath = paths.src.app.entry
const clientAssetPath = paths.src.app.assets
const clientBuildPath = paths.build.app.client

// ## CSS-modules w/ Typescript
// https://medium.com/@kswanie21/css-modules-sass-in-create-react-app-37c3152de9
const moduleCss = {
  test: /\.s?css$/,
  use: [
    'style-loader',
    {
      loader: 'typings-for-css-modules-loader',
      options: {
        modules: true,
        importLoaders: 2,
        localIdentName: '[path][name]__[local]--[hash:base64:5]',
      }
    },
    'sass-loader',
  ],
}

// ## STYLES
// support global files
const globalCss = {
  test: /^global.s?css/,
  loaders: ["style-loader", 'sass-loader',],
}


module.exports = merge(common, {
  entry: {
    app: appEntryPath,
  },
  output: {
    path: clientBuildPath,
  },
  resolve: {
    extensions: ['.png', '.jpe?g', '.gif'],
  },
  target: 'web',
  node: {
    __dirname: false,
    fs: 'empty'
  },
  module: {
    rules: [
      globalCss,
      moduleCss,
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
    new HtmlWebpackPlugin({
      ...htmlPluginOptions,
    }),
  ],
})
