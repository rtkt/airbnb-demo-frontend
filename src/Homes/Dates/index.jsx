import React from 'react';
import styled from 'styled-components';
import { DatePickerRangeController as Picker, isInclusivelyAfterDay } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

const Container = styled.div`
  position: absolute;
  z-index: 7;
`;

export default function Dates(props) {
  const picker = (
    <Picker
      endDate={props.endDate}
      focusedInput={props.focusedInput}
      onDatesChange={props.onDatesChange}
      onFocusChange={props.onFocusChange}
      startDate={props.startDate}
    />
  );

  return <Container>{picker}</Container>;
}
