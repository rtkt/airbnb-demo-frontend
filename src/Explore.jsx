import React from 'react';
import Card from './ExploreCard';
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
          <Card href="#" img={explorePhoto1} title="Homes" alt="Homes" />
        </div>
        <div className="col-lg-4">
          <Card href="#" img={explorePhoto2} title="Experiences" alt="Experiences" />
        </div>
        <div className="col-lg-4">
          <Card href="#" img={explorePhoto3} title="Restaurants" alt="Restaurants" />
        </div>
      </div>
    </Section>
  );
};

export default Explore;
