import React from 'react';
import styled from 'styled-components';
import arrow from './imgs/comboboxButton.svg';

const Container = styled.footer`
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  margin-top: 64px;
  padding-top: 48px;
`;

const Combobox = styled.select`
  appearance: none;
  background: white;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: calc(100% - 16px) center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-top: 12px;
  width: 100%;
`;

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

const Footer = function footer() {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <form>
              <Combobox name="language">
                <option value="English">English</option>
              </Combobox>
              <Combobox name="currency">
                <option value="United States dollar">United States dollar</option>
              </Combobox>
            </form>
          </div>
          <div className="col-lg-2 col-lg-offset-1">
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
          </div>
          <div className="col-lg-2 col-lg-offset-1">
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
          </div>
          <div className="col-lg-2 col-lg-offset-1">
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
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
