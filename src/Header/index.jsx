import React from 'react';
import styled from 'styled-components';
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
  padding-top: 24px;
  padding-bottom: 24px;
  vertical-align: middle;
`;

export default function Header() {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-xs-2 col-md-1">
            <Logo src={logo} alt="Logo" title="Logo" />
            <a className="hidden-lg hidden-xl" href="#" title="Menu">
              <img src={menuButton} alt="Menu" title="Menu" />
            </a>
          </div>
          <div className="col-xs-10 col-md-7 col-lg-5">
            <Search />
          </div>
          <div className="hidden-xs hidden-sm hidden-md col-lg-4 col-lg-offset-2">
            <Nav />
          </div>
        </div>
      </div>
    </Container>
  );
}
