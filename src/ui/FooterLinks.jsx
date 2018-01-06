import React from 'react';
import styled from 'styled-components';

const HeaderLink = styled.a`
  font-weight: bold;
  margin-bottom: 16px;
`;

const Link = styled.a`
  margin-top: 8px;
`;

const VerticalContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export function Airbnb() {
  return (
    <VerticalContainer>
      <HeaderLink href="#" title="Airbnb">
        Airbnb
      </HeaderLink>
      <Link href="#" title="About us">
        About us
      </Link>
      <Link href="#" title="Careers">
        Careers
      </Link>
      <Link href="#" title="Press">
        Press
      </Link>
      <Link href="#" title="Policies">
        Policies
      </Link>
      <Link href="#" title="Help">
        Help
      </Link>
      <Link href="#" title="Diversity & Belonging">
        Diversity & Belonging
      </Link>
    </VerticalContainer>
  );
}

export function Discover() {
  return (
    <VerticalContainer>
      <HeaderLink href="#" title="Discover">
        Discover
      </HeaderLink>
      <Link href="#" title="Trust & Safety">
        Trust & Safety
      </Link>
      <Link href="#" title="Traver Credit">
        Traver Credit
      </Link>
      <Link href="#" title="Gift Cards">
        Gift Cards
      </Link>
      <Link href="#" title="Airbnb Cititzen">
        Airbnb Cititzen
      </Link>
      <Link href="#" title="Business Travel">
        Business Travel
      </Link>
      <Link href="#" title="Guidebooks">
        Guidebooks
      </Link>
      <Link href="#" title="Airbnbmag">
        Airbnbmag
      </Link>
    </VerticalContainer>
  );
}

export function Hosting() {
  return (
    <VerticalContainer>
      <HeaderLink href="#" title="Hosting">
        Hosting
      </HeaderLink>
      <Link href="#" title="Why Host">
        Why Host
      </Link>
      <Link href="#" title="Hospitality">
        Hospitality
      </Link>
      <Link href="#" title="Responsible Hosting">
        Responsible Hosting
      </Link>
      <Link href="#" title="Community Center">
        Community Center
      </Link>
    </VerticalContainer>
  );
}

export default { Airbnb, Discover, Hosting };
