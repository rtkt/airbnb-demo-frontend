import React from 'react';
import styled from 'styled-components';
import breakpoints from '../UI/globals';
import arrow from '../UI/comboboxButton.svg';

const Combobox = styled.select`
  appearance: none;
  background: white;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: 11px 6px;
  background-position: calc(100% - 8px) center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  font-weight: 200;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-top: 12px;
  width: 100%;

  @media (min-width: ${breakpoints.md}) {
    background-position: calc(100% - 12px) center;
    background-size: 15px 8px;
    font-size: 15px;
    margin-bottom: 12px;
    padding-bottom: 14px;
    padding-top: 14px;
  }

  @media (min-width: ${breakpoints.lg}) {
    background-position: calc(100% - 16px) center;
    font-size: 18px;
    padding-left: 16px;
  }
`;

export default function LocationOpts() {
  return (
    <form>
      <div className="row">
        <div className="col-xs-6 col-md-12">
          <Combobox name="language">
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </Combobox>
        </div>
        <div className="col-xs-6 col-md-12">
          <Combobox name="currency">
            <option value="usd">United States dollar</option>
            <option value="rur">Российский рубль</option>
          </Combobox>
        </div>
      </div>
    </form>
  );
}
