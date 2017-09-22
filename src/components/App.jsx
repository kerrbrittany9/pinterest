import React from 'react';
import Header from './Header';

function App(props) {

var containerStyles = {
  margin: '10',
  padding: '10'
}

  return (
    <div style={containerStyles}>
      <Header/>
    </div>
  );
}

export default App;
