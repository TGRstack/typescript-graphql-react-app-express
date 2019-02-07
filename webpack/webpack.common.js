const Dotenv = require('dotenv-webpack');
const fs = require('fs')
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const paths = require('./paths')

// #  RULES
// ## TS w/ BABEL
const typescript = (() => {
  const configFile = path.resolve(paths._, 'tsconfig.json')
  const tsOptions = {
    context: paths._,
    configFile,
    transpileOnly: true,
  }
  const loader = {
    test: /\.ts$/,
    include: paths.src._,
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: true,
        }
      },
      {
        loader: 'ts-loader',
        options: tsOptions
      }
    ]
  }
  // return loader
  const tsPaths = new TsconfigPathsPlugin({
    logLevel: 'info',
    configFile,
  })

  return {
    loader,
    paths: tsPaths,
  }
})()

// ## FILES like csv and images
const files = {
  // test: /\.(png|jpg|gif)$/,
  exclude: [/\.jsx?$/, /\.tsx?$/, /\.s?css$/, /\.html$/, /\.json$/],
  use: [
    {
      loader: 'file-loader',
      options: {
        name (file) {
          if (process.env === 'development' || process.env === undefined) {
            return '[path][name].[ext]'
          }

          return '[hash].[ext]'
        }
      }
    }
  ]
}

// # PLUGINS
const dotEnvOpts = (() => {
  /** dotEnvIfExists
   *
   * Uses .env.development for default values
   */
  const dotEnvIfExists = (() => {
    const envPath = path.join(paths._, '.env')
    const defaultEnvPath = envPath+'.development'

    const envExists = fs.existsSync(envPath)
    return envExists
      ? envPath
      : defaultEnvPath
  })()

  return {
    path: dotEnvIfExists, // path.join(paths._, '.env'), //  dotEnvIfExists,
    // load '.env.development' to verify the '.env' variables are all set.
    safe: path.join(paths._, '.env')+'.development',
    // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    systemvars: true,
    // hide any errors
    // silent: true
  }
})()

module.exports = {
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.csv', '.ts', '.tsx', '.js', '.json', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      typescript.loader,
      // graphql,
      files,
    ],
  },
  plugins: [
    new Dotenv(dotEnvOpts),
    typescript.paths
  ],
}

// ## GRAPHQL
// const graphql = {
//   test: /\.(graphql|gql)$/,
//   exclude: /node_modules/,
//   loader: 'graphql-tag/loader',
// }