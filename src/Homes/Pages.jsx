import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import next from './next.svg';

const green = '#008489';

const Container = styled.div`
  font-size: 16px;
  margin-right: 33.3333%;
  margin-top: 48px;
  text-align: center;
`;

const Dots = styled.span`
  margin-right: 14px;
`;

const Page = styled(Link)`
  border: none;
  border-radius: 16px;
  color: ${green};
  display: inline-block;
  height: 32px;
  line-height: 32px;
  margin-left: 8px;
  margin-right: 8px;
  vertical-align: middle;
  width: 32px;

  ${props =>
    props.current &&
    `
    background-color: ${green};
    color: white;
    `};
`;

const Total = styled.div`
  margin-top: 15px;
`;

const Next = Page.extend`
  background-image: url(${next});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border: 1px solid #008489;
  box-sizing: border-box;
  fill: currentColor;
`;

export default function Pages() {
  return (
    <Container>
      <div>
        <Page to="/homes" current>
          1
        </Page>
        <Page to="#">2</Page>
        <Page to="#">3</Page>
        <Dots>...</Dots>
        <Page to="#">17</Page>
        <Next to="#" />
      </div>
      <Total>1 - 18 out of 300+ Rentals</Total>
    </Container>
  );
}
