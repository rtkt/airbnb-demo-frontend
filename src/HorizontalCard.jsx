import React from 'react';
import styled from 'styled-components';

const linkOpts = {
  color: '#383838',
  fontWeight: 'bold',
};

const CardLink = styled.a`
  align-items: center;
  color: ${linkOpts.color};
  display: flex;
  font-weight: ${linkOpts.fontWeight};
  text-decoration: none;
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
`;

const Text = styled.span`
  font-size: 17px;
  margin-left: 24px;
`;

const HorizontalCard = function horizontalCard(props) {
  return (
    <Container>
      <CardLink href={props.href} title={props.linkTitle}>
        <img src={props.img} alt={props.text} title={props.text} />
        <Text>{props.text}</Text>
      </CardLink>
    </Container>
  );
};

export default HorizontalCard;
