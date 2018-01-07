import React from 'react';
import Card from './PopularCard';
import { Heading, Section, Slider, SliderButton } from '../lib/Section';
import popularPhoto1 from '../imgs/popular-1.png';
import popularPhoto2 from '../imgs/popular-2.png';
import popularPhoto3 from '../imgs/popular-3.png';
import popularPhoto4 from '../imgs/popular-4.png';

function Popular() {
  return (
    <Section>
      <Heading text="Popular reservations around the world" />
      <Slider className="row">
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            href="#"
            img={popularPhoto1}
            alt="Chumley's"
            place="Speakeasy"
            title="Chumley's"
            price="60"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            href="#"
            img={popularPhoto2}
            alt="Hanjan"
            place="Korean gastropub"
            title="Hanjan"
            price="50"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            href="#"
            img={popularPhoto3}
            alt="Prime Meats"
            place="German american"
            title="Prime Meats"
            price="55"
          />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card
            href="#"
            img={popularPhoto4}
            alt="Seaprice"
            place="Fine seafood"
            title="Seaprice"
            price="70"
          />
        </div>
      </Slider>
      <SliderButton />
    </Section>
  );
}

export default Popular;
