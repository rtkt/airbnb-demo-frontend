import React from 'react';
import styled from 'styled-components';
import breakpoints from '../UI/globals';
import Basement from './Basement';
import { Airbnb, Discover, Hosting } from './Links';
import LocationOpts from './LocationOpts';

const Container = styled.footer`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  margin-top: 40px;
  padding-top: 16px;

  @media (min-width: ${breakpoints.md}) {
    margin-top: 64px;
    padding-top: 40px;
  }
`;

const Row = styled.div`
  margin-bottom: 24px;
`;

export default function Footer() {
  return (
    <Container className="container">
      <Row className="row">
        <div className="col-xs-12 col-md-3">
          <LocationOpts />
        </div>
        <div className="hidden-xs hidden-sm col-md-2 col-md-offset-1">
          <Airbnb />
        </div>
        <div className="hidden-xs hidden-sm col-md-2 col-md-offset-1">
          <Discover />
        </div>
        <div className="hidden-xs hidden-sm col-md-2 col-md-offset-1">
          <Hosting />
        </div>
      </Row>
      <Basement />
    </Container>
  );
}
