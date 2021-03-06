import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import breakpoints from '../UI/globals';
import { Button, HideableButton } from './Buttons';
import Content from './Content';
import Dates from './Dates/';

const Filters = styled.div`
  background: white;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  left: 0;
  position: fixed;
  right: 0;
  top: 80px;
  z-index: 10;
`;

const Footer = styled.footer`
  color: #636363;
  font-size: 16px;
  line-height: 19px;
  margin-top: 40px;
  margin-bottom: 88px;
  text-align: center;

  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 24px;
  }
  @media (min-width: ${breakpoints.lg}) {
    margin-right: 33.3333%;
  }
`;

const Main = styled.main`
  margin-top: 160px;
`;

export default function Homes() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Homes</title>
      </Helmet>
      <Main>
        <Filters>
          <div className="container">
            <Dates />
            <Button>Guests</Button>
            <HideableButton>Room type</HideableButton>
            <HideableButton>Price</HideableButton>
            <HideableButton>Instant book</HideableButton>
            <Button>More filters</Button>
          </div>
        </Filters>
        <Content />
      </Main>
      <div className="container">
        <Footer>
          Enter dates to see full pricing. Additional fees apply. Taxes may be added
        </Footer>
      </div>
    </React.Fragment>
  );
}
