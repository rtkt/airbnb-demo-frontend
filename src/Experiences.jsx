import React from 'react';
import Card from './ExperienceCard';
import { Heading, Section } from './lib/Section';
import experiencePhoto1 from './imgs/experience-1.png';
import experiencePhoto2 from './imgs/experience-2.png';
import experiencePhoto3 from './imgs/experience-3.png';
import experiencePhoto4 from './imgs/experience-4.png';

const Experiences = function experiences() {
  return (
    <Section>
      <Heading text="Experiences" />
      <div className="row">
        <div className="col-lg-3">
          <Card
            href="#"
            img={experiencePhoto1}
            alt="Forest therapy"
            name="Forest therapy"
            numOfReviews="44 reviews"
            price="29"
          />
        </div>
        <div className="col-lg-3">
          <Card
            href="#"
            img={experiencePhoto2}
            alt="Whale watching"
            name="Whale watching"
            numOfReviews="46 reviews"
            price="69"
          />
        </div>
        <div className="col-lg-3">
          <Card
            href="#"
            img={experiencePhoto3}
            alt="Table Mountain Summit, Cable Car Down"
            name="Table Mountain Summit, Cable Car Down"
            numOfReviews="44 reviews"
            price="69"
          />
        </div>
        <div className="col-lg-3">
          <Card
            href="#"
            img={experiencePhoto4}
            alt="Salsa night"
            name="Salsa night"
            numOfReviews="44 reviews"
            price="50"
          />
        </div>
      </div>
    </Section>
  );
};

export default Experiences;
