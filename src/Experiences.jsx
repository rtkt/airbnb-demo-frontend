import React from 'react';
import Card from './ExperienceCard';
import { Heading, Section } from './lib/Section';
import photo1 from './imgs/experience-1.png';
import photo2 from './imgs/experience-2.png';
import photo3 from './imgs/experience-3.png';
import photo4 from './imgs/experience-4.png';

const Experiences = function experiences() {
  return (
    <Section>
      <Heading text="Experiences" />
      <div className="row">
        <div className="col-lg-3">
          <Card
            href="#"
            img={photo1}
            alt="Forest therapy"
            title="Forest therapy"
            numOfReviews="44 reviews"
            price="29"
          />
        </div>
        <div className="col-lg-3">
          <Card
            href="#"
            img={photo2}
            alt="Whale watching"
            title="Whale watching"
            numOfReviews="46 reviews"
            price="69"
          />
        </div>
        <div className="col-lg-3">
          <Card
            href="#"
            img={photo3}
            alt="Table Mountain Summit, Cable Car Down"
            title="Table Mountain Summit, Cable Car Down"
            numOfReviews="44 reviews"
            price="69"
          />
        </div>
        <div className="col-lg-3">
          <Card
            href="#"
            img={photo4}
            alt="Salsa night"
            title="Salsa night"
            numOfReviews="44 reviews"
            price="50"
          />
        </div>
      </div>
    </Section>
  );
};

export default Experiences;
