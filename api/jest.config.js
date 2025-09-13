/** @type {import('jest').Config} */
module.exports = {
  rootDir: ".",
  moduleFileExtensions: ["js", "json", "ts"],
  testEnvironment: "node",
  transform: { "^.+\\.(t|j)s$": "ts-jest" },
  testRegex: ".*\\.spec\\.ts$",
  coverageDirectory: "./coverage",
  collectCoverageFrom: ["src/**/*.(t|j)s", "!src/main.ts"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  setupFiles: ["<rootDir>/test/test-env.setup.js"],
};
