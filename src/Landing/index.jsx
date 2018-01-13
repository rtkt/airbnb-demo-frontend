import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import breakpoints from '../UI/globals';
import Experiences from './Experiences/';
import Explore from './Explore/';
import Featured from './Featured/';
import Footer from '../Footer/';
import Homes from './Homes/';
import Popular from './Popular';

const Main = styled.main`
  margin-top: 120px;

  @media (min-width: ${breakpoints.md}) {
    margin-top: 128px;
  }
`;

export default function Landing() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Airbnb</title>
      </Helmet>
      <Main>
        <div className="container">
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Featured />
        </div>
      </Main>
      <Footer />
    </React.Fragment>
  );
}
