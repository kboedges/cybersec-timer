import React, { Component } from 'react';
import Passwords from './Passwords'
import Timer from './Timer'

class Active extends Component {
  render() {
    return (
      <div className="active">
        Active.js
        < Timer />
        < Passwords />
      </div>
    );
  }
}

export default Active;
