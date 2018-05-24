// Turn timeLeft into an object and then have an if statement for each one and use the comment below to generate a div for hours, mins, secs.

import React, { Component } from 'react';

let timeLeft = "04:59:59";
let timeLeftArray = timeLeft.split("");

class Timer extends Component {
  render() {
    return (
      <div className="timer">
      <h1 className="timer-head text-center mt-4 mb-5">

        
        
        {timeLeftArray.map((char, index) => (
          <span key={index} className="time-char px-3 py-3 mx-2">{char}</span>
        ))}
      
      
      </h1>
        
      </div>
    );
  }
}

export default Timer;
