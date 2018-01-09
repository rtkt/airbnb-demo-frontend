import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 27px;
  margin-top: 27px;
`;

const Link = styled.a`
  font-size: 14px;
  line-height: 24px;
  padding-left: 8px;
  padding-right: 8px;
  text-decoration: none;
`;

function Nav() {
  return (
    <Container className="middle-xs">
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

export default Nav;
