import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    
    render () {
        return (
        <div ref="map" />
        //The ref systems allows us to get a reference to an html element

        );
    }
}

export default GoogleMap;