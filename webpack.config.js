const dev = process.env.NODE_ENV !== "production";
const path = require( "path" );

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: dev ? "development" : "production",
    context: path.join( __dirname, "src" ),
    devtool: dev ? "none" : "source-map",
    entry: {
        app: "./client.js",
    },
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        modules: [
            path.resolve( "./src" ),
            "node_modules",
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        // you can specify a publicPath here
                        // by default it uses publicPath in webpackOptions.output
                        publicPath: './',
                        hmr: dev,
                        },
                    },
                    'css-loader',
                ]
            }
        ],
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[name].bundle.js",
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.BROWSER': JSON.stringify(true),
        }),
        new MiniCssExtractPlugin({
            filename: './assets/css/style.css'
        })
    ]
};