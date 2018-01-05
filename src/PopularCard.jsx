import React from 'react';
import styled from 'styled-components';
import { Img, VerticalContainer } from './lib/Card';

const Name = styled.span`
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  margin-top: 6px;
  text-transform: uppercase;
`;

const Place = styled.span`
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
    <VerticalContainer>
      <Img src={props.img} alt={props.alt} title={props.alt} />
      <Name>{props.name}</Name>
      <Place>{props.place}</Place>
      <Price>About ${props.price} per person</Price>
    </VerticalContainer>
  );
};

export default PopularCard;
