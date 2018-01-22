import React from 'react';
import { PortalWithState } from 'react-portal';
import moment from 'moment';
import { Button } from '../Buttons';
import Calendar from './Calendar';
import { Overlay } from '../../UI/Section';

const formatDate = date => moment(date).format('Do MMM');

const getButtonText = (range) => {
  if (!range.from && !range.to) {
    return 'Dates';
  }
  return `${formatDate(range.from)} — ${formatDate(range.to)}`;
};

export default class Dates extends React.Component {
  state = {
    from: undefined,
    to: undefined,
  };

  onDatesChange = (range) => {
    this.setState({
      from: range.from,
      to: range.to,
    });
  };

  render() {
    return (
      <React.Fragment>
        <PortalWithState closeOnOutsideClick>
          {({ openPortal, closePortal, portal }) => [
            <Button onClick={openPortal}>{getButtonText(this.state)}</Button>,
            portal (
              <React.Fragment>
                <Overlay onClick={closePortal} />
                <Calendar
                  closePortal={closePortal}
                  from={this.state.from}
                  onDatesChange={this.onDatesChange}
                  to={this.state.to}
                />
              </React.Fragment>
            ),
          ]}
        </PortalWithState>
      </React.Fragment>
    );
  }
}

