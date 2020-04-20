/* eslint-disable */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// React uses same package to add css vendor prefixes.
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    mode: 'production',
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'client_bundle.js',
        path: path.resolve(__dirname, 'build/public'),
        publicPath: '/build/public'
    },
    module: {
        rules: [
            {
                // To make sure eslint checks will be handled before transpiling.
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
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
                sideEffects: true,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/public/css/',
                        },
                    },
                    'css-loader',
                    {
                        // CSS transformer
                        loader: 'postcss-loader',
                        options: { plugins: [autoprefixer()] }
                    }
                ]
            },
            {
                test: [/\.png$/, /.svg$/, /\.jpg$/, /\.gif/],
                loader: 'file-loader',
                options: {
                    name: "/assets/media/[name].[ext]",
                    publicPath: url => url.replace(/\/assets/, "")
                }
            }
        ]
    },
    plugins: [
        /** 
         * Generates auotmatically an html and includes styles/scripts 
         * into the generated html file 
         */
        // new HtmlWebpackPlugin({
        //     filename: 'main.html',
        //     template: './public/index.html',
        //     publicPath: '/public/'
        // }),
        
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    optimization: {
        /**
         * Tree shaking configurations starts here
         */
        usedExports: true,
        // minimizer: [
        //     new TerserPlugin()
        // ]
        /**
         * Tree shaking configurations ends here
         */
    }
}