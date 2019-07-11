import * as React from 'react';

// components
import Layout from '../partials/Layout';
import PageTitle from '../common/PageTitle';

export interface Props {
    section: string;
}

class WorkOrders extends React.Component<Props, {}> {
    render() {
        const { section } = this.props;

        return (
            <Layout section={section}>
                <PageTitle
                    title="Work Orders"
                    button={false}
                />
                
            </Layout>
        );
    }
}

export default WorkOrders;