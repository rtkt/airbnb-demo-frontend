import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H1 } from '../common';

const Container = styled.div`
  margin-top: 128px;
`;

const ExploreSection = function (props) {
  return (
    <Container className="container-fluid">
      <H1>{props.heading}</H1>
    </Container>
  );
};

ExploreSection.defaultProps = {
  heading: 'Your heading here',
};

ExploreSection.propTypes = {
  heading: PropTypes.string,
};

export default ExploreSection;
