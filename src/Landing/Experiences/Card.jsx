import React from 'react';
import styled from 'styled-components';
import { Img, Price, Reviews, Rating, Star, VerticalContainer as Container } from '../../UI/Card';
import breakpoints from '../../UI/globals';
import star from '../../UI/star.svg';

const Name = styled.span`
  font-size: 13px;
  font-weight: 200;
  margin-bottom: 5px;
  margin-top: 7px;

  @media (min-width: ${breakpoints.md}) {
    font-size: 15px;
  }
`;

export default function Card(props) {
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
