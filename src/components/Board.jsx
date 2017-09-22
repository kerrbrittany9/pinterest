import React from 'react';
import { v4 } from 'uuid';
import c from './../constants';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import PinList from './PinList';

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.handleNewPinSubmission = this.handleNewPinSubmission.bind(this);
    this.handleDeletingPin = this.handleDeletingPin.bind(this);
  }

  handleNewPinSubmission(event) {
    event.preventDefault();
    const { _title, _content, _repin } = this.refs;
    const { dispatch } = this.props;
    const action = {
      type: c.ADD_PIN,
      id: v4(),
      title: _title.value,
      content: _content.value,
      repin: 0
    }
    dispatch(action);
    _title.value = "",
    _content.value = ""
  }

  handleDeletingPin(pinId) {
    const { dispatch } = this.props;
    const action = {
      type: c.DELETE_PIN,
      pinId: pinId,
    }
    dispatch(action);
  }

  render() {
    var inputStyle = {
      width: '500',
    }

    return(
      <div>
      <br/>
        <form onSubmit={this.handleNewPinSubmission}>
          <input
            style={inputStyle}
            ref="_title"
            type="text"
            id="title"
            placeholder="Title"/>
          <textarea style={inputStyle}
            ref="_content"
            id="content"
            placeholder="your pin"/>
          <Button bsStyle="danger" type="submit">Pin</Button>
        </form>
        <PinList
          pinList={this.props.masterPinList}
          handleDeletingPin = { this.handleDeletingPin}
          />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    masterPinList : state
  };
};

export default connect(mapStateToProps)(Board);
