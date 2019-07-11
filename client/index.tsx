import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './src/store';
import App from './src/App';

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById( "root" )
);