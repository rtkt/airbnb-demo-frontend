import React from 'react';
import { PortalWithState } from 'react-portal';
import { Button } from '../Buttons';
import Calendar from './Calendar';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Dates',
    };
  }

  toggleCalendar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <PortalWithState closeOnOutsideClick>
        {({ openPortal, portal }) => [
          <Button onClick={openPortal}>{this.state.buttonText}</Button>,
          portal(<Calendar />),
        ]}
      </PortalWithState>
    );
  }
}

export default Dates;
