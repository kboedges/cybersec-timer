import React, { Component } from 'react';
import {connect} from 'react-redux'
import { startTimer } from '../actions';

class Begin extends Component {
  // onChange(e) {
  //   e.preventDefault()
  //   this.props.startTimer()
  // }

  render() {
    const {timerStarted} = this.props;
    const {startTimer} = this.props;
    
    return (
      <div className="begin">
       <div className="box p-5 d-flex d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center m-3">Begin your challenge.</h1>
        <input className="form-control w-50 m-3" type="text" placeholder="Team Name"/>
        <button className="m-3 btn btn-lg btn-cornflower px-5" onClick={startTimer}>{timerStarted ? "Continue" : "Start"}</button>
      
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  timerStarted: state.timerStartedReducer
});

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Begin);
