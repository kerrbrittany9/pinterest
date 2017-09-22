import React from 'react';
import PinList from './PinList';
import {connect} from 'react-redux';

class Michelle extends React.Component {

  render () {
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
        <PinList pinList = {this.props.michelleMasterPinList}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    michelleMasterPinList : state
  }
}

export default connect(mapStateToProps)(Michelle);
