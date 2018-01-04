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
    <Container>
      <H1>{props.heading}</H1>
      <div className="row">
        <div className="col-lg-4">
          <HorizontalCard img={photo1} text="Homes" />
        </div>
        <div className="col-lg-4">
          <HorizontalCard img={photo2} text="Experiences" />
        </div>
        <div className="col-lg-4">
          <HorizontalCard img={photo3} text="Restaurants" />
        </div>
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