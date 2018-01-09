import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homes from './HomesPage';
import Landing from './LandingPage';
import Header from './Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/homes" component={Homes} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
