import React from 'react';
import styled from 'styled-components';
import { DatePickerRangeController } from 'react-dates';
import { Helmet } from 'react-helmet';
import breakpoints from '../UI/globals';
import { Overlay } from '../UI/Section';
import { Button, HideableButton } from './Buttons';
import Content from './Content';
// import Dates from './Dates/';

const Filters = styled.div`
  background: white;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  left: 0;
  position: fixed;
  right: 0;
  top: 80px;
  z-index: 10;
`;

const Footer = styled.footer`
  color: #636363;
  font-size: 16px;
  line-height: 19px;
  margin-top: 40px;
  margin-bottom: 88px;
  text-align: center;

  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 24px;
  }
`;

const Main = styled.main`
  margin-top: 160px;
`;

export default class HomesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      startDate: null,
      endDate: null,
    };
    this.toggleCalendar = this.toggleCalendar.bind(this);
  }

  onCancel(e) {
    this.setState({ activeFilter: false, startDate: null, endDate: null });
  }

  onApply(e) {
    this.setState({ activeFilter: false });
  }

  onReset(e) {
    this.setState({
      focusedInput: 'startDate',
      startDate: null,
      endDate: null,
    });
  }

  onFocusChang(focusedInput) {
    this.setState({
      focusedInput: !focusedInput ? 'startDate' : focusedInput,
    });
  }

  onDatesChange(startDate, endDate) {
    this.setState({
      startDate,
      endDate,
    });
  }

  toggleCalendar(prevState) {
    /* eslint-disable */
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
    /* eslint-enable */
  }

  /* eslint-disable class-methods-use-this */
  initState() {
    return {
      isOpen: false,
      startDate: undefined,
      endDate: undefined,
    };
  }
  /* eslint-enable class-methods-use-this */

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Homes</title>
        </Helmet>
        <Main>
          {this.state.isOpen && <Overlay />}
          {this.state.isOpen && (
            <DatePickerRangeController
              activeFilter={this.state.activeFilter}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.onFocusChange}
              onApply={this.onApply}
              onClose={this.onClose}
              onReset={this.onReset}
            />
          )}
          <Filters>
            <div className="container">
              <Button onClick={this.toggleCalendar}>Dates</Button>
              <Button>Guests</Button>
              <HideableButton>Room type</HideableButton>
              <HideableButton>Price</HideableButton>
              <HideableButton>Instant book</HideableButton>
              <Button>More filters</Button>
            </div>
          </Filters>
          <Content />
        </Main>
        <Footer>Enter dates to see full pricing. Additional fees apply. Taxes may be added</Footer>
      </React.Fragment>
    );
  }
}
