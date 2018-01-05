import React from 'react';
import styled from 'styled-components';

const lineHeight = 24;

const Box = styled.div`
  position: relative;
`;

const Link = styled.a`
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

const NavLinks = function navLinks(props) {
  return (
    <Box>
      <Link href="#" title="Become a host" height={props.height} right="192px">
        Become a host
      </Link>
      <Link href="#" title="Help" height={props.height} right="136px">
        Help
      </Link>
      <Link href="#" title="Sign up" height={props.height} right="72px">
        Sign up
      </Link>
      <Link href="#" title="Log in" height={props.height} right="8px">
        Log in
      </Link>
    </Box>
  );
};

export default NavLinks;
