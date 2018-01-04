import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from './common';

const lineHeight = 24;

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
  line-height: ${lineHeight}px;
  padding-left: 8px;
  padding-right: 8px;
  position: absolute;
  right: ${props => props.right};
  text-align: center;
  text-decoration: none;
  top: ${props => (props.height - lineHeight) / 2}px;
  vertical-align: middle;
`;

const NavLinks = function (props) {
  return (
    <Box>
      <Link href={links.host} title="Become a host" height={props.height} right="192px">
        Become a host
      </Link>
      <Link href={links.help} title="Help" height={props.height} right="136px">
        Help
      </Link>
      <Link href={links.sign_up} title="Sign up" height={props.height} right="72px">
        Sign up
      </Link>
      <Link href={links.log_in} title="Log in" height={props.height} right="8px">
        Log in
      </Link>
    </Box>
  );
};

NavLinks.defaultProps = {
  height: 80,
};

NavLinks.propTypes = {
  height: PropTypes.number,
};

export default NavLinks;
