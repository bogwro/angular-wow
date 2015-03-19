var webpack = require('webpack');
var path = require('path');
var bower_dir = path.join(__dirname, 'bower_components');
var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {
    context: __dirname,
    entry: {
        angularWoW: './src/index.js'
    },
    externals: {
        "angular": "angular"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '[name]'
    }
};

module.exports = config;