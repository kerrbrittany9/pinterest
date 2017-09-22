import React from 'react';
import Header from './Header';
import Profile from './Profile';
import { Switch, Route } from 'react-router-dom';
import Michelle from './Michelle';

function App(props) {

var containerStyles = {
  margin: '10',
  padding: '10'
}

  return (
    <div style={containerStyles}>
      <Header/>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/michelle" component={Michelle} />
      </Switch>
    </div>
  );
}

export default App;
