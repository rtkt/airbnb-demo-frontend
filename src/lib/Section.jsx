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
  position: relative;

  @media (min-width: 768px) {
    margin-top: 48px;
  }
`;

export const Slider = styled.div`
  flex-wrap: nowrap;
  padding-bottom: 1px;
  overflow: auto;
`;

export const SliderButton = styled.button`
  display: none;

  @media (min-width: 992px) {
    box-sizing: border-box;
    background-color: white;
    background-image: url(${morePic});
    background-repeat: no-repeat;
    background-size: 10px 18px;
    background-position: center center;
    border: 0.5px solid rgba(72, 72, 72, 0.2);
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
    border-radius: 20px;
    display: block;
    height: 40px;
    position: absolute;
    right: -20px;
    top: calc(50% - 20px);
    width: 40px;
  }
`;

const CompactH1 = H1.extend`
  margin-bottom: 0;
  margin-top: 0;
`;

export function Heading(props) {
  return (
    <HeadingWrapper>
      <CompactH1>{props.text}</CompactH1>
      <More />
    </HeadingWrapper>
  );
}

function More() {
  return (
    <SeeAll href="#" title="See all">
      <span>See all</span>
      <MoreButton src={morePic} alt="See all" title="See all" />
    </SeeAll>
  );
}
