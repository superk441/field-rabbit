const dev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: dev ? 'development' : 'production',
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './client/index.js',
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    resolve: {
        modules: [path.resolve('./src'), 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //     {
            //         loader: 'file-loader',
            //         options: {}  
            //     }
            //     ]
            // },
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: './assets/[name].css',
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './server/views/index.dev.html'),
            inject: false,
        }),
    ],
};
