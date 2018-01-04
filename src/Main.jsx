import React from 'react';
import styled from 'styled-components';
import HorizontalCard from './HorizontalCard';
import explorePhoto1 from './imgs/explore-1.png';
import explorePhoto2 from './imgs/explore-2.png';
import explorePhoto3 from './imgs/explore-3.png';
import morePic from './imgs/seeAllButton.svg';

const linkOpts = {
  color: '#383838',
};

const Container = styled.main`
  margin-top: 128px;
`;

const H1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

const HeadingWrapper = styled.div`
  align-items: baseline;
  display: flex;
  margin-bottom: 24px;
  justify-content: space-between;
`;

const MoreContainer = styled.div`
  color: #383838;
  font-size: 14px;
`;

const MoreButton = styled.img`
  margin-left: 8px;
`;

const Section = styled.section`
  margin-top: 48px;
`;

const SeeAllLink = styled.a`
  color: ${linkOpts.color};
  text-decoration: none;
  &:link {
    color: ${linkOpts.color};
  }
  &:hover {
    color: ${linkOpts.color};
  }
`;

const ExploreRow = function exploreRow() {
  return (
    <div className="row">
      <div className="col-lg-4">
        <HorizontalCard href="#" img={explorePhoto1} linkTitle="Homes" text="Homes" />
      </div>
      <div className="col-lg-4">
        <HorizontalCard href="#" img={explorePhoto2} linkTitle="Experiences" text="Experiences" />
      </div>
      <div className="col-lg-4">
        <HorizontalCard href="#" img={explorePhoto3} linkTitle="Restaurants" text="Restaurants" />
      </div>
    </div>
  );
};

const ExperiencesRow = function experiencesRow() {
  return (
    <div className="row">
      <p>test</p>
    </div>
  );
};

const Heading = function heading(props) {
  return (
    <HeadingWrapper>
      <H1>{props.text}</H1>
      <More />
    </HeadingWrapper>
  );
};

const More = function more() {
  return (
    <MoreContainer>
      <SeeAllLink href="#" title="See all">
        <span>See all</span>
        <MoreButton src={morePic} alt="See all" title="See all" />
      </SeeAllLink>
    </MoreContainer>
  );
};

const Main = function main() {
  return (
    <Container>
      <div className="container">
        <Section>
          <H1>Explore</H1>
          <ExploreRow />
        </Section>
        <Section>
          <Heading text="Experiences" />
          <ExperiencesRow />
        </Section>
      </div>
    </Container>
  );
};

export default Main;
