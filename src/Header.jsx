import React from 'react';
import styled from 'styled-components';
import SearchField from './SearchField';
import NavLinks from './NavLinks';
import logo from './imgs/logo.svg';

const height = 80;

const Container = styled.header`
  background-color: white;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const Logo = styled.img`
  display: inline-block;
  padding-top: 24px;
  padding-bottom: 24px;
  vertical-align: middle;
`;

const Header = function header() {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-lg-1">
            <Logo src={logo} alt="Logo" title="Logo" />
          </div>
          <div className="col-lg-5">
            <SearchField height={height} />
          </div>
          <div className="col-lg-4 col-lg-offset-2">
            <NavLinks height={height} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
