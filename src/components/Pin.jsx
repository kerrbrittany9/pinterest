import React from 'react';
import PropTypes from 'prop-types';


function Pin(props) {
  return(
    <div>
      <h2>{props.pin.title}</h2>
      <p>{props.pin.content}</p>
      <h5>Repins: {props.pin.repin}</h5>
    </div>
  )
}

Pin.propTypes = {
  pin: PropTypes.object,
  pinList: PropTypes.array
}

export default Pin;
