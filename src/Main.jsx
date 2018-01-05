import React from 'react';
import styled from 'styled-components';
import Homes from './Homes';
import Explore from './Explore';
import Experiences from './Experiences';
import Popular from './Popular';

const Container = styled.main`
  margin-top: 128px;
`;

const Main = function main() {
  return (
    <Container>
      <div className="container">
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
      </div>
    </Container>
  );
};

export default Main;
