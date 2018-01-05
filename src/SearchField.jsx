import React from 'react';
import styled from 'styled-components';
import searchIcon from './imgs/magnifier.svg';

const SearchBox = styled.form`
  align-items: center;
  border: solid 1px rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.08);
  display: flex;
  margin-top: 16px;
  padding: 12px 0 12px 16px;
`;

const Input = styled.input`
  border: 0;
  display: block;
  font-size: 16px;
  padding: 0;
  padding-left: 16px;
`;

const SearchField = function searchField() {
  return (
    <SearchBox>
      <img src={searchIcon} alt="Search icon" title="Search icon" />
      <Input type="text" name="location" placeholder="Try &quot;Miami&quot;" />
    </SearchBox>
  );
};

export default SearchField;
