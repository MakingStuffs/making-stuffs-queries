const fs = require("fs");
const path = require("path");
const packageJson = require("./package.json");
const tsConfig = require("./tsconfig.json");
const tsConfigProd = require("./tsconfig.esm.json");
const TYPES_PATH = packageJson.types;
const RESOLVED_TYPES_PATH = TYPES_PATH
  ? path.resolve(__dirname, TYPES_PATH)?.replace(/\/[^/]+$/, "/")
  : undefined;

const ROOT_PATH = tsConfigProd?.compilerOptions?.rootDir;

const PATH_ALIASES = tsConfig?.compilerOptions?.paths
  ? Object.keys(tsConfig?.compilerOptions?.paths).map(
      (aliasPath) => aliasPath.split("/*")[0]
    )
  : undefined;

let i = 0;

exports.default = ({ orig, file }) => {
  // No types folder
  if (!RESOLVED_TYPES_PATH) return orig;
  // Get the actual import path
  const importPath = orig.replace(/[^"]+"([^"]+)"[^"]*/gi, "$1");
  // Already relative
  if (/^\./.test(importPath)) return orig;
  const isModule = !!PATH_ALIASES?.find((aliasPath) => {
    const regex = new RegExp(`"${aliasPath}(\/[^"]+|$)"`, "gi");
    return regex.test(orig);
  });
  // Not a type def or module
  if (!file.includes(RESOLVED_TYPES_PATH) && !isModule) return orig;
  // Get contents of file
  const fileContents = fs.readFileSync(file, "utf-8");
  const newImportRule = orig?.replace(importPath, `./${importPath}`);
  const newFileContents = fileContents?.replace(orig, newImportRule);
  // Something went wrong, exit
  if (!(newFileContents || fileContents || newFileContents)) return orig;
  // write the file
  fs.writeFileSync(file, newFileContents, { encoding: "utf-8" });
  // Return new im
  return newImportRule;
};
