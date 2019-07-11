const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../'),
    mode: 'development',
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './client/index.tsx',
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
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
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    // },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './server/views/index.dev.html',
            inject: false,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
