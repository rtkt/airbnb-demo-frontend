import React from 'react';
import styled from 'styled-components';
import breakpoints from '../UI/globals';
import icon from './magnifier.svg';

const Container = styled.form`
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  margin-bottom: 16px;
  margin-top: 16px;
  width: calc(100% - 60px);

  @media (min-width: ${breakpoints.md}) {
    width: calc(58.3333% - 72px);
  }
  @media (min-width: ${breakpoints.lg}) {
    width: calc(41.6667% - 72px);
  }
`;

const Input = styled.input`
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: 12px center;
  background-size: 14px 15px;
  border: solid 1px rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.08);
  flex-basis: 100%;
  font-size: 16px;
  padding: 12px 0 12px 35px;
  width: 100%;

  @media (min-width: ${breakpoints.md}) {
    background-size: 20px 21px;
    background-position: 16px center;
    padding-left: 49px;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding-left: 53px;
  }
`;

export default function Search() {
  return (
    <Container className="middle-xs">
      <Input type="text" name="location" placeholder="Try &quot;Miami&quot;" />
    </Container>
  );
}
