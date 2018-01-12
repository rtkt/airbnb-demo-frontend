import React from 'react';
import styled from 'styled-components';
import { Img, VerticalContainer as Container } from '../../UI/Card';

const Place = styled.span`
  font-size: 8px;
  font-weight: bold;
  margin-top: 6px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 10px;
    margin-top: 11px;
  }
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  margin-top: 1px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Price = styled.span`
  font-size: 14px;
  font-weight: 200;
  opacity: 0.9;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export default function Card(props) {
  return (
    <Container href={props.href} title={props.title}>
      <Img src={props.img} alt={props.alt} title={props.alt} />
      <Place>{props.place}</Place>
      <Title>{props.title}</Title>
      <Price>About ${props.price} per person</Price>
    </Container>
  );
}
