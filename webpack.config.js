var path = require('path');

var config = {
    context: __dirname,
    entry: {
        angularWoW: './src/index.js'
    },
    externals: {
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '[name]'
    }
};

module.exports = config;