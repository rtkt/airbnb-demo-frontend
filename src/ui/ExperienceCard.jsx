import React from 'react';
import styled from 'styled-components';
import { Img, Price, Reviews, Rating, Star, VerticalContainer as Container } from '../lib/Card';
import star from '../imgs/star.svg';

const Name = styled.span`
  font-size: 13px;
  font-weight: 200;
  margin-bottom: 5px;
  margin-top: 7px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

function Card(props) {
  return (
    <Container href={props.href} title={props.alt}>
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
}

export default Card;
