import React from 'react';
import { Main, Footer } from '../lib/Section';
import Bottom from './Bottom';
import Experiences from './Experiences';
import Explore from './Explore';
import Featured from './Featured';
import { Airbnb, Discover, Hosting } from './FooterLinks';
import Homes from './Homes';
import LocationOpts from './LocationOpts';
import Popular from './Popular';

function Landing() {
  return (
    <React.Fragment>
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
          <Bottom />
        </div>
      </Footer>
    </React.Fragment>
  );
}

export default Landing;
