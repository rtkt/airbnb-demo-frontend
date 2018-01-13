import React from 'react';
import styled from 'styled-components';
import breakpoints from '../UI/globals';

const Button = styled.button`
  background-color: white;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  margin: 12px;
  margin-left: 0;
  padding: 7px 16px;
`;

const Container = styled.div`
  background: white;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  left: 0;
  position: fixed;
  right: 0;
  top: 80px;
  z-index: 10;
`;

const HideableBtn = Button.extend`
  display: none;

  @media (min-width: ${breakpoints.lg}) {
    display: inline-block;
  }
`;

export default function Filters() {
  return (
    <Container>
      <div className="container">
        <Button type="button">Dates</Button>
        <Button type="button">Guests</Button>
        <HideableBtn type="button">Room type</HideableBtn>
        <HideableBtn type="button">Price</HideableBtn>
        <HideableBtn type="button">Instant book</HideableBtn>
        <Button type="button">More filters</Button>
      </div>
    </Container>
  );
}
