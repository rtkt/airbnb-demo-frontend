import React from 'react';
import styled from 'styled-components';

const linkOpts = {
  color: '#383838',
  fontWeight: 'bold',
};

const CardLink = styled.a`
  color: ${linkOpts.color};
  font-weight: ${linkOpts.fontWeight};
  &:link {
    color: ${linkOpts.color};
    font-weight: ${linkOpts.fontWeight};
  }
  &:hover {
    color: ${linkOpts.color};
    font-weight: ${linkOpts.fontWeight};
  }
`;

const Container = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  height: 72px;
  position: relative;
`;

const Text = styled.span`
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
      <CardLink color={props.color} deLink href={props.href} title={props.linkTitle}>
        <Img src={props.img} alt={props.text} title={props.text} />
        <Text>{props.text}</Text>
      </CardLink>
    </Container>
  );
};

export default HorizontalCard;
