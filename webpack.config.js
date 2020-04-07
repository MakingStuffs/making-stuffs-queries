const path = require('path');
module.exports = {
    entry: ['./making-stuffs-queries.js', './README.md', './LICENSE'],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.md$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }, 
            {
                test: /LICENSE/,
                loader: 'file-loader',
                options: {
                    name: '[name]'
                }
            }
        ]
    },
    output: {
        filename: 'making-stuffs-queries.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
}