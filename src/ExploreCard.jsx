import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  align-items: center;
  display: flex;
  font-weight: bold;
  text-decoration: none;
`;

const Img = styled.img`
  width: 96px;
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

const ExploreCard = function exploreCard(props) {
  return (
    <Container>
      <Link href={props.href} title={props.alt}>
        <Img src={props.img} alt={props.alt} title={props.alt} />
        <Text>{props.title}</Text>
      </Link>
    </Container>
  );
};

export default ExploreCard;
