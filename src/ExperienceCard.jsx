import React from 'react';
import styled from 'styled-components';
import { Img, Price, Reviews, Rating, Star, VerticalContainer as Container } from './lib/Card';
import star from './imgs/star.svg';

const Name = styled.span`
  font-size: 15px;
  font-weight: 200;
  margin-bottom: 6px;
  margin-top: 8px;
`;

const PlaceCard = function placeCard(props) {
  return (
    <Container>
      <Img src={props.img} alt={props.alt} title={props.alt} />
      <Name>
        <Price>{props.price} </Price>
        {props.title}
      </Name>
      <Reviews>
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Rating>{props.numOfReviews}</Rating>
      </Reviews>
    </Container>
  );
};

export default PlaceCard;
