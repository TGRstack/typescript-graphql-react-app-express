<p>
  <h1 align='center'>Typescript GraphQL React App w/ Express | TGRStack</h1>
</p>

**Development and Production Ready |⸰| [VSCode Extensions](https://marketplace.visualstudio.com/search?term=tgrstack&target=VSCode&category=All%20categories&sortBy=Relevance)**
 <!-- |⸰| Dockers for Dev and Prod -->

[![Known Vulnerabilities](https://snyk.io/test/github/TGRstack/typescript-graphql-react-app-express/badge.svg)](https://snyk.io/test/github/TGRstack/typescript-graphql-react-app-express)

[![TypeScript](https://img.shields.io/badge/TypeScript-3.3.1-blue.svg?style=flat-square)](https://github.com/Microsoft/TypeScript)
[![React](https://img.shields.io/badge/React-16.7.0-blue.svg?style=flat-square)](https://github.com/facebook/react)
[![Jest](https://img.shields.io/badge/Jest-24.1.0-blue.svg?style=flat-square)](https://github.com/kulshekhar/ts-jest)
[![ApolloClient](https://img.shields.io/badge/ApolloClient-2.4.12-blue.svg?style=flat-square)](https://github.com/apollographql/apollo-client)
[![WebPack](https://img.shields.io/badge/WebPack-4.29.1-blue.svg?style=flat-square)](https://github.com/webpack/webpack/)
[![Node](https://img.shields.io/badge/Node-11.9.0-blue.svg?style=flat-square)](https://nodejs.org/en/)

[![TSLint](https://img.shields.io/badge/TS_Lint-5.11.0-8400ff.svg?style=flat-square)](https://github.com/palantir/tslint/)
[![TS-Jest](https://img.shields.io/badge/TS_Jest-23.10.5-8400ff.svg?style=flat-square)](https://github.com/kulshekhar/ts-jest)

[![NPS friendly](https://img.shields.io/badge/NPS-friendly-brightgreen.svg?style=flat-square)](https://github.com/kentcdodds/nps)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-friendly-brightgreen.svg?style=flat-square)](https://commitizen.github.io/cz-cli/)
[![Semver friendly](https://img.shields.io/badge/SemVer-friendly-brightgreen.svg?style=flat-square)](https://docs.npmjs.com/about-semantic-versioning)

[![ExpressServer](https://img.shields.io/badge/Express_Server-4.16.4-red.svg?style=flat-square)](https://github.com/expressjs/express)
[![ApolloServer](https://img.shields.io/badge/Apollo_Server-2.3.3-red.svg?style=flat-square)](https://github.com/apollographql/apollo-server)

## About

**Expose all the knobs  |⸰| As lean as a racehorse can get |⸰| Fork and keep as an upstream, then create your own endpoints**

The skeleton-tgr-app-express is an express server that loads a React App. This skeleton demonstrates building a server and client in a single 'fullstack' repo. This is especially useful for developing horizontally scaling webservices with Docker. It is a combination of the work done in a react-app skeleton and an express-endpoint skeleton.

**The point of view prioritized is app development with very rare changes to anything outside**

1) the express service is based on [typescript-apollo-endpoint](https://github.com/TGRstack/typescript-apollo-endpoint)
2) the react app is based on [typescript-graphql-react-app](https://github.com/TGRstack/typescript-graphql-react-app)
3) webpack compiles the app and server, and then express serves the app
4) the server and app are similarly structured with a `stack.ts`, `config`, and `middleware`

## TGR Packages (npm - @tgrx)

```bash
  "dependencies": {
    "@tgrx/apollo-link-state": "0.4.3",
  },
  "devDependencies": {
    "@tgrx/tslint-config-tgr": "5.0.0", # TGR tslint settings for minimial clutter
  }
```

## Upgrading your Skeleton from an upstream

[Github Documentation](https://help.github.com/articles/merging-an-upstream-repository-into-your-fork/)

### Initial Setup

1) First, clone this repo to your local machine
2) Change the remote name `git remote rename origin upstream`
3) Create a new repository in github/gitlab
4) Add the new remote `git remote add origin <your-new-address>`

### Usage

When updates for the upstream are available, merge them into your skeleton

```bash
git pull upstream master
# Handle merge conflicts if necessary
git commit # commit the changes if necessary
git push origin master
```

## Developing a TS-Service

After you've cloned this repo and ran `npm i -D`, do the following:

in your **terminal**:

```bash
$ nps
# Starts the development environment w/ watch-rebuilds for client & server
```

## Commands - READ THIS

Check out the shortcuts at `/scripts/shortcuts.js` like `nps lf` or `nps c`

```bash
* nps                   # Executes the module, watching for rebuilds.
* nps help              # Displays all available commands
* nps commit            # Creates a commit, don't use `git commit -m ...`
* nps build             # Builds the module
* nps lint              # Lint checks the module
* nps test              # Test checks the module
```

## Features

### Core

- [x] 🚀  ES2018+ support syntax that is stage-3 or later in the TC39 process.
- [x] 🎛  Preconfigured to support development and optimized production builds
- [x] 🎶  `typescript` incremental returns reducing development bugs
- [x] 📻  `apollo-client` w/ `link-state` instead of `react-redux`
- [x] 🌐  `express-server` loose downstream of `TGRstack/skeleton-ts-service`

### React

- [x] 🐉  React 16+
- [ ] 👾 HMR reloads the Changed Code w/o refreshing the entire page

### CSS

Whatever your component styling method is all projects need a way of doing some s?css.

- [x] 🌅 `typings-for-css-modules-loader` replaces 'css-loader' for webpack
- [x] 🎠 `typings-for-css-modules-loader` generates d.ts for css files
- [x] 🌇 `sass-loader` adds vars, imports, heirarchies to css.

### Style

- [x] 🚦  `tslint` configured for strict, consistent, code style
- [ ] 🚦  `ts-prettier` for some of that code-consistancy that's missing from tslint
- [ ] 🚦  `SonarTS` Static code analyzer detects bugs and suspicious patterns

### Tests

- [x] 🎭 `jest` as the test framework.
- [x] 🎭 `ts-jest` configured to test TS files, uses tsconfig.jest.json, and skip babel.
- [x] 🎭 `enzyme`  makes it easier to assert, manipulate, and traverse components.
- [x] 🎭 `react-testing-library` maintainable tests that avoid impl. details.
- [x] 🎭 `jest-dom` patterns for dom testing, compat w/ `react-testing-library`.

### Build (w/ Webpack)

- [x] 📦  All source is bundled using Webpack v4
- [x] 🌟  webpack for dev, prod, common
- [x] 🚦  `ts-loader` for compiling typescript
- [ ] 🚦  `webpack-graphql-loader` for separating gql from ts files
- [x] 💦  babel-loader for additional polyfills (browser support)
- [ ] 😎  `HappyPack` for ts-loader
- [x] 🤖  code chunking for better production performance
- [x] 🤖  Vendor.js for better developer experience
- [ ] 🤖  Vendor DLL for better performance
- [x] 🎄  Tree-shaking
- [x] 👻  DotEnv w/ friendly features [docs: DotEnv](#docs-dotenv)
- [x] ⛷  Module Aliasing [docs: Module Aliasing](#docs-module-aliases)
- [x] ✨  `terser-webpack-plugin` instead of `uglifyJS`

### Utils

- [x] 🎮  `nps` npm scripts w/o a bloated package.json and limits of json [docs: NPS](#docs-nps).
- [x] 🙌  `commitizen` to help us generate beautifully formatted and consistent commit messages.
- [x] 😹  `cz-emoji` is a plugin for commitizen that adds emoji to the commit template.
- [x] 🏆  `standard-version` is a replacement for `npm version` with automatic CHANGELOG generation
- [ ] ✅  `commitlint` validates commit messages to follow commitizen patterns

## Getting started

To use the starter-kit to build your own ts-module run these commands:

```bash
git clone https://github.com/TGRstack/typescript-graphql-react-app-express my-project
cd my-project
rm -rf .git && git init
# nps c # for nps commit instead of running git commit
git commit -m "INIT'd w/ TGRstack/typescript-graphql-react-app-express@SHA4985"
npm install
nps test
nps
```

Open package.json and reset following fields:

```text
- name
- version ( It is recommended to start from 1.0.0 )
- description
- repository.url
- author
- license ( use whatever you want )
```

Now go make some changes to `src/app/index.ts` to see the tooling in action.

# SRC structure

Everything in this source directory is **typescript**, built by **webpack** and compiled into  **/build**

```text
.
├── app/
│   ├── index.tsx             # app entry point (webpack client build)
│   ├── index.template.html   # client entry point (express html served)
│   ├── assets/               # static files
│   ├── components/
│   ├── config/               # client config
│   ├── gql/                  # replaces redux
│   ├── middleware/
│   ├── modules/              # first-party modules (co-developed)
│   │   └── some-lib          # pre-cursor to extracting to a standalone module
│   ├── root/                 # global definitions
│   │   ├── application.tsx
│   │   ├── stack.tsx
│   │   ├── global.scss
│   │   └── theme.scss
│   ├── routes/               # each route can have multiple viewports
│   ├── types/                # appp ts modules, common, interfaces
│   └── utils/                # useful functions
│
└── server/
    ├── index.ts              # build/service entry point
    ├── stack.ts              # import service & middlewares
    ├── __tests__/            # tests for stack.ts
    ├── config/               # server configs and vars
    ├── middlewares/          # third-party HOC functionality (apollo, loggers, routers)
    ├── modules/              # first-party modules (co-developed)
    │   └── some-lib          # pre-cursor to extracting to a standalone module
    ├── service/              # service initialization (express, apollo, storybook)
    ├── types/                # server ts modules, common, interfaces
    └── utils/                # useful functions
```

## Stack

- [TS-React-App](https://github.com/TGRstack/typescript-graphql-react-app)
- [TS-Apollo(GraphQL)-Endpoint(API)](https://github.com/TGRstack/typescript-apollo-endpoint)
- [TS-Module](https://github.com/Falieson/2018-typescript-module)

## Docs

- [HowTo make a TS Module w/ Declarations](http://www.tgrstack.com/#ts-module_articles)
- [Changelog](/CHANGELOG.md)

### docs-dotenv

Webpack is configured to use a DotEnv plugin and uses DotEnv files in specific ways.

1. Everything in `.env.example` is considered a required .env field (compiler complains)
2. `.env.development` will be used if `.env` is missing
3. In production just use .env, this is ignored by git (as it should be!)

### docs-module-aliases

Module aliases are defined in 2 places because of an issue w/ [tsconfig-paths-webpack-plugin](https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/34)

- Aliasing for typescript, ts-node, ts-jest, the IDE are defined in `tsconfig.json` as expected.
- Since the webpack plugin isn't working, aliases are duplicated in `./webpack/config.js`.

**Any changes to one requires a change to the other!**

### docs-nps

`node-package-scripts` removes the limitation of package.json enabling Javascript and //comments. 

To change scripts modify `/scripts/` and use `nps <command>` instead of `npm run <command>`.
The entry point for nps is `./package-scripts.js` which routes to `scripts/index.js` which routes to the friendlier `scripts/__index.js`.

# FAQ

## Where are all the files in my IDE?

You must be using vscode! I have configured vscode workspace settings to hide everything from the filebrowser that you're unlikely to touch in day-to-day development.

Many files are still accessible through search (ctrl+p), such as the `./vscode/settings.json` file where you can comment/uncomment my decisions and make everything your own.

P.S. you may like the tgrstack snippets extension since its formatted following the linting preferneces here.
