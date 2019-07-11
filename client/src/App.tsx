import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

// routes
import Overview from './components/views/Overview';
import Customers from './components/views/Customers';
import WorkOrders from "./components/views/WorkOrders";

export interface Props {}

interface State {
    title: string;
}

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: "Welcome to React SSR!",
        };
    }

    render() {
        return (
            <Switch>
                <Route 
                    path="/" 
                    exact 
                    component={(props: any) => <Overview {...props} section="overview"/>}
                />
                <Route 
                    path="/customers" 
                    component={(props: any) => <Customers {...props} section="customers"/>}
                />
                <Route 
                    path="/work-orders" 
                    component={(props: any) => <WorkOrders {...props} section="work-orders"/>}
                />
            </Switch>
        );
    }
}

export default App;