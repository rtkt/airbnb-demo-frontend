import React from 'react';
import styled from 'styled-components';
import Card from './ExploreCard';
import { H1, Section } from '../lib/Section';
import photo1 from '../imgs/explore-1.png';
import photo2 from '../imgs/explore-2.png';
import photo3 from '../imgs/explore-3.png';

const Row = styled.div`
  flex-wrap: nowrap;
  overflow: auto;
`;

function Explore() {
  return (
    <Section>
      <H1>Explore</H1>
      <Row className="row">
        <div className="col-lg-4 col-md-5 col-xs-6">
          <Card href="#" img={photo1} title="Homes" alt="Homes" />
        </div>
        <div className="col-lg-4 col-md-5 col-xs-6">
          <Card href="#" img={photo2} title="Experiences" alt="Experiences" />
        </div>
        <div className="col-lg-4 col-md-5 col-xs-6">
          <Card href="#" img={photo3} title="Restaurants" alt="Restaurants" />
        </div>
      </Row>
    </Section>
  );
}

export default Explore;
