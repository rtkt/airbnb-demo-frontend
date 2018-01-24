import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import GMap from './Map';
import Pages from './Pages';
import photo1 from './home-1.png';
import photo2 from './home-2.png';
import photo3 from './home-3.png';
import photo4 from './home-4.png';
import photo5 from './home-5.png';
import photo6 from './home-6.png';

const Row = styled.div`
  margin-top: 40px;
`;

export default function Content() {
  return (
    <div className="container">
      <Row className="row">
        <div className="col-xs-12 col-md-6 col-lg-4">
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
        <div className="col-xs-12 col-md-6 col-lg-4">
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
      </Row>
      <Row className="row">
        <div className="col-xs-12 col-md-6 col-lg-4">
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
        <div className="col-xs-12 col-md-6 col-lg-4">
          <Card
            href="#"
            img={photo4}
            alt="Best location old town luxury loft"
            title="Best location old town luxury loft"
            area="Entire apartment · 1 bed"
            rating="369 · Superhost"
            price="110"
          />
        </div>
      </Row>
      <Row className="row">
        <div className="col-xs-12 col-md-6 col-lg-4">
          <Card
            href="#"
            img={photo5}
            alt="Lussuoso. Vista incantevole."
            title="Lussuoso. Vista incantevole."
            area="Entire apartment · 6 bed"
            rating="105 · Superhost"
            price="83"
          />
        </div>
        <div className="col-xs-12 col-md-6 col-lg-4">
          <Card
            href="#"
            img={photo6}
            alt="In the historical center of Lecce"
            title="In the historical center of Lecce"
            area="Entire apartment · 3 bed"
            rating="221 · Superhost"
            price="72"
          />
        </div>
      </Row>
      <Pages />
      <GMap />
    </div>
  );
}
