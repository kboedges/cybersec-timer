import React, { Component } from 'react';
import {connect} from 'react-redux'
import Passwords from './Passwords'
import Timer from './Timer'

class Active extends Component {
  render() {
    const {teamName} = this.props;

    return (
      <div className="active">
        <div className="box py-4 px-5">
        <h3 className="text-center team-name">Team: {teamName}</h3>
        <Timer/>
        <Passwords/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teamName: state.timerStartedReducer.teamName
});

export default connect(mapStateToProps)(Active);
