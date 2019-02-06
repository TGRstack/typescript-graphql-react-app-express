require('autostrip-json-comments');
const tsconfig = require("./tsconfig.json")
const moduleNameMapper = (() => {
  const tsModuleNames = require("tsconfig-paths-jest")(tsconfig)
  delete tsModuleNames['(.*)']

  const otherModuleNames = {
    "\\.(s?css|less)$": "identity-obj-proxy", // mock css
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    "<rootDir>/jest/mocks/fileMock.js",   // mock files
  }
  return {
    ...tsModuleNames,
    ...otherModuleNames,
  }
})()

module.exports = {
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "setupFilesAfterEnv": [
    "<rootDir>/jest/jest.setup.js",
  ],
  "testURL": 'http://localhost',
  "testPathIgnorePatterns": ["/node_modules/", "/.reference/", "/build/", "/scripts/"],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec)s?)\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "moduleDirectories": [
    "node_modules",
    "<rootDir>/src/"
  ],
  "globals": {
    "ts-jest": {
      "diagnostics": false,
      "babelConfig": true,
      "tsConfig": "tsconfig.jest.json"
    }
  },
  moduleNameMapper,
}
