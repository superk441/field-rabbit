import React from "react";
import { Link } from 'react-router-dom';

// components
import Layout from '../partials/Layout';

class Home extends React.Component {
    render() {
        return (
            <Layout>
                <h1 className="page-title">Overview</h1>
                <div className="card card-body border-0 shadow-sm">
                    <Link to="/profile">Profile</Link>
                </div>
            </Layout>
        );
    }
}

export default Home;