import React from 'react';
import styled from 'styled-components';
import arrow from '../UI/comboboxButton.svg';

const Combobox = styled.select`
  appearance: none;
  background: white;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: calc(100% - 16px) center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-top: 12px;
  width: 100%;
`;

function LocationOpts() {
  return (
    <form>
      <Combobox name="language">
        <option value="English">English</option>
      </Combobox>
      <Combobox name="currency">
        <option value="United States dollar">United States dollar</option>
      </Combobox>
    </form>
  );
}

export default LocationOpts;
