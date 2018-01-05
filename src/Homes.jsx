import React from 'react';
import HomeCard from './HomeCard';
import { Heading, Section } from './lib/Section';
import homePhoto1 from './imgs/home-1.png';
import homePhoto2 from './imgs/home-2.png';
import homePhoto3 from './imgs/home-3.png';

const Homes = function homes() {
  return (
    <Section>
      <Heading text="Homes" />
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
    </Section>
  );
};

export default Homes;
