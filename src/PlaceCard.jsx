import React from 'react';
import styled from 'styled-components';
import { Price, Reviews, RightToStars, Star, VerticalContainer } from './lib/Card';
import star from './imgs/star.svg';

const Name = styled.span`
  font-size: 15px;
  font-weight: 200;
  margin-bottom: 6px;
  margin-top: 8px;
`;

const PlaceCard = function placeCard(props) {
  return (
    <VerticalContainer>
      <img src={props.img} alt={props.alt} title={props.alt} />
      <Name>
        <Price>{props.price} </Price>
        {props.name}
      </Name>
      <Reviews>
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <RightToStars>{props.numOfReviews}</RightToStars>
      </Reviews>
    </VerticalContainer>
  );
};

export default PlaceCard;
