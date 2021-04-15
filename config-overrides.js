const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
    addWebpackAlias({
        "@App": path.resolve(__dirname, "./src/application"),
        "@Features": path.resolve(__dirname, "./src/features"),
        "@Core": path.resolve(__dirname, "./src/core"),
        "@Pages": path.resolve(__dirname, "./src/pages"),
    })
);
