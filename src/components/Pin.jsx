import React from 'react';
import PropTypes from 'prop-types';


function Pin(props) {
  return(
    <div>
      <h2>{props.pin.title}</h2>
      <p>{props.pin.content}</p>
      <h5>Repins: {props.pin.repin}</h5>
      <button onClick={() => { props.handleDeletingPin(props.pin.id)}}>Delete</button>
    </div>
  )
}

Pin.propTypes = {
  pin: PropTypes.object,
  pinList: PropTypes.array,
  id: PropTypes.string,
  handleDeletingPin: PropTypes.func
}

export default Pin;
