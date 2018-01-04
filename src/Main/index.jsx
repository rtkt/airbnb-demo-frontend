import React from 'react';
import styled from 'styled-components';
import { H1 } from '../common';
import HorizontalCard from '../HorizontalCard';
import explorePhoto1 from './exploreSection-1.png';
import explorePhoto2 from './exploreSection-2.png';
import explorePhoto3 from './exploreSection-3.png';

const Container = styled.main`
  margin-top: 128px;
`;

const Section = styled.section`
  position: relative;
`;

const Main = function () {
  return (
    <Container>
      <div className="container">
        <Section>
          <H1>Explore</H1>
          <div className="row">
            <div className="col-lg-4">
              <HorizontalCard img={explorePhoto1} text="Homes" />
            </div>
            <div className="col-lg-4">
              <HorizontalCard img={explorePhoto2} text="Experiences" />
            </div>
            <div className="col-lg-4">
              <HorizontalCard img={explorePhoto3} text="Restaurants" />
            </div>
          </div>
        </Section>
      </div>
    </Container>
  );
};

export default Main;
