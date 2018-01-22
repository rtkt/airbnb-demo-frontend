import React from 'react';
import { PortalWithState } from 'react-portal';
import moment from 'moment';
import { Button } from '../Buttons';
import Calendar from './Calendar';
import { Overlay } from '../../UI/Section';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Dates',
      from: undefined,
      to: undefined,
    };
  }

  onDatesChange = (range) => {
    this.setState({
      buttonText: this.setButtonText(range),
      from: range.from,
      to: range.to,
    });
  };

  setButtonText = (range) => {
    return `${moment(range.from).format('Do MMM')} — ${moment(range.to).format('Do MMM')}`;
  };

  render() {
    return (
      <React.Fragment>
        <PortalWithState closeOnOutsideClick>
          {({ openPortal, closePortal, portal }) => [
            <Button onClick={openPortal}>{this.state.buttonText}</Button>,
            portal(
              <React.Fragment>
                <Overlay onClick={closePortal} />
                <Calendar closePortal={closePortal} onDatesChange={this.onDatesChange} />
              </React.Fragment>,
            ),
          ]}
        </PortalWithState>
      </React.Fragment>
    );
  }
}

export default Dates;
