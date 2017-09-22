import React from 'react';

function Michelle() {

  var containerStyle = {
    padding: '90',
    display: 'grid',
    gridTemplateColumns: '30% 5% 5% 50%',
    gridGap: '5% 10%'
  }

  var imageStyle = {
    width: '300',
    borderRadius: '25'
  }

  return (
    <div style={containerStyle}>
      <h2>Michelle O</h2>
      <p>Followers: 3M</p>
      <p>Following: 3k</p>
      <img style={imageStyle} src="https://www.bellanaija.com/wp-content/uploads/2016/03/MICHELLE-OBAMA-THE-VERGE3.png"/>
    </div>
  );
}

export default Michelle;
