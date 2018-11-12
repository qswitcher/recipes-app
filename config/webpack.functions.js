const webpack = require("webpack");

module.exports = {
    // utf-8-validate and bufferutil are dependencys in ws which are surrounded in try/catch's. Webpack doesn't
    // know to ignore these and blows up since they're dev dependencies.
    // module: {
    //     rules: [
    //         {
    //             test: /\.mjs$/,
    //             include: /node_modules/,
    //             type: "javascript/auto"
    //         }
    //     ]
    // },
    plugins: [new webpack.IgnorePlugin(/utf-8-validate|bufferutil/)]
};
