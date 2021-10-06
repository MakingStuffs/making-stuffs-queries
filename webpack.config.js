const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = () => {
  return {
    entry: "./dist/es6/index.js",
    output: {
      clean: true,
      path: path.resolve(__dirname, "dist/es5"),
      filename: "bundle.[contenthash].js",
      library: "making-stuffs-queries",
      libraryTarget: "commonjs2",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
    plugins: [new ESLintPlugin()],
  };
};
