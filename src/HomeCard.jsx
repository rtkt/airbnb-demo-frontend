import React from 'react';
import styled from 'styled-components';
import { Price, Reviews, RightToStars, Star, VerticalContainer } from './lib/Card';
import star from './imgs/star.svg';

const Area = styled.span`
  color: #383838;
  font-size: 15px;
  font-weight: light;
`;

const Name = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 2px;
  margin-top: 8px;
`;

const PushedReviews = Reviews.extend`
  margin-top: 6px;
`;

const HomeCard = function homeCard(props) {
  return (
    <VerticalContainer>
      <img src={props.img} alt={props.alt} title={props.alt} />
      <Name>
        <Price>{props.price} </Price>
        {props.name}
      </Name>
      <Area>{props.area}</Area>
      <PushedReviews>
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <RightToStars>{props.rating}</RightToStars>
      </PushedReviews>
    </VerticalContainer>
  );
};

export default HomeCard;
