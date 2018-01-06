import React from 'react';
import Card from './HomeCard';
import { Heading, Section } from '../lib/Section';
import photo1 from '../imgs/home-1.png';
import photo2 from '../imgs/home-2.png';
import photo3 from '../imgs/home-3.png';

function Homes() {
  return (
    <Section>
      <Heading text="Homes" />
      <div className="row">
        <div className="col-lg-4">
          <Card
            href="#"
            img={photo1}
            alt="La Salentina"
            title="La Salentina, see, nature & relax"
            area="Entire house · 9 beds"
            rating="97 · Superhost"
            price="82"
          />
        </div>
        <div className="col-lg-4">
          <Card
            href="#"
            img={photo2}
            alt="Your private 3 bedroom"
            title="Your private 3 bedr. riad and exclusi..."
            area="Entire house · 5 beds"
            rating="161 · Superhost"
            price="82"
          />
        </div>
        <div className="col-lg-4">
          <Card
            href="#"
            img={photo3}
            alt="Dreamy Tropical Tree House"
            title="Dreamy Tropical Tree House"
            area="Entire treehouse · 1 bed"
            rating="364 · Superhost"
            price="200"
          />
        </div>
      </div>
    </Section>
  );
}

export default Homes;
