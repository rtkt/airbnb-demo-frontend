import React from 'react';
import styled from 'styled-components';
import { Img, Price, Reviews, Rating, Star, VerticalContainer as Container } from '../UI/Card';
import breakpoints from '../UI/globals';
import star from '../UI/star.svg';

const Area = styled.span`
  font-size: 12px;
  font-weight: light;

  @media (min-width: ${breakpoints.md}px) {
    font-size: 15px;
  }
`;

const Title = styled.span`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 2px;
  margin-top: 7px;

  @media (min-width: ${breakpoints.md}px) {
    font-size: 15px;
  }
`;

const PushedReviews = Reviews.extend`
  margin-top: 6px;
`;

export default function Card(props) {
  return (
    <Container href={props.href} title={props.alt}>
      <Img src={props.img} alt={props.alt} title={props.alt} />
      <Title>
        <Price>{props.price} </Price>
        {props.title}
      </Title>
      <Area>{props.area}</Area>
      <PushedReviews>
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Star src={star} />
        <Rating>{props.rating}</Rating>
      </PushedReviews>
    </Container>
  );
}
