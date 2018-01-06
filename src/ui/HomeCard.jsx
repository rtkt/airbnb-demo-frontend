import React from 'react';
import styled from 'styled-components';
import { Img, Price, Reviews, Rating, Star, VerticalContainer as Container } from '../lib/Card';
import star from '../imgs/star.svg';

const Area = styled.span`
  font-size: 15px;
  font-weight: light;
`;

const Title = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 2px;
  margin-top: 7px;
`;

const PushedReviews = Reviews.extend`
  margin-top: 6px;
`;

function Card(props) {
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

export default Card;
