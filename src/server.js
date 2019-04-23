import express from "express";
import fs from 'fs';
import path from "path";
import hbs from 'handlebars';

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from "./App";

const webpack = require('webpack');
const config = require('../webpack.config');
const devMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);

const app = express();

app.use(devMiddleware(compiler, config.devServer));

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get( "/*", ( req, res ) => {
    const store = createStore(rootReducer);

    const context = { };
    const jsx = (
        <Provider store={store}>
            <StaticRouter context={ context } location={ req.url }>
                <App />
            </StaticRouter>
        </Provider>
    );
    const reactDom = renderToString( jsx );
    const preloadedState = store.getState();

    renderHtml(res, reactDom, preloadedState);
});

app.listen( 2048 );

function renderHtml( res, reactDom, preloadedState ) {
    const indexHtml = path.resolve(__dirname, '../public/index.hbs');
    fs.readFile(indexHtml, 'utf8', (err, source) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        const template = hbs.compile(source);
        const data = {
            root: reactDom,
            preloadedState: JSON.stringify(preloadedState).replace(/</g,'\\u003c'),
        };

        // send html
        res.send(template(data));
    });
}