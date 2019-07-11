import * as React from 'react';

// common
import Card from '../../common/Card';
import Chart from '../../common/charts/PieChartWithPassingAngle';

class Stats extends React.PureComponent {
    render() {
        return(
            <div className="row">
                <div className="col-lg-4">
                    <Card body={false}>
                        <div className="bg-theme-light text-center py-2">
                            Inspections
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <Chart/>
                            </div>
                            <div className="col-lg-6">
                                
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card body={false}>
                        <div className="bg-theme-light text-center py-2">
                            Work orders
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <Chart/>
                            </div>
                            <div className="col-lg-6">
                                
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card body={false}>
                        <div className="bg-theme-light text-center py-2">
                            Invoices
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <Chart/>
                            </div>
                            <div className="col-lg-6">
                                
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Stats;