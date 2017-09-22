import React from 'react';
import Header from './Header';
import Profile from './Profile';

function App(props) {

var containerStyles = {
  margin: '10',
  padding: '10'
}

  return (
    <div style={containerStyles}>
      <Header/>
      <Profile/>
    </div>
  );
}

export default App;
