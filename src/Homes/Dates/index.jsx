import React from 'react';
// import styled from 'styled-components';
import { Button } from '../Buttons';

// const Container = styled.div`
//   position: absolute;
//   z-index: 7;
// `;

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initState();
  }

  /* eslint-disable class-methods-use-this */
  initState() {
    return {
      buttonText: 'Dates',
      isOpen: false,
    };
  }
  /* eslint-enable class-methods-use-this */

  render() {
    return (
      <React.Fragment>
        <Button>{this.state.buttonText}</Button>
      </React.Fragment>
    );
  }
}

export default Dates;
