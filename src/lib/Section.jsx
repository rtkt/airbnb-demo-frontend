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
  font-size: 14px;
  text-decoration: none;
`;

export const H1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

export const Section = styled.section`
  margin-top: 48px;
`;

export const Heading = function heading(props) {
  return (
    <HeadingWrapper>
      <H1>{props.text}</H1>
      <More />
    </HeadingWrapper>
  );
};

export const More = function more() {
  return (
    <div>
      <SeeAll href="#" title="See all">
        <span>See all</span>
        <MoreButton src={morePic} alt="See all" title="See all" />
      </SeeAll>
    </div>
  );
};
