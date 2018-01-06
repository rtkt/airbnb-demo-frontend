import React from 'react';
import styled from 'styled-components';
import Experiences from './Experiences';
import Explore from './Explore';
import Featured from './Featured';
import Footer from './Footer';
import Header from './Header';
import Homes from './Homes';
import Popular from './Popular';

const Main = styled.main`
  margin-top: 128px;
`;

const App = function app() {
  return (
    <React.Fragment>
      <Header key="header" />
      <Main key="main">
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
};

export default App;
