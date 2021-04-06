const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "@Config": path.resolve(__dirname, "./src/core/config"),
    "@Store": path.resolve(__dirname, "./src/core/store/store"),
    "@ServiceContainer": path.resolve(__dirname, "./src/core/services/ServiceContainer"),

    "@Shared": path.resolve(__dirname, "./src/shared"),
    "@Core": path.resolve(__dirname, "./src/core"),
    "@Pages": path.resolve(__dirname, "./src/pages"),
  })
);
