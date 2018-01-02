import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const height = 80;

const Container = styled.header`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  height: ${height}px;
  line-height: ${height}px;
`;

const Logo = styled.img`
  display: inline-block;
  vertical-align: middle;
`;

const Header = function () {
  return (
    <Container className="container-fluid">
      <div className="col-lg-1">
        <Logo src={logo} alt="Logo" title="Logo" />
      </div>
    </Container>
  );
};

export default Header;
