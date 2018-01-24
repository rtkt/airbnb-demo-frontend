import React from 'react';
import Card from '../../Homes/Card';
import {
  Section,
  SectionHead,
  Slider,
  SliderButton,
} from '../../UI/Section';
import photo1 from '../../Homes/home-1.png';
import photo2 from '../../Homes/home-2.png';
import photo3 from '../../Homes/home-3.png';

export default function Homes() {
  return (
    <Section>
      <SectionHead to="/homes" title="Homes" />
      <Slider className="row">
        <div className="col-xs-7 col-md-5 col-lg-4">
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
        <div className="col-xs-7 col-md-5 col-lg-4">
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
        <div className="col-xs-7 col-md-5 col-lg-4">
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
      </Slider>
      <SliderButton />
    </Section>
  );
}
