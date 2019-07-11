import * as React from "react";
import { Link } from 'react-router-dom';

// components
import Layout from '../partials/Layout';
import PageTitle from '../common/PageTitle';

export interface Props {
    section: string;
}

class Profile extends React.Component<Props, {}> {
    render() {
        const { section } = this.props;

        return (
            <Layout section={section}>
                <PageTitle
                    title="Customers"
                />
                <Link to="/">Home</Link>
            </Layout>
        );
    }
}

export default Profile;