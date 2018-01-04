import React from 'react';
import styled from 'styled-components';
import MainSection from '../MainSection/';
import Header from '../Header/';
import HorizontalCard from '../HorizontalCard/';
import exploreSectionPhoto1 from '../imgs/exploreSection-1.png';
import exploreSectionPhoto2 from '../imgs/exploreSection-2.png';
import exploreSectionPhoto3 from '../imgs/exploreSection-3.png';

const Main = styled.main`
  margin-top: 128px;
`;

const App = function () {
  return [
    <Header />,
    <Main>
      <div className="container">
        <MainSection heading="Explore Airbnb">
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
        </MainSection>
      </div>
    </Main>,
  ];
};

export default App;
