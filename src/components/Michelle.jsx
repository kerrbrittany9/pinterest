import React from 'react';
import PinList from './PinList';
import {connect} from 'react-redux';
import c from './../constants';
import { Button } from 'react-bootstrap';
import { v4 } from 'uuid';
import MichelleBoard from './MichelleBoard';



class Michelle extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    var containerStyle = {
      padding: '90',
      display: 'grid',
      gridTemplateColumns: '30% 5% 5% 50%',
      gridGap: '5% 10%',
      gridTemplateRows: '50% 50%'
    }
    var imageStyle = {
      width: '300',
      borderRadius: '25'
    }
     var listStyle = {
       display: 'block'
     }

    return (
      <div style={containerStyle}>
        <h2>Michelle O</h2>
        <p>Followers: 3M</p>
        <p>Following: 3k</p>
        <img style={imageStyle} src="https://www.bellanaija.com/wp-content/uploads/2016/03/MICHELLE-OBAMA-THE-VERGE3.png"/>
        <PinList style={listStyle} pinList = {this.props.michelleMasterPinList}/>
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
