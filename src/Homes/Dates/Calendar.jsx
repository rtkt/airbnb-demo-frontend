import React from 'react';
import styled from 'styled-components';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Scrolllock from 'react-scrolllock';
import MediaQuery from 'react-responsive';
import breakpoints from '../../UI/globals';

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

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: undefined,
      to: undefined,
    };
  }

  /* eslint-disable class-methods-use-this */
  getMonthsNumber() {
    const mm = window.matchMedia;
    if (mm(`(min-width: ${breakpoints.lg})`).matches) {
      return 2;
    } else if (mm(`(min-width: ${breakpoints.md})`).matches) {
      return 1;
    }
    return 12;
  }
  /* eslint-enable class-methods-use-this */

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <Wrapper>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.getMonthsNumber()}
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
          modifiers={modifiers}
          pagedNavigation
        />
        <MediaQuery query="(min-width: ${breakpoints.md})">
          <Scrolllock />
        </MediaQuery>
      </Wrapper>
    );
  }
}

export default Calendar;
