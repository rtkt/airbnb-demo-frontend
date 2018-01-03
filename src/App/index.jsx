import React from 'react';
import CardsSection from '../ExploreSection/';
import Header from '../Header/';

const App = function () {
  return ([
    <Header />,
    <main>
      <CardsSection heading="Explore Airbnb" />
    </main>,
  ]);
};

export default App;
