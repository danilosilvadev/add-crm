import type { Config } from "jest";

const config: Config = {
  verbose: true,
  moduleNameMapper: {
    "@config": "<rootDir>/src/config/index.ts",
    "@common": "<rootDir>/src/features/common/index.ts",
    "@main": "<rootDir>/src/features/main/index.ts",
  },
  testEnvironment: "jsdom",
};

export default config;
