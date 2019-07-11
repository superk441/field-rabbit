import express from "express";
import path from "path";
import exphbs from 'express-handlebars';

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../src/reducers';
import App from "../client/src/App";

const app = express();

app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'hbs');
app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get( "/*", ( req, res ) => {
    const locals = res.locals;
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

    locals.data = reactDom;
    locals.preloadedState = JSON.stringify(preloadedState).replace(/</g,'\\u003c');
    
    res.render('index');
});

app.listen( 2048 );