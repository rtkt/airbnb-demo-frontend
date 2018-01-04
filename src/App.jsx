import React from 'react';
import styled from 'styled-components';
import Header from './Header/';
import { H1 } from './common';
import HorizontalCard from './HorizontalCard';
import exploreSectionPhoto1 from './imgs/exploreSection-1.png';
import exploreSectionPhoto2 from './imgs/exploreSection-2.png';
import exploreSectionPhoto3 from './imgs/exploreSection-3.png';

const Main = styled.main`
  margin-top: 128px;
`;

const Section = styled.section`
  position: relative;
`;

const App = function () {
  return [
    <Header />,
    <Main>
      <div className="container">
        <Section>
          <H1>Explore</H1>
          <div className="row">
            <div className="col-lg-4">
              <HorizontalCard img={exploreSectionPhoto1} text="Homes" />
            </div>
            <div className="col-lg-4">
              <HorizontalCard img={exploreSectionPhoto2} text="Experiences" />
            </div>
            <div className="col-lg-4">
              <HorizontalCard img={exploreSectionPhoto3} text="Restaurants" />
            </div>
          </div>
        </Section>
      </div>
    </Main>,
  ];
};

export default App;
