import React, { Component } from 'react';
import Passwords from './Passwords'
import Timer from './Timer'

class Active extends Component {
  render() {
    return (
      <div className="active">
        <div className="box p-5">
        
       
        
        <Timer/>
        <Passwords/>
        </div>
      </div>
    );
  }
}

export default Active;
