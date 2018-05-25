// Turn timeLeft into an object and then have an if statement for each one and use the comment below to generate a div for hours, mins, secs.

import React, { Component } from 'react';
import { STOP_TIMER, UPDATE_TIME } from '../actions';

let timeLeft = "04:59:59";
let timeLeftArray = timeLeft.split("");

class Timer extends Component {
  render() {
    return (
      <div className="timer pb-3">
      <p className="text-center pb-3">Your data will be deleted in:</p>
      <h1 className="timer-head text-center mb-5">

        
        
        {timeLeftArray.map((char, index) => (
          <span key={index} className="time-char px-3 py-3 mx-2">{char}</span>
        ))}
      
      
      </h1>
        
      </div>
    );
  }
}

export default Timer;
