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
  cursor: pointer;
  margin-bottom: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-top: 12px;
  width: 100%;
`;

export default function LocationOpts() {
  return (
    <form>
      <Combobox name="language">
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </Combobox>
      <Combobox name="currency">
        <option value="usd">United States dollar</option>
        <option value="rur">Российский рубль</option>
      </Combobox>
    </form>
  );
}
