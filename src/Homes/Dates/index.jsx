import React from 'react';
import { PortalWithState } from 'react-portal';
import { Button } from '../Buttons';
import Calendar from './Calendar';
import { Overlay } from '../../UI/Section';

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
      <React.Fragment>
        <PortalWithState closeOnOutsideClick>
          {({ openPortal, closePortal, portal }) => [
            <Button onClick={openPortal}>{this.state.buttonText}</Button>,
            portal(<React.Fragment><Overlay onClick={closePortal} /><Calendar /></React.Fragment>),
          ]}
        </PortalWithState>
      </React.Fragment>
    );
  }
}

export default Dates;
