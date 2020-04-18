const path = require('path');

module.exports = {
    mode: 'development',
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
    }
}