import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '80%',
    height: '80%',
   
}

export class MapContainer extends Component {
    render() {
        return ( <
            Map google = { this.props.google }
            zoom = { 11 }
            style = { mapStyles }
            initialCenter = {
                {
                    lat: 6.5000,
                    lng: 3.3500
                }
            }
            />
        )
    }
}
export default GoogleApiWrapper ({
    apiKey: ''
})(MapContainer);
