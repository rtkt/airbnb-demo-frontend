import React from 'react';
import styled from 'styled-components';
import star from './imgs/star.svg';

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-right: 17px;
`;

const Name = styled.span`
  font-size: 15px;
  font-weight: 200;
  margin-bottom: 6px;
  margin-top: 8px;
`;

const Price = styled.span`
  font-weight: bold;
  &::before {
    content: '$';
  }
`;

const Reviews = styled.span`
  align-items: baseline;
  display: flex;
  font-size: 12px;
`;

const ReviewsCounter = styled.span`
  margin-left: 8px;
`;

const Star = styled.img`
  margin-right: 4px;
`;

const PlaceCard = function placeCard(props) {
  return (
    <Container>
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
        <ReviewsCounter>{props.numOfReviews}</ReviewsCounter>
      </Reviews>
    </Container>
  );
};

export default PlaceCard;
