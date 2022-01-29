import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import "./map.css"
import AccessibilityIcon from '@material-ui/icons/Accessibility';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 33.644839,
      lng: 72.994798
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div  className="mapbox" style={{ height: '31vh', width: '25%' }}>
      <span className="title">Location</span>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAuL01coQ2XiTxuoWK-tXPG8pVo9agW3a4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={33.6461532}
            lng={72.9956208}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;