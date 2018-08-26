import React, { Component } from 'react';

import './EditPlayer.css';

class EditPlayer extends Component {
  constructor(props) {
    super(props);
    this.input = undefined;
    this.state = {
      editing: false
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onPlayerUpdate(this.input.value);
    this.setState({
      editing: false
    })
    this.input.value = '';
  }

  onEditing = () => {
    this.setState({
      editing: true
    })
  }

  inputValue = (node) => {
    if (node) {
      this.input = node;
      this.input.value = this.props.value;
    }
  }

  render() {
    if (this.state.editing) {
      return (
        <form onSubmit={this.onSubmit}>
          <input type="text" className="Edit_input" ref={(node) => this.inputValue(node)} autoFocus/>
        </form>
      )
    } else {
      return (
        <span className="Player_edit" onClick={() => this.onEditing()}>{this.props.value}</span>
      )
    }

  }
}

export default EditPlayer;
