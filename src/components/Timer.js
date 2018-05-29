// Turn timeLeft into an object and then have an if statement for each one and use the comment below to generate a div for hours, mins, secs.

import React, { Component } from 'react';
import {connect} from 'react-redux'
import { STOP_TIMER, UPDATE_TIME } from '../actions';

function hmsCalculator(t) {
  const seconds = Math.floor( (t.total/1000) % 60 );
  const minutes = Math.floor( (t.total/1000/60) % 60 );
  const hours = Math.floor( (t.total/(1000*60*60)) % 24 );
  console.log(t);
  return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`.split("");
}
  

let timeLeft = "04:59:59";
let timeLeftArray = timeLeft.split("");

class Timer extends Component {

  render() {
    const { state } = this.props;
    console.log(hmsCalculator(state.timeReducer.timeLeft));
    
    return (
      <div className="timer pb-3">
      <p className="text-center pb-3">Your data will be deleted in:</p>
      <h1 className="timer-head text-center mb-5">

        
        
        {hmsCalculator(state.timeReducer.timeLeft).map((char, index) => (
          <span key={index} className="time-char px-3 py-3 mx-2">{char}</span>
        ))}
      
      
      </h1>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}


export default connect(mapStateToProps)(Timer);
