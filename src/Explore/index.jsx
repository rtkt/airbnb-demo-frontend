import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { H1, Section } from '../lib/Section';
import photo1 from './explore-1.png';
import photo2 from './explore-2.png';
import photo3 from './explore-3.png';

const Row = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-wrap: nowrap;
  margin-left: -8px;
  margin-right: -8px;

  @media (min-width: 768px) {
    overflow: auto;
  }
`;

function Explore() {
  return (
    <Section>
      <H1>Explore</H1>
      <Row>
        <div className="col-lg-4 col-md-5 col-sm-6 col-xs-6">
          <Card href="#" img={photo1} title="Homes" alt="Homes" />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-6 col-xs-6">
          <Card href="#" img={photo2} title="Experiences" alt="Experiences" />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-6 col-xs-6">
          <Card href="#" img={photo3} title="Restaurants" alt="Restaurants" />
        </div>
      </Row>
    </Section>
  );
}

export default Explore;
