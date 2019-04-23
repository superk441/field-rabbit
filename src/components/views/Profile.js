import React from "react";
import { Link } from 'react-router-dom';

// components
import Layout from '../partials/Layout';

class Profile extends React.Component {
    render() {
        return (
            <Layout>
                <h1 className="page-title">Profile page</h1>
                <Link to="/">Home</Link>
            </Layout>
        );
    }
}

export default Profile;