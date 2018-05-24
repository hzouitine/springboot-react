const path = require('path');
module.exports = {
    entry: './src/main/js/app.js',
    mode : 'none',
    cache: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
            query: {
                presets: ['env', 'react']
            }
        }
        ]
    },
    devtool: 'cheap-module-eval-source-map'

}