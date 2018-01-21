import React from 'react';
import styled from 'styled-components';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Scrolllock from 'react-scrolllock';

const Wrapper = styled.div`
  background: white;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  left: 81px;
  position: fixed;
  top: 132px;
  z-index: 20;
`;

export default function Calendar() {
  return (
    <Wrapper>
      <DayPicker numberOfMonths={2} pagedNavigation />
      <Scrolllock />
    </Wrapper>
  );
}

