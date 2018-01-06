import React from 'react';
import styled from 'styled-components';
import { Img, VerticalContainer as Container } from './lib/Card';

const Place = styled.span`
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  margin-top: 6px;
  text-transform: uppercase;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
  margin-top: 2px;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: 200;
  mix-blend-mode: normal;
  opacity: 0.9;
`;

const PopularCard = function popularCard(props) {
  return (
    <Container href={props.href} title={props.title}>
      <Img src={props.img} alt={props.alt} title={props.alt} />
      <Place>{props.place}</Place>
      <Title>{props.title}</Title>
      <Price>About ${props.price} per person</Price>
    </Container>
  );
};

export default PopularCard;
