import React from 'react';
import styled from 'styled-components';
import Bottom from './Bottom';
import Experiences from './Experiences/';
import Explore from './Explore/';
import Featured from './Featured';
import FooterLinks from './FooterLinks';
import Header from './Header';
import Homes from './Homes/';
import LocationOpts from './LocationOpts';
import Popular from './Popular/';

const Footer = styled.footer`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  margin-top: 64px;
  padding-top: 48px;
`;

const Main = styled.main`
  margin-top: 120px;

  @media (min-width: 768px) {
    margin-top: 128px;
  }
`;

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <div className="container">
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Featured />
        </div>
      </Main>
      <Footer>
        <div className="container">
          <div className="row">
            <LocationOpts />
            <FooterLinks />
          </div>
          <Bottom />
        </div>
      </Footer>
    </React.Fragment>
  );
}

export default App;
