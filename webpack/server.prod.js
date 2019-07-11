const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    context: path.resolve(__dirname, '../'),
    mode: 'production',
    devtool: 'source-map',
    entry: [
        './server/index.js',
    ],
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
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
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new UglifyJSPlugin({
            sourceMap: true
        }),
    ],
};
