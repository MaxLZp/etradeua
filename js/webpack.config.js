const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

const srcDirName = 'src';
const outputPath = 'dist';

module.exports = {
    entry: [
        `./${srcDirName}/js/index.js`
    ],
    output: {
        path: path.resolve(__dirname, outputPath),
        filename: 'js/bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: '/dist'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${srcDirName}/index.html`,
            title: 'Demo'
        }),
        new MiniCssPlugin({
            filename: 'css/style.css',
        })
    ]
};