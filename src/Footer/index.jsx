import React from 'react';
import styled from 'styled-components';
import Basement from './Basement';
import { Airbnb, Discover, Hosting } from './Links';
import LocationOpts from './LocationOpts';

const Container = styled.footer`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  margin-top: 64px;
  padding-top: 48px;
`;

export default function Footer() {
  return (
    <Container className="container">
      <div className="row">
        <div className="col-xs col-md-3">
          <LocationOpts />
        </div>
        <div className="hidden-xs col-md-2 col-md-offset-1">
          <Airbnb />
        </div>
        <div className="hidden-xs col-md-2 col-md-offset-1">
          <Discover />
        </div>
        <div className="hidden-xs col-md-2 col-md-offset-1">
          <Hosting />
        </div>
      </div>
      <Basement />
    </Container>
  );
}
