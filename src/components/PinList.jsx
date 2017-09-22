import React from 'react';
import PropTypes from 'prop-types';
import Pin from './Pin.jsx';

function PinList(props) {
  var showList;
  if (props.pinList.length > 0) {
    showList = <h3>Barry's Pins</h3>
  }

  return (
    <div>
      {showList}
      {props.pinList.map((pin) =>
      <Pin
        pin={pin}
        key={pin.id}
        id={pin.id}
        pinList={props.pinList}
        handleDeletingPin={props.handleDeletingPin}
        />
      )}
    </div>
  )
}

PinList.propTypes = {
  pinList: PropTypes.array,
  pin: PropTypes.object,
  id: PropTypes.string,
  handleDeletingPin: PropTypes.func
}

export default PinList;
