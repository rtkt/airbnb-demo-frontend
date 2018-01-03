import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H1 } from '../common';
import HorizontalCard from '../HorizontalCard/';
import photo1 from './photo-1.png';
import photo2 from './photo-2.png';
import photo3 from './photo-3.png';

const Container = styled.div`
  margin-top: 128px;
`;

const ExploreSection = function (props) {
  return (
    <Container className="container-fluid">
      <H1>{props.heading}</H1>
      <div className="row">
        <HorizontalCard img={photo1} text="Homes" />
        <HorizontalCard img={photo2} text="Experiences" />
        <HorizontalCard img={photo3} text="Restaurants" />
      </div>
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
