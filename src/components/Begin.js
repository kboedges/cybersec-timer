import React, { Component } from 'react';
import {connect} from 'react-redux'
import { startTimer } from '../actions';

class Begin extends Component {

  render() {
    const {timerStarted, startTimer} = this.props;
    
    return (
      <div className="begin">
       <form className="box p-5 d-flex d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center m-3">Begin your challenge.</h1>
        <input className="form-control w-50 m-3" type="text" placeholder="Team Name"/>
        <button className="m-3 btn btn-lg btn-cornflower px-5" onClick={() => startTimer("Cool Team")}>{timerStarted ? "Continue" : "Start"}</button>
      </form>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  timerStarted: state.timerStartedReducer.timerStarted,
  teamName: state.timerStartedReducer.teamName
});

const mapDispatchToProps = dispatch => ({
  startTimer: (teamName) => dispatch(startTimer(teamName))
});

export default connect(mapStateToProps, mapDispatchToProps)(Begin);
