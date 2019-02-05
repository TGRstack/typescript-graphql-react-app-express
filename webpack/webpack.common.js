const Dotenv = require('dotenv-webpack');
const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

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
    test: /\.tsx?$/,
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
  // const tsPaths = new TsconfigPathsPlugin({
  //   configFile,
  //   extensions: [".ts", ".tsx"],
  // })

  return {
    loader,
    // tsPaths,
  }
})()


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


module.exports = {
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.csv', '.ts', '.tsx', '.js', '.json', '.jsx'],
    modules: [paths.src._, paths.node_modules],
    // plugins: [
    //   typescript.paths,
    // ]
  },
  module: {
    rules: [
      typescript.loader,
      globalCss,
      moduleCss,
      files,
    ],
  },
  plugins: [
    new WriteFilePlugin({ log: true }),
    new Dotenv({
      path: path.join(paths._, '.env'),
      safe: true,    // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      // silent: true   // hide any errors
    }),
  ],
};
