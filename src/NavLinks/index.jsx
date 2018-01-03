import React from 'react';
import styled from 'styled-components';
import { Box } from '../common';

const links = {
  host: 'host',
  help: 'help',
  sign_up: 'sign-up',
  log_in: 'log-in',
};

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

const NavLinks = function () {
  return (
    <Box>
      <Link href={links.host} title="Become a host" right="192px">
        Become a host
      </Link>
      <Link href={links.help} title="Help" right="136px">
        Help
      </Link>
      <Link href={links.sign_up} title="Sign up" right="72px">
        Sign up
      </Link>
      <Link href={links.log_in} title="Log in" right="8px">
        Log in
      </Link>
    </Box>
  );
};

export default NavLinks;
