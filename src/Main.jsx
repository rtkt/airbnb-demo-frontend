import React from 'react';
import styled from 'styled-components';
import HorizontalCard from './HorizontalCard';
import HomeCard from './HomeCard';
import PlaceCard from './PlaceCard';
import experiencePhoto1 from './imgs/experience-1.png';
import experiencePhoto2 from './imgs/experience-2.png';
import experiencePhoto3 from './imgs/experience-3.png';
import experiencePhoto4 from './imgs/experience-4.png';
import explorePhoto1 from './imgs/explore-1.png';
import explorePhoto2 from './imgs/explore-2.png';
import explorePhoto3 from './imgs/explore-3.png';
import homePhoto1 from './imgs/homes-1.png';
import homePhoto2 from './imgs/homes-2.png';
import homePhoto3 from './imgs/homes-3.png';
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
      <div className="col-lg-3">
        <PlaceCard
          href="#"
          img={experiencePhoto1}
          alt="Forest therapy"
          name="Forest therapy"
          numOfReviews="44 reviews"
          price="29"
        />
      </div>
      <div className="col-lg-3">
        <PlaceCard
          href="#"
          img={experiencePhoto2}
          alt="Whale watching"
          name="Whale watching"
          numOfReviews="46 reviews"
          price="69"
        />
      </div>
      <div className="col-lg-3">
        <PlaceCard
          href="#"
          img={experiencePhoto3}
          alt="Table Mountain Summit, Cable Car Down"
          name="Table Mountain Summit, Cable Car Down"
          numOfReviews="44 reviews"
          price="69"
        />
      </div>
      <div className="col-lg-3">
        <PlaceCard
          href="#"
          img={experiencePhoto4}
          alt="Salsa night"
          name="Salsa night"
          numOfReviews="44 reviews"
          price="50"
        />
      </div>
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

const HomesRow = function homesRow() {
  return (
    <div className="row">
      <div className="col-lg-4">
        <HomeCard
          href="#"
          img={homePhoto1}
          alt="La Salentina"
          name="La Salentina, see, nature & relax"
          area="Entire house · 9 beds"
          rating="97 · Superhost"
          price="82"
        />
      </div>
      <div className="col-lg-4">
        <HomeCard
          href="#"
          img={homePhoto2}
          alt="Your private 3 bedroom"
          name="Your private 3 bedr. riad and exclusi..."
          area="Entire house · 5 beds"
          rating="161 · Superhost"
          price="82"
        />
      </div>
      <div className="col-lg-4">
        <HomeCard
          href="#"
          img={homePhoto3}
          alt="Dreamy Tropical Tree House"
          name="Dreamy Tropical Tree House"
          area="Entire treehouse · 1 bed"
          rating="364 · Superhost"
          price="200"
        />
      </div>
    </div>
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
        <Section>
          <Heading text="Homes" />
          <HomesRow />
        </Section>
      </div>
    </Container>
  );
};

export default Main;
