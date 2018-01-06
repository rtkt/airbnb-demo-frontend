import React from 'react';
import styled from 'styled-components';
import { H1, Section, Slider, SliderButton } from '../lib/Section';
import { VerticalContainer as Container, Img } from '../lib/Card';
import photo1 from '../imgs/featured-1.png';
import photo2 from '../imgs/featured-2.png';
import photo3 from '../imgs/featured-3.png';
import photo4 from '../imgs/featured-4.png';
import photo5 from '../imgs/featured-5.png';
import photo6 from '../imgs/featured-6.png';

const Title = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin-top: 8px;
  line-height: 18px;
`;

function Card(props) {
  return (
    <Container href={props.href} title={props.alt}>
      <Img src={props.img} alt={props.alt} title={props.alt} />
      <Title>{props.title}</Title>
    </Container>
  );
}

function Featured() {
  return (
    <Section>
      <H1>Featured destinations</H1>
      <Slider className="row">
        <div className="col-lg-2">
          <Card href="#" img={photo1} alt="Paris" title="Paris" />
        </div>
        <div className="col-lg-2">
          <Card href="#" img={photo2} alt="Miami" title="Miami" />
        </div>
        <div className="col-lg-2">
          <Card href="#" img={photo3} alt="Tokyo" title="Tokyo" />
        </div>
        <div className="col-lg-2">
          <Card href="#" img={photo4} alt="Cape town" title="Cape town" />
        </div>
        <div className="col-lg-2">
          <Card href="#" img={photo5} alt="Seoul" title="Seoul" />
        </div>
        <div className="col-lg-2">
          <Card href="#" img={photo6} alt="Los Angeles" title="Los Angeles" />
        </div>
      </Slider>
      <SliderButton />
    </Section>
  );
}

export default Featured;
