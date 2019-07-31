const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['public/build']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'build/[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {test: /\.ts?$/, loader: 'ts-loader'}
        ]
    }
}
