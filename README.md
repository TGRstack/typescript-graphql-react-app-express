<p align='center'>
  <h1 align='center'>Typescript GraphQL React App w/ Express | TGRStack</h1>
</p>

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

This starter kit is a launching point for TS React module development. Running the build script compiles `src/` into a build that is ready to be deployed to a server. This module is part of a collection of uniformly built starter-kits designed for large-scale application development with TypeScript, GraphQL, and React. Find these, articles, and examplse at [www.TGRStack.com](http://www.TGRStack.com). Skip to the bottom for links to a series of tutorials that walkthrough the creation of this module.

## Commands - READ THIS

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
- [x] 👾 HMR reloads the Changed Code w/o refreshing the entire page

### CSS

- [x] 🌅 `typings-for-css-modules-loader` replaces 'css-loader' for webpack
- [x] 🎠 `typings-for-css-modules-loader` generates d.ts for css files
- [x] 🌇 `sass-loader` adds vars, imports, heirarchies to css.
- [ ] replace sass support w/ stylable.io

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
- [ ] 😎  HappyPack
- [ ] 🤖  Auto generated Vendor DLL for smooth development experiences
- [ ] 🍃  Tree-shaking

### Utils

- [x] 🎮  `nps` node-package-scripts removes the limitation of package.json enabling JS & //comments .  Modify `/package-scripts.js` and use `nps <command>` instead of `npm run <command>`.
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

Now go make some changes to `src/index.ts` to see the tooling in action.

## File Structure

```text
src/
├── app/          - global app stuff
├── components/   - the pieces used in the routes, abstracts modules
├── middlewares/  - third-party HOC functionality (apollo, router)
└── modules/      - first-party modules
    └── ui        - prototyping the module before extracting it to its own module
├── routes/       - define page for a route
├── types/        - ts modules, common, interfaces
└── utils/      - useful functions
```

## Stack

- [TS-React-App](https://github.com/TGRstack/typescript-graphql-react-app)
- [TS-Apollo(GraphQL)-Endpoint(API)](https://github.com/TGRstack/typescript-apollo-endpoint)
- [TS-Module](https://github.com/Falieson/2018-typescript-module)

## Docs

- [HowTo make a TS Module w/ Declarations](http://www.tgrstack.com/#ts-module_articles)
- [Changelog](/CHANGELOG.md)
