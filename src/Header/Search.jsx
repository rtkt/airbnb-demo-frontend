import React from 'react';
import styled from 'styled-components';
import icon from './magnifier.svg';

const Container = styled.form`
  display: flex;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const Input = styled.input`
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: 12px center;
  background-size: 14px 15px;
  border: solid 1px rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.08);
  flex-basis: 100%;
  font-size: 16px;
  padding: 12px 0 12px 35px;

  @media (min-width: 768px) {
    background-size: 20px 21px;
    background-position: 16px center;
    padding-left: 49px;
  }

  @media (min-width: 992px) {
    padding-left: 53px;
  }
`;

function Search() {
  return (
    <Container className="middle-xs">
      <Input type="text" name="location" placeholder="Try &quot;Miami&quot;" />
    </Container>
  );
}

export default Search;
