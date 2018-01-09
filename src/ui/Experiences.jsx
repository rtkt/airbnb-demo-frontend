import React from 'react';
import Card from './ExperienceCard';
import { CompactH1, SeeAll, SeeAllContainer, Section, Slider, SliderButton } from '../lib/Section';
import photo1 from '../imgs/experience-1.png';
import photo2 from '../imgs/experience-2.png';
import photo3 from '../imgs/experience-3.png';
import photo4 from '../imgs/experience-4.png';

function Experiences() {
  return (
    <Section>
      <CompactH1>
        Experiences
        <SeeAllContainer to="/experiences">
          <SeeAll />
        </SeeAllContainer>
      </CompactH1>
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

export default Experiences;
