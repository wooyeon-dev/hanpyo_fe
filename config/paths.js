const path = require("path");
const fs = require("fs");

const root = fs.realpathSync(process.cwd());
const getDir = (relativePath) => path.resolve(root, relativePath);

const paths = {
  src: getDir("src"),
  buildPath: getDir("dist"),
  publicPath: "/",
  templatePath: getDir("public")
};

module.exports = paths;
