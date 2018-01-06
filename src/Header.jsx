import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Nav from './Nav';
import logo from './imgs/logo.svg';
import menuButton from './imgs/menuButton.svg';

const Container = styled.header`
  background-color: white;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

const DesktopOnly = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;

const Logo = styled.img`
  padding-top: 24px;
  padding-bottom: 24px;
  vertical-align: middle;
`;

const Menu = styled.a`
  @media (min-width: 992px) {
    display: none;
  }
`;

function Header() {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-xs-3 col-sm-3">
            <Logo src={logo} alt="Logo" title="Logo" />
            <Menu href="#" title="Menu">
              <img src={menuButton} alt="Menu" title="Menu" />
            </Menu>
          </div>
          <div className="col-lg-5 col-md-7 col-xs-9 col-sm-9">
            <Search />
          </div>
          <DesktopOnly className="col-lg-4 col-lg-offset-2">
            <Nav />
          </DesktopOnly>
        </div>
      </div>
    </Container>
  );
}

export default Header;
