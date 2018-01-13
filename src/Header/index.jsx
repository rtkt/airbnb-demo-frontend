import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoints from '../UI/globals';
import Search from './Search';
import Nav from './Nav';
import logo from './logo.svg';
import menuButton from '../UI/menuButton.svg';

const Container = styled.header`
  background-color: white;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 11;
`;

const Logo = styled.img`
  margin-right: 5px;
  padding-top: 24px;
  padding-bottom: 24px;
  vertical-align: middle;

  @media (min-width: ${breakpoints.md}) {
    margin-right: 0;
  }
`;

const LogoWrapper = styled.div`
  display: inline-block;
  margin-right: 8px;

  @media (min-width: ${breakpoints.md}) {
    margin-right: 16px;
  }
  @media (min-width: ${breakpoints.lg}) {
    margin-right: 51px;
  }
`;

export default function Header() {
  return (
    <Container>
      <div className="container">
        <LogoWrapper>
          <Link to="/">
            <Logo src={logo} alt="Logo" title="Logo" />
          </Link>
          <a className="hidden-lg hidden-xl" title="Menu">
            <img src={menuButton} alt="Menu" title="Menu" />
          </a>
        </LogoWrapper>
        <Search />
        <Nav />
      </div>
    </Container>
  );
}
