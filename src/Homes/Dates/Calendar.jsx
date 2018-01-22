import React from 'react';
import styled from 'styled-components';
import DayPicker, { DateUtils } from 'react-day-picker';
import Scrolllock from 'react-scrolllock';
import MediaQuery from 'react-responsive';
import './Calendar.css';
import breakpoints from '../../UI/globals';
import { Apply, Bottom, Cancel } from './Buttons';

const Wrapper = styled.div`
  background: white;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  left: 8px;
  position: fixed;
  top: 132px;
  z-index: 20;

  @media(min-width: ${breakpoints.lg}) {
    left: 81px;
  }
`;

const getMonthsNumber = () => {
  const mm = window.matchMedia;
  if (mm(`(min-width: ${breakpoints.lg})`).matches) {
    return 2;
  } else if (mm(`(min-width: ${breakpoints.md})`).matches) {
    return 1;
  }
  return 12;
};

export default class Calendar extends React.Component {
  state = {
    from: this.props.from,
    to: this.props.to,
  };

  apply = () => {
    this.props.onDatesChange(this.state);
    this.props.closePortal();
  };

  cancel = () => {
    this.props.closePortal();
  };

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const mdSizeQuery = `(min-width: ${breakpoints.md})`;
    return (
      <Wrapper>
        <DayPicker
          className="Selectable"
          numberOfMonths={getMonthsNumber()}
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
          modifiers={modifiers}
          pagedNavigation
        />
        <Bottom>
          <Cancel onClick={this.cancel}>Cancel</Cancel>
          <Apply onClick={this.apply}>Apply</Apply>
        </Bottom>
        <MediaQuery query={mdSizeQuery}>
          <Scrolllock />
        </MediaQuery>
      </Wrapper>
    );
  }
}
