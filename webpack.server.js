const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        '@babel/preset-react',
                        // Let babel know that we want to support last 2 versions of the popular browsers
                        ['@babel/preset-env', {
                            targets: "last 2 versions"
                        }]
                    ]
                }
            }
        ]
    },
    externals: [webpackNodeExternals()]
}