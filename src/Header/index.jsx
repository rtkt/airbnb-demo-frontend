import React from 'react';
import styled from 'styled-components';
import { Box } from '../common';
import logo from './logo.svg';
import searchIcon from './search.svg';

const barHeight = 80;
const searchHeight = 48;
const links = {
  host: 'host',
  help: 'help',
  sign_up: 'sign-up',
  log_in: 'log-in',
};

const Container = styled.header`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  height: ${barHeight}px;
  left: 0;
  line-height: ${barHeight}px;
  position: fixed;
  right: 0;
  top: 0;
`;

const Logo = styled.img`
  display: inline-block;
  vertical-align: middle;
`;

const SearchField = styled.input`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  height: ${searchHeight}px;
  left: 0;
  padding-left: 53px;
  position: absolute;
  top: 16px;
  width: 100%;
`;

const SearchIcon = styled.img`
  display: inline-block;
  left: 16px;
  position: absolute;
  top: 29px;
`;

const Link = styled.a`
  color: #383838;
  font-family: 'Circular';
  font-size: 14px;
  line-height: 24px;
  padding-left: 8px;
  padding-right: 8px;
  position: absolute;
  right: ${props => props.right};
  text-align: center;
  text-decoration: none;
  top: 27px;
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
          <Box>
            <SearchField type="text" name="location" placeholder="Try &quot;Miami&quot;" />
            <SearchIcon src={searchIcon} alt="Search icon" title="Search icon" />
          </Box>
        </div>
        <div className="col-lg-4 col-lg-offset-2">
          <Box>
            <Link href={links.host} title="Become a host" right="192px">Become a host</Link>
            <Link href={links.help} title="Help" right="136px">Help</Link>
            <Link href={links.sign_up} title="Sign up" right="72px">Sign up</Link>
            <Link href={links.log_in} title="Log in" right="8px">Log in</Link>
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default Header;
