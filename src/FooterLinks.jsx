import React from 'react';
import styled from 'styled-components';

const ListHeader = styled.a`
  font-weight: bold;
  margin-bottom: 16px;
`;

const ListElement = styled.a`
  margin-top: 8px;
`;

const VerticalContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Airbnb = function airbnb() {
  return (
    <VerticalContainer>
      <ListHeader href="#" title="Airbnb">
        Airbnb
      </ListHeader>
      <ListElement href="#" title="About us">
        About us
      </ListElement>
      <ListElement href="#" title="Careers">
        Careers
      </ListElement>
      <ListElement href="#" title="Press">
        Press
      </ListElement>
      <ListElement href="#" title="Policies">
        Policies
      </ListElement>
      <ListElement href="#" title="Help">
        Help
      </ListElement>
      <ListElement href="#" title="Diversity & Belonging">
        Diversity & Belonging
      </ListElement>
    </VerticalContainer>
  );
};

const Discover = function discover() {
  return (
    <VerticalContainer>
      <ListHeader href="#" title="Discover">
        Discover
      </ListHeader>
      <ListElement href="#" title="Trust & Safety">
        Trust & Safety
      </ListElement>
      <ListElement href="#" title="Traver Credit">
        Traver Credit
      </ListElement>
      <ListElement href="#" title="Gift Cards">
        Gift Cards
      </ListElement>
      <ListElement href="#" title="Airbnb Cititzen">
        Airbnb Cititzen
      </ListElement>
      <ListElement href="#" title="Business Travel">
        Business Travel
      </ListElement>
      <ListElement href="#" title="Guidebooks">
        Guidebooks
      </ListElement>
      <ListElement href="#" title="Airbnbmag">
        Airbnbmag
      </ListElement>
    </VerticalContainer>
  );
};

const Hosting = function hosting() {
  return (
    <VerticalContainer>
      <ListHeader href="#" title="Hosting">
        Hosting
      </ListHeader>
      <ListElement href="#" title="Why Host">
        Why Host
      </ListElement>
      <ListElement href="#" title="Hospitality">
        Hospitality
      </ListElement>
      <ListElement href="#" title="Responsible Hosting">
        Responsible Hosting
      </ListElement>
      <ListElement href="#" title="Community Center">
        Community Center
      </ListElement>
    </VerticalContainer>
  );
};

const FooterLinks = function footerLinks() {
  return (
    <React.Fragment>
      <div className="col-lg-2 col-lg-offset-1">
        <Airbnb />
      </div>
      <div className="col-lg-2 col-lg-offset-1">
        <Discover />
      </div>
      <div className="col-lg-2 col-lg-offset-1">
        <Hosting />
      </div>
    </React.Fragment>
  );
};

export default FooterLinks;
