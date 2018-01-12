import React from 'react';
import styled from 'styled-components';
import breakpoints from '../UI/globals';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import logo from './white-logo.svg';
import twitter from './twitter.svg';

const Row = styled.div`
  align-items: center;
  color: #636363;
  display: flex;
  font-size: 12px;

  @media (min-width: ${breakpoints.lg}px) {
    font-size: 15px;
  }
`;

const Hr = styled.hr`
  background: #484848;
  height: 1px;
  opacity: 0.08;
  width: 100%;
`;

const Icon = styled.img`
  margin-left: 8px;

  @media (min-width: ${breakpoints.md}px) {
    margin-left: 12px;
  }
`;

const Link = styled.a`
  margin-right: 12px;

  &:link,
  &:visited {
    color: #636363;
  }

  @media (min-width: ${breakpoints.md}px) {
    margin-left: 16px;
  }
`;

const Logo = styled.img`
  margin-right: 12px;
`;

const Social = styled.div`
  margin-left: 12px;

  @media (min-width: ${breakpoints.md}px) {
    margin-left: 24px;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 34px;
  margin-top: 32px;
`;

export default function Basement() {
  return (
    <React.Fragment>
      <Hr />
      <Wrapper className="row">
        <Row className="start-xs col-xs-12 col-md-3">
          <Logo src={logo} alt="Logo" title="Logo" />
          <span>© Airbnb Inc.</span>
        </Row>
        <Row className="start-xs col-xs-12 end-md col-md-6 col-md-offset-3">
          <Link href="#" title="Terms">
            Terms
          </Link>
          <Link href="#" title="Privacy">
            Privacy
          </Link>
          <Link href="#" title="Site Map">
            Site Map
          </Link>
          <Social>
            <a href="#" title="Facebook">
              <Icon src={facebook} alt="Facebook" title="Facebook" />
            </a>
            <a href="#" title="Twitter">
              <Icon src={twitter} alt="Twitter" title="Twitter" />
            </a>
            <a href="#" title="Instagram">
              <Icon src={instagram} alt="Instagram" title="Instagram" />
            </a>
          </Social>
        </Row>
      </Wrapper>
    </React.Fragment>
  );
}
