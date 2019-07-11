import * as React from 'react';
import GoogleMapReact from 'google-map-react';

import Card from '../common/Card';

class Map extends React.Component<any, {}> {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        const MapComponent = (
            <div style={{width: '100%',height: '300px'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDh0afbqvof1MCRU95ysO0Yh_wYsM3VJ-0' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );

        return(
            <Card body={false}>
                { MapComponent }
            </Card>
        )
    }
}

export default Map;