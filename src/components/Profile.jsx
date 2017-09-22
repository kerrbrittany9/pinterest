import React from 'react';

function Profile() {

  var containerStyle = {
    padding: '90',
    display: 'grid',
    gridTemplateColumns: '30% 7% 7% 40%',
    gridGap: '5% 10% 90%',
  }

  var imageStyle = {
    width: '300',
    borderRadius: '25'

  }

  return(
    <div style={containerStyle}>
      <h2>Barry Obama</h2>
      <p>Followers: 1M</p>
      <p>Following: 3</p>
      <img style={imageStyle} src="http://www.billboard.com/files/media/President-Barack-Obama-2014-billboard-650.jpg"/>
    </div>
  )
}

export default Profile;