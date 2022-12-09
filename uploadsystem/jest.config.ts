export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
     "node_modules"
   ],
  coverageProvider: "v8",
  preset: "ts-jest",
  resetMocks: true,
  testMatch: [
     "<rootDir>/src/**/*.spec.ts",
  ],
}