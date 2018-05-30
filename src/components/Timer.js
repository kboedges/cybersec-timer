import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

class Timer extends Component {
  render() {
    return (
      <div className="timer pb-3">
        <p className="text-center pb-3">Your data will be deleted in:</p>
        <h1 className="timer-head text-center mb-5">
      
          <Countdown 
            date={Date.now() + 5*60*60*1000} 
            renderer={props => (
            <div>{`${props.hours}:${props.minutes}:${props.seconds}`.split("").map((char, index) => (
              <span key={index} className={`time-char ${props.total === 0 ? "time-red" : "time-normal"} px-3 py-3 mx-2`}>{char}</span>
            ))}</div>
            )}
          />
        </h1>
      </div>
    );
  }
}

export default Timer;
