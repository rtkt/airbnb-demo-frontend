import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Logo = styled.img`

`;

const Header = function () {
  return (
    <header className="container-fluid">
      <Logo className="col-lg-1" src={logo} alt="Logo" title="Logo" />
    </header>
  );
};

export default Header;
