var webpack = require('webpack');
var path = require("path");

var APP_DIR = path.resolve(__dirname, "Scripts/Source");
var BUILD_DIR = path.resolve(__dirname, "Scripts/Public");

var PROD = process.env.NODE_ENV === "production" ? true : false;

var entryPoint = APP_DIR + '/index.js';
var app = [entryPoint];
var plugins = [];

var config = {
    entry: {
        app: app
    },
    output: {
        path: BUILD_DIR,
        filename: PROD ? "bundle.min.js" : "bundle.js"
    },
    module: {
        loaders:[
        {
            include: APP_DIR,
            loader: "babel-loader"
        }]
    },
    plugins: plugins
};

module.exports = config;