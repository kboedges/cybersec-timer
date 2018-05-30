import React, { Component } from 'react';
import {connect} from 'react-redux'
import { STOP_TIMER, UPDATE_TIME } from '../actions';

function hmsCalculator(t) {
  return `${('0' + t.hours).slice(-2)}:${('0' + t.minutes).slice(-2)}:${('0' + t.seconds).slice(-2)}`.split("");
}

// function initializeClock(endtime){
//     var timeinterval = setInterval(function(){
//       var t = getTimeRemaining(endtime);
//       if(t.total <= 0){
//         clearInterval(timeinterval);
//       }
//     },1000);
//   }

class Timer extends Component {

  // componentDidMount(){
  //   initializeClock('clockdiv', deadline);
  // }

  render() {
    const { timeLeft } = this.props;
    console.log(timeLeft)
    
    return (
      <div className="timer pb-3">
        <p className="text-center pb-3">Your data will be deleted in:</p>
        <h1 className="timer-head text-center mb-5">
          {hmsCalculator(timeLeft).map((char, index) => (
            <span key={index} className="time-char px-3 py-3 mx-2">{char}</span>
          ))}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    timeLeft: state.timeReducer.timeLeft
  }
}

export default connect(mapStateToProps)(Timer);
