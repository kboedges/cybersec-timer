import React, { Component } from "react";
import Countdown from "react-countdown-now";

class Timer extends Component {
  render() {
    return (
      <div className="timer pb-3">
        <p className="text-center pb-3">Your data will be deleted in:</p>
        <h1 className="timer-head text-center mb-2">
          <Countdown
            date={Date.now() + 5 * 60 * 60 * 1000}
            renderer={props => (
              <div>
                {`${props.hours}:${props.minutes}:${props.seconds}`
                  .split("")
                  .map((char, index) => (
                    <span
                      key={index}
                      className={`time-char ${
                        props.total === 0 ? "time-red" : "time-normal"
                      } px-2 py-3 mx-1`}
                    >
                      {char}
                    </span>
                  ))}
              </div>
            )}
          />
        </h1>
        <div className="d-flex flex-row justify-content-around time-stamps text-small mb-5 px-2">
          <span className="hours">HOURS</span>
          <span className="minutes">MINUTES</span>
          <span className="seconds">SECONDS</span>
        </div>
      </div>
    );
  }
}

export default Timer;
