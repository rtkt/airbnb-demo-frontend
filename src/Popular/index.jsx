import React from 'react';
import Card from './Card';
import { Heading, Section } from '../lib/Section';
import popularPhoto1 from './popular-1.png';
import popularPhoto2 from './popular-2.png';
import popularPhoto3 from './popular-3.png';
import popularPhoto4 from './popular-4.png';

function Popular() {
  return (
    <Section>
      <Heading text="Popular reservations around the world" />
      <div className="row">
        <div className="col-lg-3">
          <Card
            href="#"
            img={popularPhoto1}
            alt="Chumley's"
            place="Speakeasy"
            title="Chumley's"
            price="60"
          />
        </div>
        <div className="col-lg-3">
          <Card
            href="#"
            img={popularPhoto2}
            alt="Hanjan"
            place="Korean gastropub"
            title="Hanjan"
            price="50"
          />
        </div>
        <div className="col-lg-3">
          <Card
            href="#"
            img={popularPhoto3}
            alt="Prime Meats"
            place="German american"
            title="Prime Meats"
            price="55"
          />
        </div>
        <div className="col-lg-3">
          <Card
            href="#"
            img={popularPhoto4}
            alt="Seaprice"
            place="Fine seafood"
            title="Seaprice"
            price="70"
          />
        </div>
      </div>
    </Section>
  );
}

export default Popular;