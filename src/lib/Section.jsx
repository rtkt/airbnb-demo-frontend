import React from 'react';
import styled from 'styled-components';
import morePic from '../imgs/seeAllButton.svg';

const HeadingWrapper = styled.div`
  align-items: baseline;
  display: flex;
  margin-bottom: 24px;
  justify-content: space-between;
`;

const MoreButton = styled.img`
  margin-left: 8px;
`;

const SeeAll = styled.a`
  font-size: 12px;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Section = styled.section`
  margin-top: 40px;

  @media (min-width: 768px) {
    margin-top: 48px;
  }
`;

const H1NoMargins = H1.extend`
  margin-bottom: 0;
  margin-top: 0;
`;

export function Heading(props) {
  return (
    <HeadingWrapper>
      <H1NoMargins>{props.text}</H1NoMargins>
      <More />
    </HeadingWrapper>
  );
}

export function More() {
  return (
    <div>
      <SeeAll href="#" title="See all">
        <span>See all</span>
        <MoreButton src={morePic} alt="See all" title="See all" />
      </SeeAll>
    </div>
  );
}
