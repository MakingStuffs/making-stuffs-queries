const fs = require("fs");
const path = require("path");
const packageJson = require("./package.json");
const TYPES_PATH = packageJson.types;
const RESOLVED_TYPES_PATH = TYPES_PATH
  ? path.resolve(__dirname, TYPES_PATH)?.replace(/\/[^/]+$/, "/")
  : undefined;

exports.default = ({ orig, file }) => {
  // No types folder
  if (!RESOLVED_TYPES_PATH) return orig;
  // Get the actual import path
  const importPath = orig.replace(/[^"]+"([^"]+)"[^"]*/gi, "$1");
  // Already relative
  if (/^\./.test(importPath)) return orig;
  // Not a type def
  if (!file.includes(RESOLVED_TYPES_PATH)) return orig;
  // Get contents of file
  const fileContents = fs.readFileSync(file, "utf-8");
  const newImportRule = orig?.replace(importPath, `./${importPath}`);
  const newFileContents = fileContents?.replace(orig, newImportRule);
  // Something went wrong, exit
  if (!(newFileContents || fileContents || newFileContents)) return orig;
  // write the file
  fs.writeFileSync(file, newFileContents);
  // Return new im
  return newImportRule;
};
