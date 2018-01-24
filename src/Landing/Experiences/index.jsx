import React from 'react';
import Card from './Card';
import { Section, SectionHead, Slider, SliderButton } from '../../UI/Section';
import photo1 from './experience-1.png';
import photo2 from './experience-2.png';
import photo3 from './experience-3.png';
import photo4 from './experience-4.png';

export default function Experiences() {
  return (
    <Section>
      <SectionHead to="#" title="Experiences" />
      <Slider className="row">
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            href="#"
            img={photo1}
            alt="Forest therapy"
            title="Forest therapy"
            numOfReviews="44 reviews"
            price="29"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            href="#"
            img={photo2}
            alt="Whale watching"
            title="Whale watching"
            numOfReviews="46 reviews"
            price="69"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            href="#"
            img={photo3}
            alt="Table Mountain Summit, Cable Car Down"
            title="Table Mountain Summit, Cable Car Down"
            numOfReviews="44 reviews"
            price="69"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            href="#"
            img={photo4}
            alt="Salsa night"
            title="Salsa night"
            numOfReviews="44 reviews"
            price="50"
          />
        </div>
      </Slider>
      <SliderButton />
    </Section>
  );
}
