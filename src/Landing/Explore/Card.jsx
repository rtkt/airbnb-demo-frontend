import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  flex-direction: flex-start;
  display: flex;
  flex-direction: column;
  font-weight: bold;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Img = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    width: 96px;
  }
`;

const Container = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
`;

const Text = styled.span`
  font-size: 12px;
  margin-bottom: 17px;
  margin-left: 12px;
  margin-top: 18px;

  @media (min-width: 768px) {
    font-size: 17px;
    margin: 0;
    margin-left: 24px;
  }
`;

function Card(props) {
  return (
    <Container>
      <Link className="middle-md" href={props.href} title={props.alt}>
        <Img src={props.img} alt={props.alt} title={props.alt} />
        <Text>{props.title}</Text>
      </Link>
    </Container>
  );
}

export default Card;
