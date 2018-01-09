import React from 'react';
import { Main } from '../UI/Section';
import Experiences from './Experiences/';
import Explore from './Explore/';
import Featured from './Featured/';
import Footer from '../Footer/';
import Homes from './Homes/';

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
      <Footer />
    </React.Fragment>
  );
}

export default Landing;
