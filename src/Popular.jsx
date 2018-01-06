import React from 'react';
import Card from './PopularCard';
import { Heading, Section } from './lib/Section';
import popularPhoto1 from './imgs/popular-1.png';
import popularPhoto2 from './imgs/popular-2.png';
import popularPhoto3 from './imgs/popular-3.png';
import popularPhoto4 from './imgs/popular-4.png';

const Popular = function popular() {
  return (
    <Section>
      <Heading text="Popular reservations around the world" />
      <div className="row">
        <div className="col-lg-3">
          <Card img={popularPhoto1} alt="Chumley's" name="Speakeasy" place="Chumley's" price="60" />
        </div>
        <div className="col-lg-3">
          <Card
            img={popularPhoto2}
            alt="Hanjan"
            title="Korean gastropub"
            place="Hanjan"
            price="50"
          />
        </div>
        <div className="col-lg-3">
          <Card
            img={popularPhoto3}
            alt="Prime Meats"
            title="German american"
            place="Prime Meats"
            price="55"
          />
        </div>
        <div className="col-lg-3">
          <Card
            img={popularPhoto4}
            alt="Seaprice"
            title="Fine seafood"
            place="Seaprice"
            price="70"
          />
        </div>
      </div>
    </Section>
  );
};

export default Popular;
