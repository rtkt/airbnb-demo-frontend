import React from 'react';
import styled from 'styled-components';
import breakpoints from '../UI/globals';

const Container = styled.nav`
  margin-bottom: 27px;
  margin-top: 27px;
  text-align: right;
  width: calc(58.3333% - 73px);

  @media (min-width: ${breakpoints.lg}) {
    display: inline-block;
  }
`;

const Link = styled.a`
  box-sizing: border-box;
  font-size: 14px;
  line-height: 24px;
  padding-left: 8px;
  padding-right: 8px;
`;

export default function Nav() {
  return (
    <Container className="hidden-xs hidden-sm hidden-md">
      <Link href="#" title="Become a host">
        Become a host
      </Link>
      <Link href="#" title="Help">
        Help
      </Link>
      <Link href="#" title="Sign up">
        Sign up
      </Link>
      <Link href="#" title="Log in">
        Log in
      </Link>
    </Container>
  );
}
