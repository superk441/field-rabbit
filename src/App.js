import React from "react";
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

// routes
import Home from './components/views/Home';
import Profile from './components/views/Profile';

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome to React SSR!",
        };
    }

    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Profile} />
            </Switch>
        );
    }
}

export default Layout;