import React from 'react';
import HorizontalCard from './HorizontalCard';
import { H1, Section } from './lib/Section';
import explorePhoto1 from './imgs/explore-1.png';
import explorePhoto2 from './imgs/explore-2.png';
import explorePhoto3 from './imgs/explore-3.png';

const Explore = function explore() {
  return (
    <Section>
      <H1>Explore</H1>
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
    </Section>
  );
};

export default Explore;
