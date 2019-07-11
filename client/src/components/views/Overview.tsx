import * as React from 'react';
import { Link } from 'react-router-dom';

// partials
import Layout from '../partials/Layout';
import Stats from '../partials/overview/Stats';
// common
import PageTitle from '../common/PageTitle';
import Map from '../common/Map';

export interface Props {
    section: string;
}

class Home extends React.Component<Props, {}> {
    render() {
        const { section } = this.props;

        return (
            <Layout section={section}>
                <PageTitle
                    title="Overview"
                    button={false}
                />
                <Stats/>
                <Map/>
            </Layout>
        );
    }
}

export default Home;
