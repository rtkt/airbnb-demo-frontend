import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import breakpoints from '../UI/globals';

const Container = styled.div`
  display: none;

  @media (min-width: ${breakpoints.lg}px) {
    display: block;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 137px;
    width: 33.3333%;
  }
`;

export default class GMap extends React.Component {
  defaults = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11,
  };

  render() {
    return (
      <Container>
        <GoogleMapReact
          defaultCenter={this.defaults.center}
          defaultZoom={this.defaults.zoom}
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GAPI_KEY,
            language: 'en',
          }}
        />
      </Container>
    );
  }
}
