import React from 'react';
import styled from 'styled-components';
import { Box } from '../common';
import searchIcon from './search.svg';

const height = 48;

const Input = styled.input`
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  height: ${height}px;
  left: 0;
  padding-left: 53px;
  position: absolute;
  top: 16px;
  width: 100%;
`;

const Icon = styled.img`
  display: inline-block;
  left: 16px;
  position: absolute;
  top: 29px;
`;

const SearchField = function () {
  return (
    <Box>
      <Input type="text" name="location" placeholder="Try &quot;Miami&quot;" />
      <Icon src={searchIcon} alt="Search icon" title="Search icon" />
    </Box>
  );
};

export default SearchField;
