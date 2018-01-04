import React from 'react';
import ExploreSection from '../ExploreSection/';
import Header from '../Header/';

const App = function () {
  return ([
    <Header />,
    <main>
      <div className="container">
        <ExploreSection heading="Explore Airbnb" />
      </div>
    </main>,
  ]);
};

export default App;
