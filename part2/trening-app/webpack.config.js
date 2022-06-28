var path = require("path");
const { EvalDevToolModulePlugin } = require("webpack");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
    },
    devtool: "source-map",
};
