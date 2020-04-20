/* eslint-disable */

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
            },
            {
                test: /\.css$/,
                /**
                 * Making server aware of css imports without using them.
                 * changing path to locals to make sure to generate the correct class
                 * and place them into components when rendering that's built setup.
                 */
                loader: ['css-loader'],
            },
            {
                test: [/\.png$/, /.svg$/, /\.jpg$/, /\.gif/],
                loader: 'file-loader',
                options: {
                    name: "public/assets/media/[name].[ext]",
                    publicPath: url => url.replace(/build\/public\/assets/, ""),
                    // No need to copy the files again, already being copied through client webpack configurations.
                    emit: false
                }
            }
        ]
    },
    externals: [
        webpackNodeExternals()
    ]
}