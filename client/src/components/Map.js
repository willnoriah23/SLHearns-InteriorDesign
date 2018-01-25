import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{"Find Me"}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {lat: 42.28, lng: -83.74},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
      lat={42.2808256}
      lng={-83.74303780000002}
      text={'Ann Arbor, MI'}
        />
      </GoogleMapReact>
    );
  }
}


export default GoogleMap;



