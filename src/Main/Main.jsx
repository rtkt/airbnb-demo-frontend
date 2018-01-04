import React from 'react';
import styled from 'styled-components';
import { H1 } from '../common';
import HorizontalCard from '../HorizontalCard';
import explorePhoto1 from './exploreSection-1.png';
import explorePhoto2 from './exploreSection-2.png';
import explorePhoto3 from './exploreSection-3.png';
import morePic from './right-ic.svg';

const Container = styled.main`
  margin-top: 128px;
`;

const Section = styled.section`
  position: relative;
`;

const MoreContainer = styled.div`
  color: #383838;
  font-family: 'Circular';
  font-size: 14px;
  line-height: 24px;
  position: absolute;
  right: 22px;
  top: 10px;
  width: 72px;
`;

const MoreButton = styled.img`
  margin-left: 8px;
  vertical-align: middle;
`;

const ExploreRow = function () {
  return (
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
  );
};

const ExperiencesRow = function () {
  return (
    <div className="row">
      <p>test</p>
    </div>
  );
};

const More = function () {
  return (
    <MoreContainer>
      <span>See all</span>
      <MoreButton src={morePic} alt="See all" title="See all" />
    </MoreContainer>
  );
};

const Main = function () {
  return (
    <Container>
      <div className="container">
        <Section>
          <H1>Explore</H1>
          <ExploreRow />
        </Section>
        <Section>
          <H1>Experiences</H1>
          <More />
          <ExperiencesRow />
        </Section>
      </div>
    </Container>
  );
};

export default Main;
