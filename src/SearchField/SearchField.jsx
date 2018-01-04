import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
  width: 100%;
`;

const Icon = styled.img`
  display: inline-block;
  left: 16px;
  position: absolute;
  top: 13px;
`;

const SearchBox = styled.div`
  height: ${height};
  margin-top: ${props => (props.height - height) / 2}px;
  position: relative;
`;

SearchBox.defaultProps = {
  height: 80,
};

SearchBox.propTypes = {
  height: PropTypes.number,
};

const SearchField = function searchField(props) {
  return (
    /* eslint-disable react/prop-types */
    <SearchBox height={props.height}>
      {/* eslint-enable react/prop-types */}
      <Input type="text" name="location" placeholder="Try &quot;Miami&quot;" />
      <Icon src={searchIcon} alt="Search icon" title="Search icon" />
    </SearchBox>
  );
};

export default SearchField;
