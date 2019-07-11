import * as React from 'react';

export interface Props {
    body?: boolean;
    title?: string;
    children: any;
}

class Card extends React.PureComponent<Props, {}> {
    static defaultProps = {
        body: true,
        title: '',
    }

    render() {
        const { body, title, children } = this.props;
        const titleComponent = (
            <div>
                <h4 className="font-weight-bold">{ title }</h4>
                <hr className="mt-0"/>
            </div>
        )

        return (
            <div 
                className={`card ${ body? 'card-body' : null } border-0 shadow-sm mb-4`}
            >
                { title ? titleComponent : null }
                { children }
            </div>
        )
    }
}

export default Card;