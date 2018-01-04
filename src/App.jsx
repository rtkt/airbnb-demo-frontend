import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

const App = function app() {
  return (
    <React.Fragment>
      <Header key="header" />
      <Main key="main" />
    </React.Fragment>
  );
};

export default App;
