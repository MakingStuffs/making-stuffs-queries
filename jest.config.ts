import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

export default async (silent: boolean): Promise<Config> => ({
  verbose: true,
  roots: ["<rootDir>"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts$": "@swc/jest",
  },
  testRegex: ["^.+\\.test\\.ts$"],
  moduleDirectories: ["src", "node_modules"],
  setupFilesAfterEnv: silent ? ["<rootDir>/__tests__/setup.js"] : [],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
  },
});
