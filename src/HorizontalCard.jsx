import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  height: 72px;
  position: relative;
`;

const Text = styled.span`
  font-family: 'Circular';
  font-size: 17px;
  left: 120px;
  line-height: 72px;
  position: absolute;
  vertical-align: middle;
`;

const Img = styled.img`
  left: 0;
  position: absolute;
  top: 0;
  width: 96px;
`;

const HorizontalCard = function horizontalCard(props) {
  return (
    <Container>
      <Img src={props.img} alt={props.text} title={props.text} />
      <Text>{props.text}</Text>
    </Container>
  );
};

export default HorizontalCard;
