import React from 'react';
import styled from 'styled-components';
import facebook from '../imgs/facebook.svg';
import instagram from '../imgs/instagram.svg';
import logo from '../imgs/white-logo.svg';
import twitter from '../imgs/twitter.svg';

const Container = styled.div`
  align-items: center;
  color: #636363;
  display: flex;
  font-size: 15px;
`;

const Icon = styled.img`
  margin-left: 12px;
`;

const Left = Container.extend`
  justify-content: flex-start;
`;

const Link = styled.a`
  margin-right: 16px;
`;

const Logo = styled.img`
  margin-right: 12px;
`;

const Right = Container.extend`
  justify-content: flex-end;
`;

const Social = styled.div`
  margin-left: 24px;
`;

const Wrapper = styled.div`
  margin-bottom: 34px;
  margin-top: 82px;
`;

function Bottom() {
  return (
    <Wrapper className="row">
      <Left className="col-lg-2">
        <Logo src={logo} alt="Logo" title="Logo" />
        <span>© Airbnb Inc.</span>
      </Left>
      <Right className="col-lg-4 col-lg-offset-6">
        <Link href="#" title="Terms">
          Terms
        </Link>
        <Link href="#" title="Privacy">
          Privacy
        </Link>
        <Link href="#" title="Site Map">
          Site Map
        </Link>
        <Social>
          <a href="#" title="Facebook">
            <Icon src={facebook} alt="Facebook" title="Facebook" />
          </a>
          <a href="#" title="Twitter">
            <Icon src={twitter} alt="Twitter" title="Twitter" />
          </a>
          <a href="#" title="Instagram">
            <Icon src={instagram} alt="Instagram" title="Instagram" />
          </a>
        </Social>
      </Right>
    </Wrapper>
  );
}

export default Bottom;
