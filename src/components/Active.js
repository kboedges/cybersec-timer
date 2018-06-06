import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchPasses} from '../actions'
import Passwords from './Passwords'
import Timer from './Timer'

class Active extends Component {
  
  // Fetch all the secret passwords whenever the Active screen appears
  componentDidMount() {
    this.props.fetchPasses();
  }

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

// Pull in the teamName from the store
const mapStateToProps = state => ({
  teamName: state.timerStartedReducer.teamName
});

// Pull in an action
const mapDispatchToProps = dispatch => ({
  fetchPasses: () => dispatch(fetchPasses())
});

export default connect(mapStateToProps, mapDispatchToProps)(Active);
