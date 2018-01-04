import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

const App = function app() {
  return [<Header key="header" />, <Main key="main" />];
};

export default App;
