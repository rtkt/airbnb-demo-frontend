import React from 'react';
import styled from 'styled-components';
import SearchField from '../SearchField/';
import NavLinks from '../NavLinks/';
import logo from './logo.svg';

const height = 80;

const Container = styled.header`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  height: ${height}px;
  left: 0;
  line-height: ${height}px;
  position: fixed;
  right: 0;
  top: 0;
`;

const Logo = styled.img`
  display: inline-block;
  vertical-align: middle;
`;

const Header = function () {
  return (
    <Container className="container-fluid">
      <div className="row">
        <div className="col-lg-1">
          <Logo src={logo} alt="Logo" title="Logo" />
        </div>
        <div className="col-lg-5">
          <SearchField />
        </div>
        <div className="col-lg-4 col-lg-offset-2">
          <NavLinks />
        </div>
      </div>
    </Container>
  );
};

export default Header;
