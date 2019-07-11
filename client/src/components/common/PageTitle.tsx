import * as React from 'react';

export interface Props {
    title?: string;
    button?: boolean;
    buttonText?: string;
}

class PageTitle extends React.Component<Props, {}> {
    render() {
        const { title, buttonText } = this.props;
        let button = this.props.button || false;

        return (
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h1 className="page-title">{ title }</h1>
                </div>
                <div className="col-lg-6 text-right">
                    {
                        button ? 
                        (
                            <button className="btn btn-primary" type="button">
                                { buttonText }
                            </button>
                        ) : null
                    }
                </div>
            </div>
        );
    }
}

export default PageTitle;
