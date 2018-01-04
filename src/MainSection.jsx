import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H1 } from './common';

const Container = styled.section`
  margin-top: ${props => props.marginTop}px;
`;

const MainSection = function (props) {
  return (
    <Container>
      <H1>{props.heading}</H1>
    </Container>
  );
};

MainSection.defaultProps = {
  marginTop: 0,
};

MainSection.propTypes = {
  heading: PropTypes.string.isRequired,
  /* eslint-disable react/no-unused-prop-types */
  marginTop: PropTypes.number,
  /* eslint-enable react/no-unused-prop-types */
};

export default MainSection;
